import React from "react";
import type { NextPage } from "next";
import { Box, Container, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta
          name="description"
          content="a simple wallet to send and recieve crypto"
        />
      </Head>
      <Container padding={10} paddingTop={100}>
        <Heading>Privacy Policy</Heading>
        <Text>
          This Privacy Policy outlines the practices and policies of Orbyt
          ("we," "our," or "us") regarding the collection, use, and disclosure
          of personal information when you use our non-custodial mobile
          application ("Orbyt" or the "App"). We are committed to protecting
          your privacy and ensuring the security of your personal information.
          By using the App, you consent to the collection, use, and disclosure
          of your personal information as described in this Privacy Policy.
        </Text>
        <Heading>1. Information We Collect</Heading>
        <Text>
          1.1. Personal Information: Orbyt is a non-custodial app that does not
          require or collect any personal identifiable information such as your
          name, address, email address, or phone number. We do not have access
          to or store any personal information on our servers. Your personal
          information remains under your control on your device.
        </Text>
        <Text>
          1.2. Non-Personal Information: We may collect non-personal information
          that does not directly identify you. This may include device
          information, technical information about your mobile device, and usage
          statistics related to your interaction with the App. This information
          is collected anonymously and used solely for the purpose of improving
          the App's functionality and user experience.
        </Text>
        <Heading>2. Use of Information</Heading>
        <Text>
          2.1 Personal Information: Since we do not collect or store personal
          information, we do not use your personal information for any purpose.
        </Text>
        <Text>
          2.2. Non-Personal Information: We may use non-personal information
          collected from you to analyze App usage patterns, diagnose technical
          issues, and improve the App's performance and features. This
          information may also be used for statistical purposes and to enhance
          our understanding of user preferences.
        </Text>
        <Heading>3. Data Security</Heading>
        <Text>
          We take appropriate technical and organizational measures to protect
          the security of your personal information. However, please note that
          no method of transmission over the internet or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your personal information, we cannot guarantee its
          absolute security.
        </Text>
        <Heading>4. Third-Party Services</Heading>
        <Text>
          Orbyt may integrate with third-party services or software development
          kits (SDKs) to provide certain features or functionality within the
          App. These third-party services may collect and process information
          according to their own privacy policies. We encourage you to review
          the privacy policies of any third-party services you choose to use.
        </Text>
        <Heading>5. Children's Privacy</Heading>
        <Text>
          Orbyt is not intended for use by individuals under the age of 16. We
          do not knowingly collect personal information from children. If we
          become aware that we have inadvertently collected personal information
          from a child under the age of 16, we will take steps to delete such
          information from our records.
        </Text>
        <Heading>6. Changes to this Privacy Policy</Heading>
        <Text>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the "Effective Date" at the top. We recommend that you review
          this Privacy Policy periodically for any changes. Your continued use
          of the App after any modifications to this Privacy Policy constitutes
          your acceptance of the revised Privacy Policy.
        </Text>
        <Heading>7. Contact Us</Heading>
        <Text>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at [insert contact email]. We
          will make every effort to address your concerns and resolve any
          privacy issues you may have. By using the Orbyt App, you acknowledge
          that you have read, understood, and agreed to the terms of this
          Privacy Policy.
        </Text>
      </Container>
    </>
  );
};

export default Privacy;
