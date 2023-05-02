import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../reducers/userInfoSlice";
//import Fade from './Fade/Fade';
function Modal({
  open,
  onClose,
  data,
  fadeDuration,
  showSpinner,
  escapeClose,
  clickToClose,
  showClose,
  closeText,
  closeClass,
}) {
  // let allButton = document.querySelectorAll('button');
  // allButton.forEach((button) => button.addEventListener('click', (e) => e.stopImmediatePropagation() ))
  if (open) console.log(data);
  //Default options
  if (!fadeDuration) fadeDuration = null; //
  if (!showSpinner) showSpinner = true; //Ajouter une classe contenant le spinner le rendre invisible lorsque le chargement est terminé
  if (!escapeClose) escapeClose = true;
  if (!clickToClose) clickToClose = true;
  if (!showClose) showClose = true;
  if (!closeText) closeText = "Close";
  if (!showClose) showClose = true;
  if (!closeClass) closeClass = "";

  const [animation, setAnimation] = useState({});
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(null);
  const [className1, setClassName1] = useState("visible");
  const [className2, setClassName2] = useState("visible");

  const dispatch = useDispatch();

  useEffect(() => {
    const displaySpinner = () => {
      setIsLoading(true);
      console.log(isLoading);
      const storeData = () => dispatch(addUserInfos(data));
      storeData();
      setTimeout(() => setIsLoading(false), 500);
      console.log(isLoading);
    };
    if (open) displaySpinner();
  }, [open]);

  useEffect(() => {
    isLoading === true ? setClassName1("hidden") : setClassName1("visible");
    isLoading === true ? setClassName2("visible") : setClassName2("hidden");
  });

  if (!open) return null;
  return (
    <div className="modal">
      <div
        className={() => (showClose === true ? "visible" : "hidden")}
        onClick={onClose}
      >
        X
      </div>
      <span className={"span_class" + " " + className2}>Chargement !</span>
      <span className={"span_class" + " " + className1}>
        Employee Sucessfully created !
      </span>

      <span className={closeClass}>{closeText}</span>
    </div>
  );
}

export default Modal;
