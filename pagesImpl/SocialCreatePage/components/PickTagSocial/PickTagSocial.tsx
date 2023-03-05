import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import {
  ComponentProps,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import { DEFAULT_SOCIAL_TAGS } from "../../constants";
import { XMarkIcon } from "@heroicons/react/20/solid";

import s from "./PickTagSocial.module.scss";

interface PickTagSocialProps extends ComponentProps<"input"> {
}

export default function PickTagSocial(props: PickTagSocialProps) {

  const [tags, setTags] = useState([...DEFAULT_SOCIAL_TAGS]);

  const clearTag = (tag: string) => () => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const addTag = (tag: string) => () => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <div className={s.form}>
      <div className={s.formFields}>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div className={s.badge} key={tag}>
              <div className={s.label}>{tag}</div>
              <XMarkIcon
                className="h-4 w-4 cursor-pointer"
                onClick={clearTag(tag)}
              />
            </div>
          ))}
        </div>

        <div className={s.badgeParent}>
          {DEFAULT_SOCIAL_TAGS.map((tag) => {
            if (tags.includes(tag)) return null;

            return (
              <div
                onClick={addTag(tag)}
                key={tag}
                className={classNames(s.badge1, "cursor-pointer")}
              >
                <div className={s.label}>{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
