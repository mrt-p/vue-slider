var app = new Vue(
    {
    el: '#app',
    data: {
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg'
        ]
    },
    created: function(){
      setInterval(() => {
        this.nextPhoto();
      }, 4000);
    },
    methods: {
        prevPhoto: function() {
            this.counterPhoto --;
            if(this.counterPhoto < 0) {
                this.counterPhoto = (this.photos.length -1);
            }},
        nextPhoto: function(){
            this.counterPhoto ++;
            if(this.counterPhoto > (this.photos.length - 1)) {
                this.counterPhoto = 0;
            }
        },
        circle(index) {
          this.counterPhoto = index;
        }
    }
});
