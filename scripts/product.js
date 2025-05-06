// images upload
const imagesUpload = $(".images-upload");
const imagesPreview = $(".images-preview");
const imagesUploadWrapper = $(".images-upload-wrapper");
const imagesError = $("#imagesError");
const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

let images = [];
let deleteImageNames = [];

function checkFileType(file, allowedExtensions) {
  let isValid = true;

  const fileExtension = file.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) {
    isValid = false;
  }

  return isValid;
}

imagesUpload.change(function () {
  const files = $(this)[0].files;

  for (let i = 0; i < files.length; i++) {
    if (checkFileType(files[i], allowedExtensions)) {
      const index = images.length;
      images.push(files[i]);

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = $("<img>");
        img.attr("src", e.target.result);
        img.attr("alt", "product image");

        const previewItem = $(`
      <div class="images-preview-item">
      </div>
    `);

        const imageRemove = $(
          `<button type="button" class="image-remove-button" data-index="${index}">
          <i class="fa-solid fa-xmark"></i>
        </button>`
        );

        previewItem.append(img);
        previewItem.append(imageRemove);
        imagesPreview.append(previewItem);
      };

      reader.readAsDataURL(files[i]);
    }
  }

  $(this).val();
});

$(document).on("click", function (e) {
  const imageRemove = e.target.closest(".image-remove-button");
  if (imageRemove) {
    const currentImage = $(imageRemove).next("img");
    const currentImageUrl = currentImage.attr("src");
    if (currentImageUrl) {
      const currentImageUrlArray = currentImageUrl.split("/");
      const currentImageName =
        currentImageUrlArray[currentImageUrlArray.length - 1];

      deleteImageNames.push(currentImageName);
    }

    const imageIndex = $(imageRemove).data("index");
    images.splice(imageIndex, 1);

    imagesUpload.val("");

    const dataTransfer = new DataTransfer();
    images.forEach((file) => dataTransfer.items.add(file));
    imagesUpload.files = dataTransfer.files;

    const thisImagesPreviewItem = $(imageRemove).closest(
      ".images-preview-item"
    );

    thisImagesPreviewItem.remove();
  }
});
