<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            email: '',
            message: ''
        };
    },
    methods: {
        handleSubmit() {
            const formData = {
                email: this.email.trim(),
                message: this.message.trim()
            };
            console.log('Received data successfully:', formData);
        }
    }
};
</script>

<template>
    <h2>NEWSLETTER</h2>
    <form @submit.prevent="handleSubmit">
        <!-- Form content -->
        <input type="email" v-model="email" id="email" name="email" placeholder="Email" required><br><br>

        <textarea v-model="message" id="message" name="message" placeholder="Message" rows="4" cols="50"
            required></textarea>

        <button type="submit">Invia</button>
    </form>
</template>

<style scoped lang="scss">
h2 {
    font-size: 1.60rem;
    margin-bottom: 30px;
    color: white;
}

form {

    input[type="email"],
    textarea {
        width: 100%;
        font-size: 1rem;
        border: 1px solid #333;
        padding: 15px 25px;
        background-color: transparent;
        color: #ffff;

        &:focus {
            outline: none;
            caret-color: #ffff;
        }
    }
}
</style>
