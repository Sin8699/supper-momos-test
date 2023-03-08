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
import { BANNER_URLS } from "../../constants";
import { XMarkIcon } from "@heroicons/react/24/solid";

import s from "./UploadBannerModal.module.scss";

interface UploadBannerModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onChange?: Dispatch<SetStateAction<string | undefined>>;
}

export default function UploadBannerModal(props: UploadBannerModalProps) {
  const { open, setOpen, onChange } = props;
  const [selected, setSelected] = useState<string>();

  const cancelButtonRef = useRef(null);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSave = () => {
    if (selected) onChange?.(selected);

    closeModal();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[684px]">
                <div className="px-4 pt-4 sm:flex sm:px-6 flex justify-between items-center">
                  <span className={classNames(s.title, "font-bold text-xl")}>
                    Choose a banner
                  </span>
                  <XMarkIcon className="h-6 w-6" onClick={closeModal} />
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-wrap gap-3 h-[457px]">
                  {BANNER_URLS.map((banner) => {
                    return (
                      <div
                        className={
                          selected === banner ? "ring-offset-1 ring-2" : ""
                        }
                        key={banner}
                        onClick={() => setSelected(banner)}
                      >
                        <img width={150} src={banner} alt={banner} />
                      </div>
                    );
                  })}
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className={classNames(
                      "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto",
                      s.saveBtn
                    )}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className={classNames(
                      "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    )}
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
