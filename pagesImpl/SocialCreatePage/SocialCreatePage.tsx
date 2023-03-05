import styles from "./SocialCreatePage.module.scss";
import { ReactElement, useCallback, useState } from "react";
import { WebLayout } from "../../components/layout/WebLayout/WebLayout";
import CloudArrowUpIcon from "@heroicons/react/24/solid/CloudArrowUpIcon";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import classNames from "classnames";
import { InputText } from "../../components/editor/InputText/InputText";
import UploadBannerModal from "./components/UploadBannerModal/UploadBannerModal";
import { InputDateTime } from "../../components/editor/InputDateTime/InputDateTime";
import { InputTime } from "../../components/editor/InputDateTime/InputTime";
import PickTagSocial from "./components/PickTagSocial/PickTagSocial";
import { InputArea } from "../../components/editor/InputArea/InputArea";

export const SocialCreatePage = () => {
  const [openBannerModal, setOpenBannerModal] = useState(false);
  const [bannerURL, setBannerURL] = useState<string>();

  const openModal = useCallback(() => {
    setOpenBannerModal(true);
  }, []);

  return (
    <>
      <div className={styles.createSocialParent}>
        <div className={styles.createSocial}>
          <div className={styles.imageParent} onClick={openModal}>
            <div className={styles.image}>
              <div className={styles.fiSrPicture1Parent}>
                <CloudArrowUpIcon className="h-6 w-6 " />

                <div className={styles.addABanner}>Add a banner</div>
              </div>
            </div>
            <img src={bannerURL} className={styles.image} />

            <div className={styles.heroHeaderSection}>
              <div className={styles.section}>
                <div className={styles.section1}>
                  <div className={styles.container1}>
                    <div className={styles.content1}>
                      <div className={styles.iconAndText}>
                        <div className={styles.headingAndSupportingText}>
                          <div className={styles.frameParent}>
                            <div className={styles.frameWrapper}>
                              <InputText
                                className={styles.headingWrapper}
                                defaultText="Untitle Event"
                                name="title"
                              ></InputText>
                            </div>
                            <div className={styles.frameGroup}>
                              <div
                                className={styles.mediaIconfilledcalendarParent}
                              >
                                <CalendarIcon
                                  className={classNames(
                                    "h-12 w-12",
                                    styles.iconForm
                                  )}
                                />

                                <InputDateTime
                                  className={classNames(
                                    "w-[181px]",
                                    styles.headingContainer
                                  )}
                                  defaultText="Date"
                                  name="tate"
                                ></InputDateTime>
                              </div>
                              <div
                                className={styles.mediaIconfilledclockParent}
                              >
                                <ClockIcon
                                  className={classNames(
                                    "h-12 w-12",
                                    styles.iconForm
                                  )}
                                />

                                <InputTime
                                  className={classNames(
                                    "max-w-[181px]",
                                    styles.headingContainer
                                  )}
                                  defaultText="Time"
                                  name="time"
                                ></InputTime>
                              </div>
                            </div>
                            <div className={styles.frameDiv}>
                              <div className={styles.frameParent1}>
                                <div
                                  className={
                                    styles.mediaIconfilledlocationMWrapper
                                  }
                                >
                                  <MapPinIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />
                                </div>
                                <div className={styles.imageWrapper}>
                                  <InputText
                                    name="venue"
                                    defaultText="Venue"
                                    className={styles.headingWrapper1}
                                  />
                                </div>
                              </div>
                              <div className={styles.frameParent2}>
                                <div
                                  className={
                                    styles.mediaIconfilleduserGroupParent
                                  }
                                >
                                  <UserGroupIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />

                                  <InputText
                                    name="capacity"
                                    defaultText="Max capacity"
                                    className={styles.headingWrapper2}
                                  />
                                </div>
                                <div
                                  className={
                                    styles.mediaIconfilleduserGroupParent
                                  }
                                >
                                  <CurrencyDollarIcon
                                    className={classNames(
                                      "h-6 w-6",
                                      styles.iconForm
                                    )}
                                  />
                                  <InputText
                                    name="cost"
                                    defaultText="Cost per person"
                                    className={styles.headingWrapper2}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.textareaInputField}>
                            <div className={styles.inputWithLabel}>
                              <div className={styles.label}>Description</div>
                              <InputArea
                                className={styles.input}
                                defaultText="Description of your event.."
                                name="description"
                              />
                            </div>
                            <div className={styles.hintText}>
                              This is a hint text to help user.
                            </div>
                          </div>
                          <div className={styles.sectionWrapper}>
                            <div className={styles.section2}>
                              <div className={styles.container2}>
                                <div className={styles.content2}>
                                  <div className={styles.headingWrapper4}>
                                    <div className={styles.heading}>
                                      Settings
                                    </div>
                                  </div>
                                  <div className={styles.inputFieldBase}>
                                    <div className={styles.inputWithLabel1}>
                                      <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className={classNames(
                                          styles.checkboxBase,
                                          "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                                        )}
                                      />
                                      <div className={styles.label}>
                                        I want to approve attendees
                                      </div>
                                    </div>
                                    <div className={styles.hintText1}>
                                      This is a hint text to help user.
                                    </div>
                                  </div>
                                  <div className={styles.toggleParent}>
                                    <div className={styles.toggle}>
                                      <div className={styles.toggleBase}>
                                        <img
                                          className={styles.buttonIcon}
                                          alt=""
                                          src="../button.svg"
                                        />
                                      </div>
                                      <div
                                        className={styles.textAndSupportingText}
                                      >
                                        <div className={styles.text6}>
                                          Privacy
                                        </div>
                                        <div
                                          className={styles.supportingText}
                                        />
                                      </div>
                                    </div>
                                    <div className={styles.checkboxParent}>
                                      <div className={styles.checkbox1}>
                                        <div className={styles.input1}>
                                          <input
                                            id="helper-radio-4"
                                            name="helper-radio"
                                            type="radio"
                                            value=""
                                            className={classNames(
                                              styles.checkboxBase1,
                                              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                            )}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.textAndSupportingText1
                                          }
                                        >
                                          <div
                                            className={styles.supportingText1}
                                          >
                                            Public
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.checkbox1}>
                                        <div className={styles.input1}>
                                          <input
                                            id="helper-radio-4"
                                            name="helper-radio"
                                            type="radio"
                                            value=""
                                            className={classNames(
                                              styles.checkboxBase1,
                                              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                            )}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.textAndSupportingText1
                                          }
                                        >
                                          <div
                                            className={styles.supportingText1}
                                          >
                                            Curated Audience
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styles.checkbox1}>
                                        <div className={styles.input1}>
                                          <input
                                            id="helper-radio-4"
                                            name="helper-radio"
                                            type="radio"
                                            value=""
                                            className={classNames(
                                              styles.checkboxBase1,
                                              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 "
                                            )}
                                          />
                                        </div>
                                        <div
                                          className={
                                            styles.textAndSupportingText1
                                          }
                                        >
                                          <div
                                            className={styles.supportingText1}
                                          >
                                            Community Only
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.toggle1}>
                                    <div className={styles.toggleBase}>
                                      <img
                                        className={styles.buttonIcon}
                                        alt=""
                                        src="../button1.svg"
                                      />
                                    </div>
                                    <div
                                      className={styles.textAndSupportingText}
                                    >
                                      <div className={styles.text6}>
                                        Tag your social
                                      </div>
                                      <div className={styles.supportingText4}>
                                        Pick tags for our curation engine to
                                        work its magin
                                      </div>
                                    </div>
                                  </div>

                                  <PickTagSocial />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.buttonBase5}>
                            <div className={styles.text}>CREATE SOCIAL</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadBannerModal
        open={openBannerModal}
        setOpen={setOpenBannerModal}
        onChange={setBannerURL}
      />
    </>
  );
};

const getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

SocialCreatePage.getLayout = getLayout;
