import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { ComponentPropsWithoutRef } from "react";

import s from "./WebLayoutTopBar.module.scss";

interface WebLayoutTopBarProps extends ComponentPropsWithoutRef<"header"> {}

export function WebLayoutTopBar({ ...headerProps }: WebLayoutTopBarProps) {
  return (
    <header className={s.header} {...headerProps}>
      <div className={s.content}>
        <img
          className={s.screenShot20220509At929}
          alt="logo"
          src="/images/logo.png"
        />
        <div className={s.navigation}>
          <div className={s.button}>
            <div className={s.buttonBase}>
              <div className={s.text}>Blog</div>
            </div>
          </div>
          <div className={s.button}>
            <div className={s.buttonBase}>
              <div className={s.text}>Socials</div>
            </div>
          </div>
          <div className={s.button}>
            <div className={s.buttonBase}>
              <div className={s.text}>Past Socials</div>
            </div>
          </div>
          <div className={s.dropdownHeaderNavigationTri}>
            <div className={s.button}>
              <div className={s.buttonBase3}>
                <div className={s.text}>Clubs</div>
                <ChevronDownIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className={s.button}>
            <div className={s.buttonBase}>
              <div className={s.text}>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
