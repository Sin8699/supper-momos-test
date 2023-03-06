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
import { ErrorMessage } from "../../../../components/ErrorMessage";

interface PickTagSocialProps {
  tags: string[];
  errors?: string;
  onChange: (t: string[]) => void;
}

export default function PickTagSocial(props: PickTagSocialProps) {
  const { tags, onChange, errors } = props;

  const clearTag = (tag: string) => () => {
    onChange(tags.filter((t) => t !== tag));
  };

  const addTag = (tag: string) => () => {
    onChange([...tags, tag]);
  };

  return (
    <div className={s.form}>
      <div className={classNames(s.formFields, "mb-1")}>
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
      {errors && <ErrorMessage errors={errors} />}
    </div>
  );
}
