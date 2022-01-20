const app = new Vue({
    el: '#app',
    data: {
        disks: []
    },
    created() {
        axios.get('http://localhost/20220120/php-ajax-dischi/backend.php')
        .then((response) => {
            this.disks = response.data;
        });
    }
});