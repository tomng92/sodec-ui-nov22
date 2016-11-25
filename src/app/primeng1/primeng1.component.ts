import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-primeng1',
  template: `
    
  <h3 class="first">Basic</h3>
    <div class="ui-g">
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
    <div class="ui-g-1">1</div>
</div>

<div class="ui-g">
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
</div>

<div class="ui-g">
    <div class="ui-g-3">3</div>
    <div class="ui-g-3">3</div>
    <div class="ui-g-3">3</div>
    <div class="ui-g-3">3</div>
</div>

<div class="ui-g">
    <div class="ui-g-4">4</div>
    <div class="ui-g-4">4</div>
    <div class="ui-g-4">4</div>
</div>

<div class="ui-g">
    <div class="ui-g-6">6</div>
    <div class="ui-g-6">6</div>
</div>

<div class="ui-g">
    <div class="ui-g-12">12</div>
</div>

<div class="ui-g">
    <div class="ui-g-4">4</div>
    <div class="ui-g-8">8</div>
</div>

<div class="ui-g">
    <div class="ui-g-3">3</div>
    <div class="ui-g-9">9</div>
</div>

<div class="ui-g">
    <div class="ui-g-3">3</div>
    <div class="ui-g-5">5</div>
    <div class="ui-g-4">4</div>
</div>

<div class="ui-g">
    <div class="ui-g-4">4</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-2">2</div>
    <div class="ui-g-3">3</div>
    <div class="ui-g-1">1</div>
</div>

<h3>Responsive</h3>
<div class="ui-g">
    <div class="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div class="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div class="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div class="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
</div>

<div class="ui-g">
    <div class="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div class="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div class="ui-g-12 ui-lg-4">ui-g-12 ui-lg-4</div>
</div>

<h3>Nested</h3>
<div class="ui-g">
    <div class="ui-g-8 ui-g-nopad">
        <div class="ui-g-6">6</div>
        <div class="ui-g-6">6</div>
        <div class="ui-g-12">12</div>
    </div>
    <div class="ui-g-4">4</div>
</div>

<h3>Sample Layout</h3>
<div class="ui-g">
    <div class="ui-g-12 ui-md-2">Menu</div>
    <div class="ui-g-12 ui-md-10 ui-g-nopad">
        <div class="ui-g-12">
            Bar
        </div>
        <div class="ui-g-12 ui-g-nopad">
            <div class="ui-g">
                <div class="ui-g-12 ui-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh. In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                <div class="ui-g-12 ui-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique nulla nec, rutrum sapien.</div>
                <div class="ui-g-12 ui-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis. Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis, condimentum eget hendrerit sit amet.</div>
            </div>
            
            <div class="ui-g">
                <div class="ui-g-6 ui-md-3"><img src="showcase-resources/demo/images/galleria/galleria1.jpg" style="width:100%"></div>  
                <div class="ui-g-6 ui-md-3"><img src="showcase-resources/demo/images/galleria/galleria1.jpg" style="width:100%"></div> 
                <div class="ui-g-6 ui-md-3"><img src="showcase-resources/demo/images/galleria/galleria1.jpg" style="width:100%"></div>    
                <div class="ui-g-6 ui-md-3"><img src="showcase-resources/demo/images/galleria/galleria1.jpg" style="width:100%"></div>      
            </div>
            
            <div class="ui-g">
                <div class="ui-g-12 ui-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                <div class="ui-g-12 ui-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
            </div>
        </div>
    </div>
    <div class="ui-g-12">
        Footer
    </div>
</div>
    
    
  `,
  styles: []
})
export class Primeng1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
