//Employee Role Access System
// Ask user for role
let role = prompt("Enter your role (admin / manager / developer / intern)");

// Convert input to lowercase for safety
role = role.toLowerCase();
switch (role) {
    case "admin":
        alert("Admin → Full system access");
        break;
    case "manager":
        alert("Manager → Team management access");
        break;
    case "developer":
        alert("Developer → Code access");
        break;
    case "intern":
        alert("Intern → Limited access");
        break;
    default:
        alert("Invalid input. Please try again.");
}

//Online Payment Method Selection
// Ask user for payment method
let payment = prompt("Choose payment method (credit / debit / upi / cod)");
payment = payment.toLowerCase();

switch (payment) {
    case "credit":
        alert("You selected Credit Card payment");
        break;
    case "debit":
        alert("You selected Debit Card payment");
        break;
    case "upi":
        alert("You selected UPI payment");
        break;
    case "cod":
        alert("You selected Cash on Delivery");
        break;
default:
        alert("Invalid payment method. Please try again.");
}

//Order Status Checker
// Ask user for order status
let orderStatus = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");
orderStatus = orderStatus.toLowerCase();

switch (orderStatus) {
    case "placed":
        alert("Your order has been placed successfully.");
    break;
    case "packed":
        alert("Your order is packed and ready to ship.");
        break;
    case "shipped":
        alert("Your order has been shipped.");
        break;
    case "delivered":
        alert("Your order has been delivered.");
        break;
    case "cancelled":
        alert("Your order has been cancelled.");
        break;
   default:
        alert("Invalid order status. Please try again.");
}

//Office Working Day Checker
// Ask user for day name
let day = prompt("Enter day name (Monday - Sunday)");
day = day.toLowerCase();
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        alert("Working Day");
        break;
    case "friday":
        alert("Half Day");
        break;
    case "saturday":
    case "sunday":
        alert("Holiday");
        break;

    default:
        alert("Invalid day. Please try again.");
}
