<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            // Initialize email and message data properties
            email: '',
            message: ''
        };
    },
    methods: {
        // Method to handle form submission
        handleSubmit() {
            // Trim whitespace from email and message inputs
            const formData = {
                email: this.email.trim(),
                message: this.message.trim()
            };
            // Log the form data to the console
            console.log('Received data successfully:', formData);
        }
    }
};
</script>

<template>
    <h2>NEWSLETTER</h2>
    <!-- Form element with submit event handler -->
    <form @submit.prevent="handleSubmit">
        <!-- Form inputs -->
        <!-- Email input with v-model binding -->
        <input type="email" v-model="email" id="email" name="email" placeholder="Email" required>
        <!-- Textarea input with v-model binding -->
        <textarea v-model="message" id="message" name="message" placeholder="Message" rows="4" cols="50"
            required></textarea>
        <!-- Submit button -->
        <button type="submit">SEND MESSAGE</button>
    </form>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

h2 {
    font-size: 1.60rem;
    margin-bottom: 30px;
    color: white;
}

form input[type="email"],
form textarea {
    width: 100%;
    font-size: 1rem;
    border: 1px solid #333;
    padding: 15px 25px;
    margin-bottom: 15px;
    background-color: transparent;
    color: #ffff;

    &:focus {
        outline: none;
        caret-color: #ffff;
    }
}

form button[type="submit"] {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 1px;
    border-radius: 0px;
    padding: 12px 54px 12px 54px;
    border: 1px solid $orange-cs;
    background-color: transparent;
    color: $white-cs;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

form button[type="submit"]:hover {
    background-color: $orange-cs;
    color: white;
}
</style>
