(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0lsC":function(t,e,i){"use strict";i.r(e);var o=i("8Y7J");class r{}var n=i("pMnS");function s(t,e){return new Promise((i,o)=>{const r=new Image;r.onload=function(){const t=r.width,n=r.height,s=document.createElement("canvas"),a=s.getContext("2d");a?(4<e&&e<9?(s.width=n,s.height=t):(s.width=t,s.height=n),function(t,i,o,r){switch(e){case 2:t.transform(-1,0,0,1,o,0);break;case 3:t.transform(-1,0,0,-1,o,r);break;case 4:t.transform(1,0,0,-1,0,r);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,r,0);break;case 7:t.transform(0,-1,-1,0,r,o);break;case 8:t.transform(0,-1,1,0,0,o)}}(a,0,t,n),a.drawImage(r,0,0),i(s.toDataURL())):o(new Error("No context"))},r.src=t})}const a=(()=>(class{constructor(t,e,i){this.sanitizer=t,this.cd=e,this.zone=i,this.setImageMaxSizeRetries=0,this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.marginLeft="0px",this.imageVisible=!1,this.format="png",this.outputType="both",this.maintainAspectRatio=!0,this.aspectRatio=1,this.resizeToWidth=0,this.resizeToHeight=0,this.cropperMinWidth=0,this.cropperMinHeight=0,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.autoCrop=!0,this.containWithinAspectRatio=!1,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.alignImage="center",this.startCropImage=new o.EventEmitter,this.imageCropped=new o.EventEmitter,this.imageCroppedBase64=new o.EventEmitter,this.imageCroppedFile=new o.EventEmitter,this.imageLoaded=new o.EventEmitter,this.cropperReady=new o.EventEmitter,this.loadImageFailed=new o.EventEmitter,this.initCropper()}set imageFileChanged(t){this.initCropper(),t&&this.loadImageFile(t)}set imageChangedEvent(t){this.initCropper(),t&&t.target&&t.target.files&&t.target.files.length>0&&this.loadImageFile(t.target.files[0])}set imageBase64(t){this.initCropper(),this.checkExifAndLoadBase64Image(t)}ngOnChanges(t){t.cropper&&(this.setMaxSize(),this.setCropperScaledMinSize(),this.checkCropperPosition(!1),this.doAutoCrop(),this.cd.markForCheck()),t.aspectRatio&&this.imageVisible&&this.resetCropperPosition()}initCropper(){this.imageVisible=!1,this.originalImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.originalSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4}loadImageFile(t){const e=new FileReader;e.onload=e=>{this.isValidImageType(t.type)?this.checkExifAndLoadBase64Image(e.target.result):this.loadImageFailed.emit()},e.readAsDataURL(t)}isValidImageType(t){return/image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(t)}checkExifAndLoadBase64Image(t){(function(t){try{const i=function(e){const i=new DataView(function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");const e=atob(t),i=e.length,o=new Uint8Array(i);for(let r=0;r<i;r++)o[r]=e.charCodeAt(r);return o.buffer}(t));if(65496!=i.getUint16(0,!1))return-2;const o=i.byteLength;let r=2;for(;r<o;){if(i.getUint16(r+2,!1)<=8)return-1;const t=i.getUint16(r,!1);if(r+=2,65505==t){if(1165519206!=i.getUint32(r+=2,!1))return-1;const t=18761==i.getUint16(r+=6,!1);r+=i.getUint32(r+4,t);const e=i.getUint16(r,t);r+=2;for(let o=0;o<e;o++)if(274==i.getUint16(r+12*o,t))return i.getUint16(r+12*o+8,t)}else{if(65280!=(65280&t))break;r+=i.getUint16(r,!1)}}return-1}();return i>1?s(t,i):Promise.resolve(t)}catch(e){return Promise.reject(e)}})(t).then(t=>this.fitImageToAspectRatio(t)).then(t=>this.loadBase64Image(t)).catch(()=>this.loadImageFailed.emit())}fitImageToAspectRatio(t){return this.containWithinAspectRatio?(e=t,i=this.aspectRatio,new Promise((t,o)=>{const r=new Image;r.onload=function(){const e=document.createElement("canvas"),n=e.getContext("2d");if(n){const o=r.width/i;e.width=Math.max(r.width,r.height*i),e.height=Math.max(r.height,o),n.drawImage(r,(e.width-r.width)/2,(e.height-r.height)/2),t(e.toDataURL())}else o(new Error("No context"))},r.src=e})):Promise.resolve(t);var e,i}loadBase64Image(t){this.originalBase64=t,this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.originalImage=new Image,this.originalImage.onload=()=>{this.originalSize.width=this.originalImage.width,this.originalSize.height=this.originalImage.height,this.cd.markForCheck()},this.originalImage.src=t}imageLoadedInView(){null!=this.originalImage&&(this.imageLoaded.emit(),this.setImageMaxSizeRetries=0,setTimeout(()=>this.checkImageMaxSizeRecursively()))}checkImageMaxSizeRecursively(){this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0?(this.setMaxSize(),this.setCropperScaledMinSize(),this.resetCropperPosition(),this.cropperReady.emit(),this.cd.markForCheck()):(this.setImageMaxSizeRetries++,setTimeout(()=>{this.checkImageMaxSizeRecursively()},50))}onResize(){this.resizeCropperPosition(),this.setMaxSize(),this.setCropperScaledMinSize()}rotateLeft(){this.transformBase64(8)}rotateRight(){this.transformBase64(6)}flipHorizontal(){this.transformBase64(2)}flipVertical(){this.transformBase64(4)}transformBase64(t){this.originalBase64&&s(this.originalBase64,t).then(t=>this.fitImageToAspectRatio(t)).then(t=>this.loadBase64Image(t))}resizeCropperPosition(){const t=this.sourceImage.nativeElement;this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)}resetCropperPosition(){const t=this.sourceImage.nativeElement;if(this.maintainAspectRatio)if(t.offsetWidth/this.aspectRatio<t.offsetHeight){this.cropper.x1=0,this.cropper.x2=t.offsetWidth;const e=t.offsetWidth/this.aspectRatio;this.cropper.y1=(t.offsetHeight-e)/2,this.cropper.y2=this.cropper.y1+e}else{this.cropper.y1=0,this.cropper.y2=t.offsetHeight;const e=t.offsetHeight*this.aspectRatio;this.cropper.x1=(t.offsetWidth-e)/2,this.cropper.x2=this.cropper.x1+e}else this.cropper.x1=0,this.cropper.x2=t.offsetWidth,this.cropper.y1=0,this.cropper.y2=t.offsetHeight;this.doAutoCrop(),this.imageVisible=!0}startMove(t,e,i=null){t.preventDefault(),this.moveStart=Object.assign({active:!0,type:e,position:i,clientX:this.getClientX(t),clientY:this.getClientY(t)},this.cropper)}moveImg(t){this.moveStart.active&&(t.stopPropagation(),t.preventDefault(),"move"===this.moveStart.type?(this.move(t),this.checkCropperPosition(!0)):"resize"===this.moveStart.type&&(this.resize(t),this.checkCropperPosition(!1)),this.cd.detectChanges())}setMaxSize(){const t=this.sourceImage.nativeElement;this.maxSize.width=t.offsetWidth,this.maxSize.height=t.offsetHeight,this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}setCropperScaledMinSize(){this.originalImage?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20)}setCropperScaledMinWidth(){this.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.originalImage.width*this.maxSize.width):20}setCropperScaledMinHeight(){this.cropperScaledMinHeight=this.maintainAspectRatio?Math.max(20,this.cropperScaledMinWidth/this.aspectRatio):this.cropperMinHeight>0?Math.max(20,this.cropperMinHeight/this.originalImage.height*this.maxSize.height):20}checkCropperPosition(t=!1){this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)}moveStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}move(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;this.cropper.x1=this.moveStart.x1+e,this.cropper.y1=this.moveStart.y1+i,this.cropper.x2=this.moveStart.x2+e,this.cropper.y2=this.moveStart.y2+i}resize(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;switch(this.moveStart.position){case"left":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth);break;case"topleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"top":this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"topright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"right":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth);break;case"bottomright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottom":this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottomleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight)}this.maintainAspectRatio&&this.checkAspectRatio()}checkAspectRatio(){let t=0,e=0;switch(this.moveStart.position){case"top":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"bottom":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topleft":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topright":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"right":case"bottomright":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"left":case"bottomleft":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio)}}doAutoCrop(){this.autoCrop&&this.crop()}crop(t=this.outputType){if(this.sourceImage.nativeElement&&null!=this.originalImage){this.startCropImage.emit();const e=this.getImagePosition(),i=e.x2-e.x1,o=e.y2-e.y1,r=document.createElement("canvas");r.width=i,r.height=o;const n=r.getContext("2d");if(n){null!=this.backgroundColor&&(n.fillStyle=this.backgroundColor,n.fillRect(0,0,i,o)),n.drawImage(this.originalImage,e.x1,e.y1,i,o,0,0,i,o);const s={width:i,height:o,imagePosition:e,cropperPosition:Object.assign({},this.cropper)},a=this.getResizeRatio(i,o);return 1!==a&&(s.width=Math.round(i*a),s.height=this.maintainAspectRatio?Math.round(s.width/this.aspectRatio):Math.round(o*a),function(t,e,i,o=!0){const r=t.width,n=t.height,s=r/(e=Math.round(e)),a=n/(i=Math.round(i)),l=Math.ceil(s/2),h=Math.ceil(a/2),p=t.getContext("2d");if(p){const c=p.getImageData(0,0,r,n),u=p.createImageData(e,i),g=c.data,m=u.data;for(let t=0;t<i;t++)for(let i=0;i<e;i++){const o=4*(i+t*e),p=t*a;let c=0,u=0,d=0,x=0,f=0,M=0,v=0;const C=Math.floor(i*s),y=Math.floor(t*a);let z=Math.ceil((i+1)*s),w=Math.ceil((t+1)*a);z=Math.min(z,r),w=Math.min(w,n);for(let t=y;t<w;t++){const e=Math.abs(p-t)/h,o=i*s,n=e*e;for(let i=C;i<z;i++){const e=Math.abs(o-i)/l,s=Math.sqrt(n+e*e);if(s>=1)continue;const a=4*(i+t*r);v+=(c=2*s*s*s-3*s*s+1)*g[a+3],d+=c,g[a+3]<255&&(c=c*g[a+3]/250),x+=c*g[a],f+=c*g[a+1],M+=c*g[a+2],u+=c}}m[o]=x/u,m[o+1]=f/u,m[o+2]=M/u,m[o+3]=v/d}o?(t.width=e,t.height=i):p.clearRect(0,0,r,n),p.putImageData(u,0,0)}}(r,s.width,s.height)),this.cropToOutputType(t,r,s)}}return null}getImagePosition(){const t=this.originalSize.width/this.sourceImage.nativeElement.offsetWidth;return{x1:Math.round(this.cropper.x1*t),y1:Math.round(this.cropper.y1*t),x2:Math.min(Math.round(this.cropper.x2*t),this.originalSize.width),y2:Math.min(Math.round(this.cropper.y2*t),this.originalSize.height)}}cropToOutputType(t,e,i){switch(t){case"file":return this.cropToFile(e).then(t=>(i.file=t,this.imageCropped.emit(i),i));case"both":return i.base64=this.cropToBase64(e),this.cropToFile(e).then(t=>(i.file=t,this.imageCropped.emit(i),i));default:return i.base64=this.cropToBase64(e),this.imageCropped.emit(i),i}}cropToBase64(t){const e=t.toDataURL("image/"+this.format,this.getQuality());return this.imageCroppedBase64.emit(e),e}cropToFile(t){return this.getCanvasBlob(t).then(t=>(t&&this.imageCroppedFile.emit(t),t))}getCanvasBlob(t){return new Promise(e=>{t.toBlob(t=>this.zone.run(()=>e(t)),"image/"+this.format,this.getQuality())})}getQuality(){return Math.min(1,Math.max(0,this.imageQuality/100))}getResizeRatio(t,e){if(this.resizeToWidth>0){if(!this.onlyScaleDown||t>this.resizeToWidth)return this.resizeToWidth/t}else if(this.resizeToHeight>0&&(!this.onlyScaleDown||e>this.resizeToHeight))return this.resizeToHeight/e;return 1}getClientX(t){return t.clientX||t.touches&&t.touches[0]&&t.touches[0].clientX}getClientY(t){return t.clientY||t.touches&&t.touches[0]&&t.touches[0].clientY}}))(),l=(()=>(class{}))();var h=i("SVse"),p=i("cUpR"),c=o["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:'';top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}"],data:{}});function u(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,22,"div",[["class","cropper"]],[[2,"rounded",null],[4,"top","px"],[4,"left","px"],[4,"width","px"],[4,"height","px"],[4,"margin-left",null],[4,"visibility",null]],null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,1,"div",[["class","move"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"move")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"move")&&o),o},null,null)),(t()(),o["\u0275ted"](-1,null,["\xa0"])),(t()(),o["\u0275eld"](3,0,null,null,1,"span",[["class","resize topleft"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","topleft")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","topleft")&&o),o},null,null)),(t()(),o["\u0275eld"](4,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](5,0,null,null,1,"span",[["class","resize top"]],null,null,null,null,null)),(t()(),o["\u0275eld"](6,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](7,0,null,null,1,"span",[["class","resize topright"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","topright")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","topright")&&o),o},null,null)),(t()(),o["\u0275eld"](8,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](9,0,null,null,1,"span",[["class","resize right"]],null,null,null,null,null)),(t()(),o["\u0275eld"](10,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](11,0,null,null,1,"span",[["class","resize bottomright"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","bottomright")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","bottomright")&&o),o},null,null)),(t()(),o["\u0275eld"](12,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](13,0,null,null,1,"span",[["class","resize bottom"]],null,null,null,null,null)),(t()(),o["\u0275eld"](14,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](15,0,null,null,1,"span",[["class","resize bottomleft"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","bottomleft")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","bottomleft")&&o),o},null,null)),(t()(),o["\u0275eld"](16,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](17,0,null,null,1,"span",[["class","resize left"]],null,null,null,null,null)),(t()(),o["\u0275eld"](18,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),o["\u0275eld"](19,0,null,null,0,"span",[["class","resize-bar top"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","top")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","top")&&o),o},null,null)),(t()(),o["\u0275eld"](20,0,null,null,0,"span",[["class","resize-bar right"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","right")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","right")&&o),o},null,null)),(t()(),o["\u0275eld"](21,0,null,null,0,"span",[["class","resize-bar bottom"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","bottom")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","bottom")&&o),o},null,null)),(t()(),o["\u0275eld"](22,0,null,null,0,"span",[["class","resize-bar left"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var o=!0,r=t.component;return"mousedown"===e&&(o=!1!==r.startMove(i,"resize","left")&&o),"touchstart"===e&&(o=!1!==r.startMove(i,"resize","left")&&o),o},null,null))],null,function(t,e){var i=e.component;t(e,0,0,i.roundCropper,i.cropper.y1,i.cropper.x1,i.cropper.x2-i.cropper.x1,i.cropper.y2-i.cropper.y1,"center"===i.alignImage?i.marginLeft:null,i.imageVisible?"visible":"hidden")})}function g(t){return o["\u0275vid"](2,[o["\u0275qud"](402653184,1,{sourceImage:0}),(t()(),o["\u0275eld"](1,0,null,null,3,"div",[],[[4,"background",null]],null,null,null,null)),(t()(),o["\u0275eld"](2,0,[[1,0],["sourceImage",1]],null,0,"img",[["class","source-image"]],[[8,"src",4],[4,"visibility",null]],[[null,"load"]],function(t,e,i){var o=!0;return"load"===e&&(o=!1!==t.component.imageLoadedInView()&&o),o},null,null)),(t()(),o["\u0275and"](16777216,null,null,1,null,u)),o["\u0275did"](4,16384,null,0,h.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,4,0,e.component.imageVisible)},function(t,e){var i=e.component;t(e,1,0,i.imageVisible&&i.backgroundColor),t(e,2,0,i.safeImgDataUrl,i.imageVisible?"visible":"hidden")})}var m=i("cteX"),d=i("0nJ8"),x=i("ucNU");class f{constructor(t,e,i){this.config=t,this.api=e,this.auth=i,this.imageChangedEvent="",this.croppedImage="",this.config.updateInPost(!0)}ngOnInit(){this.auth.start()}onFileChange(t){t.target.files.length>0&&(this.file=t.target.files[0])}save(){console.log(this.file),this.api.addPhoto(this.file).subscribe(({data:t})=>{console.log(t)})}fileChangeEvent(t){this.imageChangedEvent=t}imageCropped(t){this.croppedImage=t.base64,this.file=t.file}imageLoaded(){}cropperReady(){}loadImageFailed(){}}var M=o["\u0275crt"]({encapsulation:0,styles:[["#general[_ngcontent-%COMP%]{margin-top:100px}"]],data:{}});function v(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,7,"div",[["id","general"]],null,null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,0,"input",[["type","file"]],null,[[null,"change"]],function(t,e,i){var o=!0;return"change"===e&&(o=!1!==t.component.fileChangeEvent(i)&&o),o},null,null)),(t()(),o["\u0275ted"](-1,null,[" \xa0\xa0 "])),(t()(),o["\u0275eld"](3,0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,i){var o=!0;return"click"===e&&(o=!1!==t.component.save()&&o),o},null,null)),(t()(),o["\u0275ted"](-1,null,["Guardar cambios"])),(t()(),o["\u0275eld"](5,0,null,null,1,"image-cropper",[["format","png"]],[[4,"text-align",null]],[[null,"imageCropped"],[null,"imageLoaded"],[null,"cropperReady"],[null,"loadImageFailed"],["window","resize"],["document","mousemove"],["document","touchmove"],["document","mouseup"],["document","touchend"]],function(t,e,i){var r=!0,n=t.component;return"window:resize"===e&&(r=!1!==o["\u0275nov"](t,6).onResize()&&r),"document:mousemove"===e&&(r=!1!==o["\u0275nov"](t,6).moveImg(i)&&r),"document:touchmove"===e&&(r=!1!==o["\u0275nov"](t,6).moveImg(i)&&r),"document:mouseup"===e&&(r=!1!==o["\u0275nov"](t,6).moveStop()&&r),"document:touchend"===e&&(r=!1!==o["\u0275nov"](t,6).moveStop()&&r),"imageCropped"===e&&(r=!1!==n.imageCropped(i)&&r),"imageLoaded"===e&&(r=!1!==n.imageLoaded()&&r),"cropperReady"===e&&(r=!1!==n.cropperReady()&&r),"loadImageFailed"===e&&(r=!1!==n.loadImageFailed()&&r),r},g,c)),o["\u0275did"](6,573440,null,0,a,[p.b,o.ChangeDetectorRef,o.NgZone],{imageChangedEvent:[0,"imageChangedEvent"],format:[1,"format"],maintainAspectRatio:[2,"maintainAspectRatio"],aspectRatio:[3,"aspectRatio"],resizeToWidth:[4,"resizeToWidth"],imageQuality:[5,"imageQuality"]},{imageCropped:"imageCropped",imageLoaded:"imageLoaded",cropperReady:"cropperReady",loadImageFailed:"loadImageFailed"}),(t()(),o["\u0275eld"](7,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],function(t,e){t(e,6,0,e.component.imageChangedEvent,"png",!0,1,200,100)},function(t,e){var i=e.component;t(e,5,0,o["\u0275nov"](e,6).alignImage),t(e,7,0,i.croppedImage)})}function C(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"blog-general",[],null,null,null,v,M)),o["\u0275did"](1,114688,null,0,f,[m.a,d.a,x.a],null,null)],function(t,e){t(e,1,0)},null)}var y=o["\u0275ccf"]("blog-general",f,C,{},{},[]),z=i("iInd");class w{}i.d(e,"GeneralModuleNgFactory",function(){return b});var b=o["\u0275cmf"](r,[],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[n.a,y]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[o.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),o["\u0275mpd"](1073742336,z.p,z.p,[[2,z.u],[2,z.l]]),o["\u0275mpd"](1073742336,w,w,[]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,z.j,function(){return[[{path:"",component:f}]]},[])])})}}]);