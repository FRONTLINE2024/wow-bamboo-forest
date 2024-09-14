const writeButton = document.querySelector(".write");
const cancelButton = document.querySelector(".cancel");
const modal = document.querySelector(".backdrop");

/**
 *  모달을 여는 함수
 */
const handleClickOpenModal = () => {
  modal.style.display = "flex";
};

/**
 * 모달을 닫는 함수
 */
const handleClickCloseModal = () => {
  modal.style.display = "none";
};

writeButton.addEventListener("click", handleClickOpenModal);
cancelButton.addEventListener("click", handleClickCloseModal);
