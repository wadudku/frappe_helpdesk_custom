frappe.ready(function() {
	debugger;
	const urlParams = new URLSearchParams(window.location.search);
    const phone = urlParams.get('phone');
    const transaction_id = urlParams.get('transaction_id');

    if (phone) {
        // Replace 'phone_number' with your actual fieldname
        frappe.web_form.set_value('custom_phone_number', phone);
        frappe.web_form.set_df_property('custom_phone_number', 'read_only', 1);
    }

    if (transaction_id) {
        // Replace 'phone_number' with your actual fieldname
        frappe.web_form.set_value('custom_transaction_id', transaction_id);
        frappe.web_form.set_df_property('custom_transaction_id', 'read_only', 1);
    }

	frappe.web_form.after_save = () => {
		debugger;
        window.location.href = `/ticket-submitted?phone=${phone}&transaction_id=${transaction_id}`;
	};
})

