import classNames from "classnames";
import {
  ComponentProps,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import s from "./InputDateTime.module.scss";

interface InputDateTimeProps extends ComponentProps<"input"> {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
}

export function InputDateTime({
  onlyView,
  defaultText,
  className,
}: PropsWithChildren<InputDateTimeProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultText);

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setEditing(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  if (onlyView) return onlyView;

  return (
    <>
      {editing ? (
        <input
          className={classNames(className)}
          value={value}
          autoFocus
          ref={wrapperRef}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <div
          className={classNames(className)}
          onClick={() => setEditing((prev) => !prev)}
        >
          {value}
        </div>
      )}
    </>
  );
}
