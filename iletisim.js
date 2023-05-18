<script>
  new Vue({
    el: '#contactForm',
    data: {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Form verilerini URL parametreleri olarak aktar
        const queryParams = new URLSearchParams();
        queryParams.set('name', this.formData.name);
        queryParams.set('email', this.formData.email);
        queryParams.set('message', this.formData.message);

        // Yeni sayfaya yönlendirme
        window.location.href = 'form-sonucu.html?' + queryParams.toString();
      },
      clearForm() {
        // Formu temizleme işlemi
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  });
</script>