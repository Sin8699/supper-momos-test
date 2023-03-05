import classNames from "classnames";
import { ComponentProps, PropsWithChildren, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { ErrorMessage } from "../../ErrorMessage";

import s from "./InputText.module.scss";

interface InputTextProps extends ComponentProps<"input"> {
  onlyView?: JSX.Element;
  defaultText: string;
  className?: string;
  errors?: string;
}

export function InputText({
  onlyView,
  defaultText,
  className,
  errors,
}: PropsWithChildren<InputTextProps>): JSX.Element {
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
        <>
          <input
            className={classNames(className)}
            value={value}
            autoFocus
            ref={wrapperRef}
            onChange={(e) => setValue(e.target.value)}
          />
          {<ErrorMessage errors={errors} />}
        </>
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
