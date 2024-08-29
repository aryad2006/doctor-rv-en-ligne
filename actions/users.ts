"use server";

import EmailTemplate from "@/components/emails/email-template";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";

export async function creerUser(formData: RegisterInputProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, role, phone, password } = formData;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `L'utilisateur avec cet email ( ${email})  existe déjà`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });
    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const linkText = "Vérifier votre compte ";
    const message =
      "Merci de vous être inscrit sur Doc4now. Pour finaliser votre inscription et vérifier votre adresse e-mail, veuillez saisir le code de vérification à 6 chiffres suivant sur notre site Web :";
    const sendMail = await resend.emails.send({
      from: "Doc4now <info@doc4now.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({
        name: firstName + lastName,
        token,
        linkText,
        message,
      }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Une erreur est survenue lors de la création de l'utilisateur",
    };
  }
}

export async function updateUserById(id: string) {
  if (id) {
    try {
      const updateUser = await prismaClient.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          isVerified: true,
        },
      });
      return updateUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
}

export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
}
