const app = new Vue({
    el: '#app',
    data: {
        disks: [],
        genres: [],
        genreSelected: 'All'
    },
    created() {

        // get all disks
        axios.get('http://localhost/20220120/php-ajax-dischi/backend.php')
        .then((response) => {
            this.disks = response.data;

            // create genres list
            this.disks.forEach(elm => {
                if (!this.genres.includes(elm.genre)) {
                    this.genres.push(elm.genre);
                }
            });

        });

    }
});