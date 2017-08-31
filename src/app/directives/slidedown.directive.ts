import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[mySlidedown]'
})
export class SlidedownDirective implements OnInit {

    constructor(private elRef: ElementRef,
                private renderer: Renderer2){}

    ngOnInit(){

    }

    @HostListener('click') onClick(eventData: Event){
        let footerDrop = this.elRef.nativeElement.querySelector('.footer-drop');
        this.renderer.addClass(footerDrop, 'footerDrop-active');
    }

    // @HostListener('click') onclick(eventData: Event){
    //     let footerDrop = this.elRef.nativeElement.querySelector('.footer-drop');
    //     this.renderer.removeClass(footerDrop, 'footerDrop-active');
    // }

    // private footerDrop(display: string){
    //     this.el.nativeElement.style.display = display;
    // }
}
