const books = [
  { label: "地理", file: "assert/book/最新十万个为什么-地球.pdf" },
  { label: "生物", file: "assert/book/最新十万个为什么-动物.pdf" },
  { label: "交通", file: "assert/book/最新十万个为什么-交通.pdf" },
  { label: "科技", file: "assert/book/最新十万个为什么-科技.pdf" },
  { label: "人体", file: "assert/book/最新十万个为什么-人体.pdf" },
  { label: "宇宙", file: "assert/book/最新十万个为什么-宇宙.pdf" }
];

const categoryList = document.querySelector("#categoryList");
const pdfFrame = document.querySelector("#pdfFrame");
const currentTitle = document.querySelector("#currentTitle");
const openPdf = document.querySelector("#openPdf");
const downloadPdf = document.querySelector("#downloadPdf");

function setLinks(book) {
  pdfFrame.src = book.file;
  currentTitle.textContent = `十万个为什么 - ${book.label}`;
  openPdf.href = book.file;
  downloadPdf.href = book.file;
  downloadPdf.setAttribute("download", book.file);
  openPdf.classList.remove("disabled");
  downloadPdf.classList.remove("disabled");
}

function renderCategories() {
  books.forEach((book, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.textContent = book.label;

    button.addEventListener("click", () => {
      document.querySelectorAll(".category-button").forEach((item) => {
        item.classList.remove("active");
      });
      button.classList.add("active");
      setLinks(book);
    });

    categoryList.appendChild(button);

    if (index === 0) {
      button.click();
    }
  });
}

openPdf.classList.add("disabled");
downloadPdf.classList.add("disabled");
renderCategories();
