import classNames from "classnames";
import { ComponentProps, PropsWithChildren, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import s from "./InputArea.module.scss";

interface InputAreaProps extends ComponentProps<"textarea"> {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
}

export function InputArea({
  onlyView,
  defaultText,
  className,
}: PropsWithChildren<InputAreaProps>): JSX.Element {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setEditing(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  if (onlyView) return onlyView;

  return (
    <>
      {editing ? (
        <textarea
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
          {value || defaultText}
        </div>
      )}
    </>
  );
}
