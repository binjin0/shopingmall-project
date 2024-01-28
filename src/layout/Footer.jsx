import React from "react";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcDinersClub } from "@fortawesome/free-brands-svg-icons";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className=" p-10  footer bg-base-200 text-base-content footer-center ">
      <div className="grid grid-flow-col gap-4">
        <a
          rel="noreferrer noopener external"
          className="link link-hover"
          href="http://zero-base.co.kr/"
          target="_blank"
        >
          제로베이스
        </a>
      </div>
      <ul className="flex">
        <li>
          <FontAwesomeIcon icon={faCcVisa} className="" />
          {/* <title id="pi-visa">Visa</title> */}
        </li>
        <li>
          <FontAwesomeIcon icon={faCcMastercard} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCcAmex} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCcPaypal} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCcDinersClub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCcDiscover} />
        </li>
      </ul>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            rel="noreferrer noopener external"
            data-tip="facebook"
            className="tooltip"
            target="_blank"
            href="https://www.facebook.com/0base"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            rel="noreferrer noopener external"
            data-tip="instagram"
            className="tooltip"
            target="_blank"
            href="https://www.instagram.com/zerobase.official/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            rel="noreferrer noopener external"
            data-tip="github"
            className="tooltip ml-1"
            target="_blank"
            href=""
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 Zero Base </p>
      </div>
    </footer>
  );
}
