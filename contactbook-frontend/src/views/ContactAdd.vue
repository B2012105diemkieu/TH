
<template>
    <div class="page">
        <h4>Thêm Liên Hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="addContact"
           
            />
            <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    props: {
        id: {type:String, required: true},
    },
    data() {
        return {
            contact: { name: "" },
            message: "",
        };
    },
    methods: {
        
        async addContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Thêm liên hệ mới thành công";
                
            }catch (error) {
                console.log(error);
            }
        },

       
    },

    created() {
        this.message = "";
    },
};
</script>