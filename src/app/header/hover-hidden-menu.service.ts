import { ElementRef, Renderer2, Injectable} from '@angular/core';

@Injectable()
export class HiddenMenuService {
    constructor(private renderer:Renderer2){   }

    showHiddenCategory(showElem: HTMLElement, hoverElem: HTMLElement){
        this.renderer.setStyle(showElem, "display", "block");
        this.renderer.addClass(hoverElem, "main-list-item-hoverable");
        this.renderer.setStyle(hoverElem, "border-left-color", "#111");

        let childElem = hoverElem.children[0];
        this.renderer.setStyle(childElem, "color", "#fff");
        this.renderer.setStyle(childElem, "text-decoration","underline"); 
    }

    hideHiddenCategory(showElem: HTMLElement, hoverElem: HTMLElement){
        this.renderer.setStyle(showElem, "display", "none");
        this.renderer.removeClass(hoverElem, "main-list-item-hoverable");
        this.renderer.setStyle(hoverElem, "border-left-color", "#aaa");

        let childElem = hoverElem.children[0]; 
        this.renderer.setStyle(childElem, "color", "#000");
         this.renderer.setStyle(childElem, "text-decoration","none");
    }
}