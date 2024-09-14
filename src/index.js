const writeButton = document.querySelector(".write");
const cancelButton = document.querySelector(".cancel");

const modal = document.querySelector(".backdrop");

const list = document.querySelector(".list");
const input = document.querySelector(".input");

const form = document.querySelector(".form");

/**
 *  모달을 엽니다.
 */
const handleClickOpenModal = () => {
  modal.style.display = "flex";
};

/**
 * 모달을 닫습니다.
 */
const handleClickCloseModal = () => {
  modal.style.display = "none";
};

/**
 * 글을 작성합니다.
 * @param {Event} e - 폼 제출 이벤트 객체
 */
const handleClickSubmit = (e) => {
  e.preventDefault();

  const { value: content } = input;
  const num = list.children.length + 1;

  const item = document.createElement("div");
  item.classList.add("card");
  item.innerHTML = `
      <p class="body2">#${num}번째 음메</p>
      <h3 class="title">${content}</h3>
    `;

  list.appendChild(item);

  input.value = "";

  handleClickCloseModal();
};

writeButton.addEventListener("click", handleClickOpenModal);
cancelButton.addEventListener("click", handleClickCloseModal);
form.addEventListener("submit", handleClickSubmit);
