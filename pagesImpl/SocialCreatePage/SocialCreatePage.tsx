import styles from "./SocialCreatePage.module.scss";
import { ReactElement } from "react";
import { WebLayout } from "../../pages/components/layout/WebLayout/WebLayout";

export const SocialCreatePage = () => {
  return (
    <div className={styles.createSocialParent}>
      <div className={styles.createSocial}>
        <div className={styles.imageParent}>
          <div className={styles.image}>
            <div className={styles.image6} />
            <div className={styles.fiSrPicture1Parent}>
              <img
                className={styles.fiSrPicture1Icon}
                alt=""
                src="../fisrpicture-1.svg"
              />
              <div className={styles.addABanner}>Add a banner</div>
            </div>
          </div>
          <div className={styles.heroHeaderSection}>
            <div className={styles.dropdownHeaderNavigation}>
              <img className={styles.dividerIcon} alt="" src="../divider.svg" />
            </div>
            <div className={styles.section}>
              <div className={styles.section1}>
                <div className={styles.container1}>
                  <div className={styles.content1}>
                    <div className={styles.iconAndText}>
                      <div className={styles.headingAndSupportingText}>
                        <div className={styles.frameParent}>
                          <div className={styles.frameWrapper}>
                            <div className={styles.headingWrapper}>
                              <div className={styles.heading}>
                                Untitle Event
                              </div>
                            </div>
                          </div>
                          <div className={styles.frameGroup}>
                            <div
                              className={styles.mediaIconfilledcalendarParent}
                            >
                              <img
                                className={styles.mediaIconfilledcalendar}
                                alt=""
                                src="../media--iconfilledcalendar.svg"
                              />
                              <div className={styles.headingContainer}>
                                <div className={styles.heading1}>Date</div>
                              </div>
                            </div>
                            <div className={styles.mediaIconfilledclockParent}>
                              <img
                                className={styles.mediaIconfilledcalendar}
                                alt=""
                                src="../media--iconfilledclock.svg"
                              />
                              <div className={styles.frameContainer}>
                                <div className={styles.headingContainer}>
                                  <div className={styles.heading1}>Time</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.frameDiv}>
                            <div className={styles.frameParent1}>
                              <div
                                className={
                                  styles.mediaIconfilledlocationMWrapper
                                }
                              >
                                <img
                                  className={styles.fiSrPicture1Icon}
                                  alt=""
                                  src="../media--iconfilledlocationmarker.svg"
                                />
                              </div>
                              <div className={styles.imageWrapper}>
                                <div className={styles.headingWrapper1}>
                                  <div className={styles.heading1}>Venue</div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.frameParent2}>
                              <div
                                className={
                                  styles.mediaIconfilleduserGroupParent
                                }
                              >
                                <img
                                  className={styles.fiSrPicture1Icon}
                                  alt=""
                                  src="../media--iconfilledusergroup.svg"
                                />
                                <div className={styles.headingWrapper2}>
                                  <div className={styles.heading1}>
                                    Max capacity
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  styles.mediaIconfilleduserGroupParent
                                }
                              >
                                <img
                                  className={styles.fiSrPicture1Icon}
                                  alt=""
                                  src="../media--iconfilledcurrencydollar.svg"
                                />
                                <div className={styles.headingWrapper2}>
                                  <div className={styles.heading1}>
                                    Cost per person
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.textareaInputField}>
                          <div className={styles.inputWithLabel}>
                            <div className={styles.label}>Description</div>
                            <div className={styles.input}>
                              <div className={styles.text5}>
                                Description of your event..
                              </div>
                            </div>
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
                                  <div className={styles.heading}>Settings</div>
                                </div>
                                <div className={styles.inputFieldBase}>
                                  <div className={styles.inputWithLabel1}>
                                    <div className={styles.buttonBase}>
                                      <div className={styles.checkboxBase} />
                                    </div>
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
                                      <div className={styles.supportingText} />
                                    </div>
                                  </div>
                                  <div className={styles.checkboxParent}>
                                    <div className={styles.checkbox1}>
                                      <div className={styles.input1}>
                                        <div className={styles.checkboxBase1} />
                                      </div>
                                      <div
                                        className={
                                          styles.textAndSupportingText1
                                        }
                                      >
                                        <div className={styles.text7}>
                                          Remember me
                                        </div>
                                        <div className={styles.supportingText1}>
                                          Public
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.checkbox1}>
                                      <div className={styles.input1}>
                                        <div className={styles.checkboxBase1} />
                                      </div>
                                      <div
                                        className={
                                          styles.textAndSupportingText1
                                        }
                                      >
                                        <div className={styles.text7}>
                                          Remember me
                                        </div>
                                        <div className={styles.supportingText1}>
                                          Curated Audience
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.checkbox1}>
                                      <div className={styles.input1}>
                                        <div className={styles.checkboxBase1} />
                                      </div>
                                      <div
                                        className={
                                          styles.textAndSupportingText1
                                        }
                                      >
                                        <div className={styles.text7}>
                                          Remember me
                                        </div>
                                        <div className={styles.supportingText1}>
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
                                  <div className={styles.textAndSupportingText}>
                                    <div className={styles.text6}>
                                      Tag your social
                                    </div>
                                    <div className={styles.supportingText4}>
                                      Pick tags for our curation engine to work
                                      its magin
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.form}>
                                  <div className={styles.formFields}>
                                    <div className={styles.badge}>
                                      <div className={styles.label}>
                                        Engineering
                                      </div>
                                      <img
                                        className={styles.xCloseIcon}
                                        alt=""
                                        src="../xclose.svg"
                                      />
                                    </div>
                                    <div className={styles.badgeParent}>
                                      <div className={styles.badge1}>
                                        <div
                                          className={styles.label}
                                        >{`Product `}</div>
                                      </div>
                                      <div className={styles.badge1}>
                                        <div className={styles.label}>
                                          Marketing
                                        </div>
                                      </div>
                                      <div className={styles.badge1}>
                                        <div className={styles.label}>
                                          Design
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
  );
};

const getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

SocialCreatePage.getLayout = getLayout;
