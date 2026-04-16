module.exports = async function (context, req) {
    const order = req.body;

    if (!order || !order.orderId) {
        context.res = {
            status: 400,
            body: "Invalid order data"
        };
        return;
    }

    const msg = {
        orderId: order.orderId,
        customerName: order.customerName || "",
        product: order.product || "",
        quantity: order.quantity || 0,
        email: order.email || "",
        status: "Submitted",
        createdAt: new Date().toISOString()
    };

    context.bindings.outputSbMsg = "Order " + order.orderId + " submitted";

    context.res = {
        status: 200,
        body: {
            message: "Service Bus write successful",
            orderId: order.orderId
        }
    };
};
