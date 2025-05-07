const cancelledReasonInput = $(".cancelled-reason-input");
const orderStatus = $("#orderStatus");

orderStatus.change(function () {
  const currentOrderStatus = $(this).val();
  if (currentOrderStatus == "CANCELLED") {
    cancelledReasonInput.addClass("show");
  } else {
    cancelledReasonInput.removeClass("show");
  }
});
