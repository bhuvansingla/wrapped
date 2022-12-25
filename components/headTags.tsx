import Head from "next/head";
import React from "react";
import Constants from "../utils/constants";

/**
 * Homepage head tags
 * @param user the current user
 * @returns title, meta tags, styles, favicon, etc
 */
function HeadTags({ user }) {
  // User's full name or login
  let username = !user ? "" : user.fullName ? user.fullName : "";

  // Put user's stats in link preview if published, otherwise default image
  let linkPreviewURL =
    user && user.linkPreviewURL ? user.linkPreviewURL : Constants.NEAT.OG_IMAGE;

  // Put user's name in link preview as social proof
  let linkPreviewTitle = `${
    username ? `${user.fullName}'s ` : ""
  }GitHub Wrapped`;

  return (
    <Head>
      {/* Eg. natfriedman's GitHub Wrapped */}
      <title>{linkPreviewTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content="Dive into analytics of your year as a developer. Total commits, top repositories, and favourite languages."
      />
      <meta content="text/html; charset=UTF-8" name="Content-Type" />

      {/* Dynamically generated link preview */}
      <meta property="og:title" content={linkPreviewTitle} />
      <meta property="og:url" content="https://wrapped.run" />
      <meta property="og:site_name" content="Wrapped.run" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={linkPreviewURL} />
      <meta
        property="og:description"
        content={`${
          user && user.fullName
            ? `${user.fullName} coded a lot in 2022. See your own stats:`
            : "Dive into analytics of your year as a developer:"
        } total commits, top repositories, and favourite languages.`}
      />

      {/* Twitter-specific meta tags use name instead of property */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@neat_run" />
      <meta name="twitter:title" content={linkPreviewTitle} />
      <meta name="twitter:image" content={linkPreviewURL} />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        crossOrigin="anonymous"
      />
    </Head>
  );
}

export default HeadTags;
