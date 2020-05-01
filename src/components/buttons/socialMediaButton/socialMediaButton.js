import React from "react";
import "./socialMediaButton.scss";
export default function socialMediaButton({ google = false }) {
  const googleButton = (
    <a class="btn-google" href="#">
      <div class="google-content">
        <div class="logo">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p>Sign in with Google</p>
      </div>
    </a>
  );

  const fbButton = (
    <a class="btn-fb" href="#">
      <div class="fb-content">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1"
          >
            <path
              fill="#FFFFFF"
              d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"
            />
            <path
              fill="#4267b2"
              d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"
            />
          </svg>
        </div>
        <p>Sign in with Facebook</p>
      </div>
    </a>
  );

  const button = google ? googleButton : fbButton;

  return <div>{button}</div>;
}
