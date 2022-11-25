'use strict'
class Slider {
  constructor() {
    this.buttonLeft = document.createElement('button');
    this.buttonRight = document.createElement('button');
    this.slides = [];
    this.pagination = [];
    this._init();
  }
  _init() {
    this.setButtonLeft();
    this.setButtonRight();
    this.setPagination();
    this.handlerSlider();

  }

  setButtonLeft() {
    let sliderCenter = document.querySelector('.slider--center');
    this.buttonLeft.classList.add('arrow__left');
    sliderCenter.appendChild(this.buttonLeft);
  }

  setButtonRight() {
    let sliderCenter = document.querySelector('.slider--center');
    this.buttonRight.classList.add('arrow__right');
    sliderCenter.appendChild(this.buttonRight);
  }

  setPagination() {
    let slides = document.querySelectorAll('.slider');
    let pagination = document.createElement('div');
    let sliderCenter = document.querySelector('.slider--center');
    pagination.classList.add('pagination__wrp');
    sliderCenter.appendChild(pagination);
    for (let i = 0; i < slides.length; i++) {
      let paginationButton = document.createElement('button');
      paginationButton.classList.add('pagination__item');
      pagination.appendChild(paginationButton);
    }

    this.pagination.push({
      left: document.querySelectorAll('.pagination__item')[0],
      center: document.querySelectorAll('.pagination__item')[1],
      right: document.querySelectorAll('.pagination__item')[2]
    })

    this.pagination.forEach(item => {
      if (item.center) {
        item.center.classList.add('pagination--color');
      }
    })

  }

  handlerSlider() {
    this.buttonLeft.addEventListener('click', event => {
      this.showEarlySlider();
    })
    this.buttonRight.addEventListener('click', event => {
      this.showNextSlider();
    })


  }

  showEarlySlider() {
    this.slides = document.querySelectorAll('.slider')
    this.slides.forEach(slider => {
      if (slider.classList.contains('slider--center')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        while (newSlider.children.length !== 1) {
          if (newSlider.children[newSlider.children.length - 1].className !== "slider__img") {
            newSlider.children[newSlider.children.length - 1].remove();
          }
        }
        newSlider.classList.replace('slider--center', 'slider--right');
        container.appendChild(newSlider);
      }
      if (slider.classList.contains('slider--right')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        newSlider.classList.replace('slider--right', 'slider--left');
        container.appendChild(newSlider);
      }
      if (slider.classList.contains('slider--left')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        newSlider.classList.replace('slider--left', 'slider--center');
        container.appendChild(newSlider);
      }
    })
    this.setButtonLeft();
    this.setButtonRight();
    this.pagination = [];
    this.setPagination();
    this.movedPagination();
    this.slides = [];
  }

  showNextSlider() {
    this.slides = document.querySelectorAll('.slider')
    this.slides.forEach(slider => {
      if (slider.classList.contains('slider--center')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        while (newSlider.children.length !== 1) {
          if (newSlider.children[newSlider.children.length - 1].className !== "slider__img") {
            newSlider.children[newSlider.children.length - 1].remove();
          }
        }
        newSlider.classList.replace('slider--center', 'slider--left');
        container.appendChild(newSlider);
      }
      if (slider.classList.contains('slider--right')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        newSlider.classList.replace('slider--right', 'slider--center');

        container.appendChild(newSlider);
      }
      if (slider.classList.contains('slider--left')) {
        slider.remove();
        let newSlider = slider.cloneNode(true);
        let container = document.querySelector('.container');
        newSlider.classList.replace('slider--left', 'slider--right');
        container.appendChild(newSlider);
      }
    })

    this.setButtonLeft();
    this.setButtonRight();
    this.pagination = [];
    this.setPagination();
    this.movedPagination();
    this.slides = [];

  }

  movedPagination() {
    this.pagination.forEach(item => {
      if (item.center.classList.contains('pagination--color')) {
        item.center.classList.remove('pagination--color');
      }
    })

    let img = {
      left: document.querySelectorAll('.slider__img')[0],
      center: document.querySelectorAll('.slider__img')[1],
      right: document.querySelectorAll('.slider__img')[2]
    }

    let slides = document.querySelectorAll('.slider')
    slides.forEach((slider) => {
      if (slider.classList.contains('slider--center') && img.center.parentNode == slider) {
        this.pagination[0].left.classList.add('pagination--color');
      }
      if (slider.classList.contains('slider--center') && img.right.parentNode == slider) {
        this.pagination[0].center.classList.add('pagination--color');
      }
      if (slider.classList.contains('slider--center') && img.left.parentNode == slider) {
        this.pagination[0].right.classList.add('pagination--color');
      }
    })
  }

}

let slider = new Slider();