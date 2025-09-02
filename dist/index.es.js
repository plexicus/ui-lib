(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-violet-800:oklch(43.2% .232 292.759);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-lg:32rem;--container-xl:36rem;--container-4xl:56rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--tracking-widest:.1em;--radius-xs:.125rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--blur-xs:4px;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-4{top:calc(var(--spacing)*4)}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .top-60{top:calc(var(--spacing)*60)}.ui-lib .top-\\[50\\%\\]{top:50%}.ui-lib .top-full{top:100%}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-1{right:calc(var(--spacing)*1)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .right-4{right:calc(var(--spacing)*4)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .left-3{left:calc(var(--spacing)*3)}.ui-lib .left-\\[50\\%\\]{left:50%}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-2{margin-top:calc(var(--spacing)*2)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .ml-auto{margin-left:auto}.ui-lib .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-5{height:calc(var(--spacing)*5)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-7{height:calc(var(--spacing)*7)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-96{max-height:calc(var(--spacing)*96)}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-\\[calc\\(100vh-80px\\)\\]{max-height:calc(100vh - 80px)}.ui-lib .max-h-\\[calc\\(100vh-600px\\)\\]{max-height:calc(100vh - 600px)}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-7{width:calc(var(--spacing)*7)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-9{width:calc(var(--spacing)*9)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-64{width:calc(var(--spacing)*64)}.ui-lib .w-\\[24px\\]{width:24px}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-\\[200\\%\\]{width:200%}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-\\[90vw\\]{max-width:90vw}.ui-lib .max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-0{min-width:calc(var(--spacing)*0)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .shrink-0{flex-shrink:0}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .origin-right{transform-origin:100%}.ui-lib .origin-top{transform-origin:top}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .cursor-pointer{cursor:pointer}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .scroll-py-1{scroll-padding-block:calc(var(--spacing)*1)}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-col-reverse{flex-direction:column-reverse}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-1{gap:calc(var(--spacing)*1)}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-xl{border-radius:calc(var(--radius) + 4px)}.ui-lib .rounded-xs{border-radius:var(--radius-xs)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-2{border-style:var(--tw-border-style);border-width:2px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-gray-600{border-color:var(--color-gray-600)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .border-white\\/50{border-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/50{border-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]{background-color:#8220ff}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-\\[\\#8220ff\\]\\/60{background-color:#8220ff99}.ui-lib .bg-background,.ui-lib .bg-background\\/80{background-color:var(--background)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-background\\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.ui-lib .bg-border{background-color:var(--border)}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-gray-100{background-color:var(--color-gray-100)}.ui-lib .bg-gray-200{background-color:var(--color-gray-200)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-violet-800{background-color:var(--color-violet-800)}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-0{padding:calc(var(--spacing)*0)}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-3{padding:calc(var(--spacing)*3)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .p-6{padding:calc(var(--spacing)*6)}.ui-lib .px-1{padding-inline:calc(var(--spacing)*1)}.ui-lib .px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-3{padding-block:calc(var(--spacing)*3)}.ui-lib .py-6{padding-block:calc(var(--spacing)*6)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pr-10{padding-right:calc(var(--spacing)*10)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .pl-10{padding-left:calc(var(--spacing)*10)}.ui-lib .text-center{text-align:center}.ui-lib .text-left{text-align:left}.ui-lib .font-mono{font-family:var(--font-mono)}.ui-lib .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.ui-lib .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .text-\\[10px\\]{font-size:10px}.ui-lib .leading-none{--tw-leading:1;line-height:1}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-\\[\\#8220ff\\]\\/80{color:#8220ffcc}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-foreground{color:var(--foreground)}.ui-lib .text-gray-200{color:var(--color-gray-200)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .opacity-70{opacity:.7}.ui-lib .opacity-100{opacity:1}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring-offset-background{--tw-ring-offset-color:var(--background)}.ui-lib .outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .outline-hidden{outline-offset:2px;outline:2px solid #0000}}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-discrete{transition-behavior:allow-discrete}.ui-lib .delay-0{transition-delay:0s}.ui-lib .delay-500{transition-delay:.5s}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ui-lib .delay-0{--tw-animation-delay:0s;animation-delay:0s}.ui-lib .delay-500{--tw-animation-delay:.5s;animation-delay:.5s}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .paused{animation-play-state:paused}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}}.ui-lib .selection\\:bg-primary ::selection{background-color:var(--primary)}.ui-lib .selection\\:bg-primary::selection{background-color:var(--primary)}.ui-lib .selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.ui-lib .selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.ui-lib .file\\:inline-flex::file-selector-button{display:inline-flex}.ui-lib .file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.ui-lib .file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.ui-lib .file\\:bg-transparent::file-selector-button{background-color:#0000}.ui-lib .file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .file\\:text-foreground::file-selector-button{color:var(--foreground)}.ui-lib .placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.ui-lib .placeholder\\:text-white\\/70::placeholder{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.ui-lib .placeholder\\:text-white\\/70::placeholder{color:color-mix(in oklab,var(--color-white)70%,transparent)}}@media (hover:hover){.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-purple-200:hover{background-color:var(--color-purple-200)}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-violet-800:hover{background-color:var(--color-violet-800)}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-\\[\\#8220ff\\]:hover{color:#8220ff}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:opacity-100:hover{opacity:1}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-\\[\\#8220ff\\]:focus{border-color:#8220ff}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-\\[\\#8220ff\\]\\/20:focus{--tw-ring-color:oklab(54.3459% .11409 -.259125/.2)}.ui-lib .focus\\:ring-gray-500:focus{--tw-ring-color:var(--color-gray-500)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible,.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.ui-lib .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:var(--accent)}.ui-lib .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:var(--accent-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib :is(.\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 *)[data-slot=command-input-wrapper]{height:calc(var(--spacing)*12)}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:top-80{top:calc(var(--spacing)*80)}.ui-lib .sm\\:max-h-\\[300px\\]{max-height:300px}.ui-lib .sm\\:max-w-lg{max-width:var(--container-lg)}.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:flex-row{flex-direction:row}.ui-lib .sm\\:justify-end{justify-content:flex-end}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .sm\\:text-left{text-align:left}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:max-h-\\[400px\\]{max-height:400px}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:max-w-xl{max-width:var(--container-xl)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:64rem){.ui-lib .lg\\:top-100{top:calc(var(--spacing)*100)}.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:max-h-\\[500px\\]{max-height:500px}.ui-lib .lg\\:max-w-4xl{max-width:var(--container-4xl)}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-block:calc(var(--spacing)*1.5)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:var(--muted-foreground)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:calc(var(--spacing)*0)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:calc(var(--spacing)*12)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-block:calc(var(--spacing)*3)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.ui-lib .\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib *{scrollbar-color:#404040 #000!important;scrollbar-width:thin!important}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}#cc-main{background:transparent;color:var(--cc-primary-color);font-family:var(--cc-font-family);font-size:16px;font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.15;position:relative;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;position:fixed;z-index:var(--cc-z-index)}#cc-main :after,#cc-main :before,#cc-main a,#cc-main button,#cc-main div,#cc-main h2,#cc-main input,#cc-main p,#cc-main span{all:unset;box-sizing:border-box}#cc-main .pm__badge,#cc-main button{all:initial;box-sizing:border-box;color:unset;visibility:unset}#cc-main .pm__badge,#cc-main a,#cc-main button,#cc-main input{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;font-family:inherit;font-size:100%;line-height:normal;margin:0;outline:revert;outline-offset:2px;overflow:hidden}#cc-main table,#cc-main tbody,#cc-main td,#cc-main th,#cc-main thead,#cc-main tr{all:revert;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit}:root{--cc-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--cc-modal-border-radius:.5rem;--cc-btn-border-radius:.4rem;--cc-modal-transition-duration:.25s;--cc-link-color:var(--cc-btn-primary-bg);--cc-modal-margin:1rem;--cc-z-index:2147483647;--cc-bg:#fff;--cc-primary-color:#2c2f31;--cc-secondary-color:#5e6266;--cc-btn-primary-bg:#30363c;--cc-btn-primary-color:#fff;--cc-btn-primary-border-color:var(--cc-btn-primary-bg);--cc-btn-primary-hover-bg:#000;--cc-btn-primary-hover-color:#fff;--cc-btn-primary-hover-border-color:var(--cc-btn-primary-hover-bg);--cc-btn-secondary-bg:#eaeff2;--cc-btn-secondary-color:var(--cc-primary-color);--cc-btn-secondary-border-color:var(--cc-btn-secondary-bg);--cc-btn-secondary-hover-bg:#d4dae0;--cc-btn-secondary-hover-color:#000;--cc-btn-secondary-hover-border-color:#d4dae0;--cc-separator-border-color:#f0f4f7;--cc-toggle-on-bg:var(--cc-btn-primary-bg);--cc-toggle-off-bg:#667481;--cc-toggle-on-knob-bg:#fff;--cc-toggle-off-knob-bg:var(--cc-toggle-on-knob-bg);--cc-toggle-enabled-icon-color:var(--cc-bg);--cc-toggle-disabled-icon-color:var(--cc-bg);--cc-toggle-readonly-bg:#d5dee2;--cc-toggle-readonly-knob-bg:#fff;--cc-toggle-readonly-knob-icon-color:var(--cc-toggle-readonly-bg);--cc-section-category-border:var(--cc-cookie-category-block-bg);--cc-cookie-category-block-bg:#f0f4f7;--cc-cookie-category-block-border:#f0f4f7;--cc-cookie-category-block-hover-bg:#e9eff4;--cc-cookie-category-block-hover-border:#e9eff4;--cc-cookie-category-expanded-block-bg:transparent;--cc-cookie-category-expanded-block-hover-bg:#dee4e9;--cc-overlay-bg:rgba(0,0,0,.65);--cc-webkit-scrollbar-bg:var(--cc-section-category-border);--cc-webkit-scrollbar-hover-bg:var(--cc-btn-primary-hover-bg);--cc-footer-bg:var(--cc-btn-secondary-bg);--cc-footer-color:var(--cc-secondary-color);--cc-footer-border-color:#e4eaed;--cc-pm-toggle-border-radius:4em}#cc-main.cc--rtl{direction:rtl}#cc-main .cm__title,#cc-main a,#cc-main b,#cc-main em,#cc-main strong{font-weight:600}#cc-main button>span{pointer-events:none}#cc-main .cc__link,#cc-main a{background-image:linear-gradient(currentColor,currentColor);background-position:0 100%;background-repeat:no-repeat;background-size:0 1px;font-weight:600;position:relative;transition:background-size .25s,color .25s ease}#cc-main .cc__link:hover,#cc-main a:hover{background-size:100% 1px;color:var(--cc-primary-color)}#cc-main .cc__link{color:var(--cc-link-color)}#cc-main .cm__desc,#cc-main .pm__body{overscroll-behavior:auto contain;scrollbar-width:thin}@media screen and (min-width:640px){#cc-main ::-webkit-scrollbar,#cc-main ::-webkit-scrollbar-thumb,#cc-main ::-webkit-scrollbar-track{all:revert}#cc-main ::-webkit-scrollbar-thumb{-webkit-background-clip:padding-box;background-clip:padding-box;background:var(--cc-toggle-readonly-bg);border:.25rem solid var(--cc-bg);border-radius:1rem}#cc-main ::-webkit-scrollbar-thumb:hover{background:var(--cc-toggle-off-bg)}#cc-main ::-webkit-scrollbar{background:transparent;width:12px}}html.disable--interaction.show--consent,html.disable--interaction.show--consent body{height:auto!important;overflow:hidden!important}@media (prefers-reduced-motion){#cc-main{--cc-modal-transition-duration:0s}}.cc--darkmode{--cc-bg:#161a1c;--cc-primary-color:#ebf3f6;--cc-secondary-color:#aebbc5;--cc-btn-primary-bg:#c2d0e0;--cc-btn-primary-color:var(--cc-bg);--cc-btn-primary-border-color:var(--cc-btn-primary-bg);--cc-btn-primary-hover-bg:#98a7b6;--cc-btn-primary-hover-color:#000;--cc-btn-primary-hover-border-color:var(--cc-btn-primary-hover-bg);--cc-btn-secondary-bg:#242c31;--cc-btn-secondary-color:var(--cc-primary-color);--cc-btn-secondary-border-color:var(--cc-btn-secondary-bg);--cc-btn-secondary-hover-bg:#353d43;--cc-btn-secondary-hover-color:#fff;--cc-btn-secondary-hover-border-color:var(--cc-btn-secondary-hover-bg);--cc-separator-border-color:#222a30;--cc-toggle-on-bg:var(--cc-btn-primary-bg);--cc-toggle-off-bg:#525f6b;--cc-toggle-on-knob-bg:var(--cc-btn-primary-color);--cc-toggle-off-knob-bg:var(--cc-btn-primary-color);--cc-toggle-enabled-icon-color:var(--cc-btn-primary-color);--cc-toggle-disabled-icon-color:var(--cc-btn-primary-color);--cc-toggle-readonly-bg:#343e45;--cc-toggle-readonly-knob-bg:#5f6b72;--cc-toggle-readonly-knob-icon-color:var(--cc-toggle-readonly-bg);--cc-section-category-border:#1e2428;--cc-cookie-category-block-bg:#1e2428;--cc-cookie-category-block-border:var(--cc-section-category-border);--cc-cookie-category-block-hover-bg:#242c31;--cc-cookie-category-block-hover-border:#232a2f;--cc-cookie-category-expanded-block-bg:transparent;--cc-cookie-category-expanded-block-hover-bg:var(--cc-toggle-readonly-bg);--cc-overlay-bg:rgba(0,0,0,.65);--cc-webkit-scrollbar-bg:var(--cc-section-category-border);--cc-webkit-scrollbar-hover-bg:var(--cc-btn-primary-hover-bg);--cc-footer-bg:#0c0e0f;--cc-footer-color:var(--cc-secondary-color);--cc-footer-border-color:#060809}.cc--darkmode #cc-main{color-scheme:dark}#cc-main .cm{background:var(--cc-bg);border-radius:var(--cc-modal-border-radius);box-shadow:0 .625em 1.875em #0000024d;display:flex;flex-direction:column;max-width:24rem;opacity:0;overflow:hidden;position:fixed;transform:translateY(1.6em);visibility:hidden;z-index:1}#cc-main .cm--top{top:var(--cc-modal-margin)}#cc-main .cm--middle{top:50%;transform:translateY(calc(-50% + 1.6em))}#cc-main .cm--bottom{bottom:var(--cc-modal-margin)}#cc-main .cm--center{left:var(--cc-modal-margin);margin:0 auto;right:var(--cc-modal-margin);width:unset}#cc-main .cm--left{left:var(--cc-modal-margin);margin-right:var(--cc-modal-margin)}#cc-main .cm--right{margin-left:var(--cc-modal-margin);right:var(--cc-modal-margin)}#cc-main .cm__body{display:flex;flex-direction:column;justify-content:space-between;position:relative}#cc-main .cm__btns,#cc-main .cm__links{padding:1rem 1.3rem;width:unset}#cc-main .cm__texts{display:flex;flex:1;flex-direction:column;justify-content:center;padding:1rem 0 0}#cc-main .cm__desc,#cc-main .cm__title{padding:0 1.3rem}#cc-main .cm__title{font-size:1.05em}#cc-main .cm__title+.cm__desc{margin-top:1.1em}#cc-main .cm__desc{color:var(--cc-secondary-color);font-size:.9em;line-height:1.5;max-height:40vh;overflow-x:visible;overflow-y:auto;padding-bottom:1em}#cc-main .cm__btns{border-top:1px solid var(--cc-separator-border-color);display:flex;flex-direction:column;justify-content:center}#cc-main .cm__btn-group{display:grid;grid-auto-columns:minmax(0,1fr)}#cc-main .cm__btn+.cm__btn,#cc-main .cm__btn-group+.cm__btn-group{margin-top:.375rem}#cc-main .cm--flip .cm__btn+.cm__btn,#cc-main .cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem;margin-top:0}#cc-main .cm--inline .cm__btn+.cm__btn{margin-left:.375rem;margin-top:0}#cc-main .cm--inline.cm--flip .cm__btn+.cm__btn{margin-bottom:0;margin-left:0;margin-right:.375rem}#cc-main .cm--inline.cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem;margin-right:0}#cc-main .cm--wide .cm__btn+.cm__btn,#cc-main .cm--wide .cm__btn-group+.cm__btn-group{margin-left:.375rem;margin-top:0}#cc-main .cm--wide.cm--flip .cm__btn+.cm__btn,#cc-main .cm--wide.cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:0;margin-right:.375rem}#cc-main .cm--bar:not(.cm--inline) .cm__btn-group--uneven,#cc-main .cm--wide .cm__btn-group--uneven{display:flex;flex:1;justify-content:space-between}#cc-main .cm--bar:not(.cm--inline).cm--flip .cm__btn-group--uneven,#cc-main .cm--wide.cm--flip .cm__btn-group--uneven{flex-direction:row-reverse}#cc-main .cm__btn{background:var(--cc-btn-primary-bg);border:1px solid var(--cc-btn-primary-border-color);border-radius:var(--cc-btn-border-radius);color:var(--cc-btn-primary-color);font-size:.82em;font-weight:600;min-height:42px;padding:.5em 1em;text-align:center}#cc-main .cm__btn:hover{background:var(--cc-btn-primary-hover-bg);border-color:var(--cc-btn-primary-hover-border-color);color:var(--cc-btn-primary-hover-color)}#cc-main .cm__btn--secondary{background:var(--cc-btn-secondary-bg);border-color:var(--cc-btn-secondary-border-color);color:var(--cc-btn-secondary-color)}#cc-main .cm__btn--secondary:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color);color:var(--cc-btn-secondary-hover-color)}#cc-main .cm__btn--close{border-radius:0;border-bottom-left-radius:var(--cc-btn-border-radius);border-right:none;border-top:none;display:none;font-size:1em;height:42px;min-width:auto!important;overflow:hidden;padding:0!important;position:absolute;right:0;top:0;width:42px}#cc-main .cm__btn--close svg{stroke:var(--cc-btn-primary-color);transform:scale(.5);transition:stroke .15s ease}#cc-main .cm__btn--close:hover svg{stroke:var(--cc-btn-primary-hover-color)}#cc-main .cm__btn--close.cm__btn--secondary svg{stroke:var(--cc-btn-secondary-color)}#cc-main .cm__btn--close.cm__btn--secondary:hover svg{stroke:var(--cc-btn-secondary-hover-color)}#cc-main .cm__btn--close+.cm__texts .cm__title{padding-right:3rem}#cc-main .cm--inline .cm__btn-group{grid-auto-flow:column}#cc-main .cm__footer{background:var(--cc-footer-bg);border-top:1px solid var(--cc-footer-border-color);color:var(--cc-footer-color);padding:.4em 0 .5em}#cc-main .cm__links{display:flex;flex-direction:row;padding-bottom:0;padding-top:0}#cc-main .cm__link-group{display:flex;flex-direction:row;font-size:.8em;width:100%}#cc-main .cm__link-group>*+*{margin-left:1.3rem}#cc-main .cm--flip .cm__btn:last-child{grid-row:1}#cc-main .cm--inline.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--box .cm__btn--close{display:block}#cc-main .cm--box.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cm--box.cm--wide{max-width:36em}#cc-main .cm--box.cm--wide .cm__btns{flex-direction:row;justify-content:space-between}#cc-main .cm--box.cm--wide .cm__btn-group{grid-auto-flow:column}#cc-main .cm--box.cm--wide .cm__btn{min-width:120px;padding-left:1.8em;padding-right:1.8em}#cc-main .cm--box.cm--wide.cm--flip .cm__btns{flex-direction:row-reverse}#cc-main .cm--box.cm--wide.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--cloud{max-width:54em;width:unset}#cc-main .cm--cloud .cm__body{flex-direction:row}#cc-main .cm--cloud .cm__texts{flex:1}#cc-main .cm--cloud .cm__desc{max-height:9.4em}#cc-main .cm--cloud .cm__btns{border-left:1px solid var(--cc-separator-border-color);border-top:none;max-width:23em}#cc-main .cm--cloud .cm__btn-group{flex-direction:column}#cc-main .cm--cloud .cm__btn{min-width:19em}#cc-main .cm--cloud.cm--flip .cm__btn-group,#cc-main .cm--cloud.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cm--cloud.cm--inline .cm__btn-group{flex-direction:row}#cc-main .cm--cloud.cm--inline .cm__btn{min-width:10em}#cc-main .cm--cloud.cm--inline.cm--flip .cm__btn-group{flex-direction:row-reverse}#cc-main .cm--bar{border-radius:0;left:0;margin:0;max-width:unset;opacity:1;right:0;transform:translateY(0);width:100vw;--cc-modal-transition-duration:.35s}#cc-main .cm--bar.cm--top{top:0;transform:translateY(-100%)}#cc-main .cm--bar.cm--bottom{bottom:0;transform:translateY(100%)}#cc-main .cm--bar .cm__body,#cc-main .cm--bar .cm__links{margin:0 auto;max-width:55em;width:100%}#cc-main .cm--bar .cm__body{padding:.5em 0 .9em}#cc-main .cm--bar .cm__btns{border-top:none;flex-direction:row;justify-content:space-between}#cc-main .cm--bar .cm__btn-group{grid-auto-flow:column}#cc-main .cm--bar:not(.cm--inline) .cm__btn+.cm__btn,#cc-main .cm--bar:not(.cm--inline) .cm__btn-group+.cm__btn-group{margin-left:.375rem;margin-top:0}#cc-main .cm--bar .cm__btn{min-width:120px;padding-left:2em;padding-right:2em}#cc-main .cm--bar.cm--flip:not(.cm--inline) .cm__btn+.cm__btn,#cc-main .cm--bar.cm--flip:not(.cm--inline) .cm__btn-group+.cm__btn-group{margin-bottom:0;margin-left:0;margin-right:.375rem}#cc-main .cm--bar.cm--flip .cm__btns{flex-direction:row-reverse}#cc-main .cm--bar.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--bar.cm--inline .cm__body,#cc-main .cm--bar.cm--inline .cm__links{max-width:74em}#cc-main .cm--bar.cm--inline .cm__body{flex-direction:row;padding:0}#cc-main .cm--bar.cm--inline .cm__btns{flex-direction:column;justify-content:center;max-width:23em}#cc-main .cm--bar.cm--inline.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cc--anim .cm,#cc-main .cc--anim.cm-wrapper:before{transition:opacity var(--cc-modal-transition-duration) ease,visibility var(--cc-modal-transition-duration) ease,transform var(--cc-modal-transition-duration) ease}#cc-main .cc--anim .cm__btn,#cc-main .cc--anim .cm__close{transition:background-color .15s ease,border-color .15s ease,color .15s ease}.disable--interaction #cc-main .cm-wrapper:before{background:var(--cc-overlay-bg);bottom:0;content:"";left:0;opacity:0;position:fixed;right:0;top:0;visibility:hidden;z-index:0}.show--consent #cc-main .cc--anim .cm{opacity:1;transform:translateY(0);visibility:visible!important}.show--consent #cc-main .cc--anim .cm--middle{transform:translateY(-50%)}.show--consent #cc-main .cc--anim .cm--bar{transform:translateY(0)}.show--consent #cc-main .cc--anim.cm-wrapper:before{opacity:1;visibility:visible}#cc-main.cc--rtl .cm__btn--close{border-bottom-left-radius:unset;border-bottom-right-radius:var(--cc-btn-border-radius);left:0;right:unset}#cc-main.cc--rtl .cm__btn--close+.cm__texts .cm__title{padding-left:3rem!important;padding-right:1.3rem}#cc-main.cc--rtl .cm--inline .cm__btn+.cm__btn{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .cm--inline.cm--flip .cm__btn+.cm__btn{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar .cm__btn-group+.cm__btn-group,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide .cm__btn-group+.cm__btn-group{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar.cm--flip .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide.cm--flip .cm__btn+.cm__btn{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .cm__link-group>*+*{margin-left:0;margin-right:1.3rem}@media screen and (max-width:640px){#cc-main{--cc-modal-margin:.5em}#cc-main .cm{max-width:none!important;width:auto!important}#cc-main .cm__body{flex-direction:column!important;padding:0!important}#cc-main .cm__btns,#cc-main .cm__desc,#cc-main .cm__links,#cc-main .cm__title{padding-left:1.1rem!important;padding-right:1.1rem!important}#cc-main .cm__btns{border-left:none!important;border-top:1px solid var(--cc-separator-border-color)!important;flex-direction:column!important;max-width:none!important;min-width:auto!important}#cc-main .cm__btn+.cm__btn,#cc-main .cm__btn-group+.cm__btn-group{margin:.375rem 0 0!important}#cc-main .cm--flip .cm__btn+.cm__btn,#cc-main .cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem!important;margin-top:0!important}#cc-main .cm__btn-group{display:flex!important;flex-direction:column!important;min-width:auto!important}#cc-main .cm__btn{flex:auto!important}#cc-main .cm__link-group{justify-content:center!important}#cc-main .cm--flip .cm__btn-group,#cc-main .cm--flip .cm__btns{flex-direction:column-reverse!important}}#cc-main .pm-wrapper{position:relative;z-index:2}#cc-main .pm{background:var(--cc-bg);border-radius:var(--cc-modal-border-radius);box-shadow:0 .625em 1.875em #0000024d;display:flex;flex-direction:column;opacity:0;overflow:hidden;position:fixed;visibility:hidden;width:100%;width:unset;z-index:1}#cc-main svg{fill:none;width:100%}#cc-main .pm__body,#cc-main .pm__footer,#cc-main .pm__header{padding:1em 1.4em}#cc-main .pm__header{align-items:center;border-bottom:1px solid var(--cc-separator-border-color);display:flex;justify-content:space-between}#cc-main .pm__title{align-items:center;display:flex;flex:1;font-weight:600;margin-right:2em}#cc-main .pm__close-btn{background:var(--cc-btn-secondary-bg);border:1px solid var(--cc-btn-secondary-border-color);border-radius:var(--cc-btn-border-radius);height:40px;position:relative;transition:all .15s ease;width:40px}#cc-main .pm__close-btn span{display:flex;height:100%;width:100%}#cc-main .pm__close-btn svg{stroke:var(--cc-btn-secondary-color);transform:scale(.5);transition:stroke .15s ease}#cc-main .pm__close-btn:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color)}#cc-main .pm__close-btn:hover svg{stroke:var(--cc-btn-secondary-hover-color)}#cc-main .pm__body{flex:1;overflow-y:auto;overflow-y:overlay}#cc-main .pm__section,#cc-main .pm__section--toggle{border-radius:var(--cc-btn-border-radius);display:flex;flex-direction:column;margin-bottom:.5em}#cc-main .pm__section--toggle .pm__section-desc-wrapper{border:1px solid var(--cc-cookie-category-block-border);border-radius:var(--cc-btn-border-radius);border-top:none;border-top-left-radius:0;border-top-right-radius:0;display:none;margin-top:0!important;overflow:hidden}#cc-main .pm__section{border:1px solid var(--cc-separator-border-color);padding:1em;transition:background-color .25s ease,border-color .25s ease}#cc-main .pm__section:first-child{border:none;margin-bottom:2em;margin-top:0;padding:0;transition:none}#cc-main .pm__section:not(:first-child):hover{background:var(--cc-cookie-category-block-bg);border-color:var(--cc-cookie-category-block-border)}#cc-main .pm__section-toggles+.pm__section{margin-top:2em}#cc-main .pm__section--toggle{background:var(--cc-cookie-category-block-bg);border-top:none;margin-bottom:.375rem}#cc-main .pm__section--toggle .pm__section-title{align-items:center;background:var(--cc-cookie-category-block-bg);border:1px solid var(--cc-cookie-category-block-border);display:flex;justify-content:space-between;min-height:58px;padding:1.1em 5.4em 1.1em 1.2em;position:relative;transition:background-color .25s ease,border-color .25s ease;width:100%}#cc-main .pm__section--toggle .pm__section-title:hover{background:var(--cc-cookie-category-block-hover-bg);border-color:var(--cc-cookie-category-block-hover-border)}#cc-main .pm__section--toggle .pm__section-desc{margin-top:0;padding:1em}#cc-main .pm__section--toggle.is-expanded{--cc-cookie-category-block-bg:var(--cc-cookie-category-expanded-block-bg);--cc-cookie-category-block-border:var(--cc-cookie-category-expanded-block-hover-bg)}#cc-main .pm__section--toggle.is-expanded .pm__section-title{border-bottom-left-radius:0;border-bottom-right-radius:0}#cc-main .pm__section--toggle.is-expanded .pm__section-arrow svg{transform:scale(.5) rotate(180deg)}#cc-main .pm__section--toggle.is-expanded .pm__section-desc-wrapper{display:flex}#cc-main .pm__section--expandable .pm__section-title{cursor:pointer;padding-left:3.4em}#cc-main .pm__section--expandable .pm__section-arrow{background:var(--cc-toggle-readonly-bg);border-radius:100%;display:flex;height:20px;justify-content:center;left:18px;pointer-events:none;position:absolute;width:20px}#cc-main .pm__section--expandable .pm__section-arrow svg{stroke:var(--cc-btn-secondary-color);transform:scale(.5)}#cc-main .pm__section-title-wrapper{align-items:center;display:flex;position:relative}#cc-main .pm__section-title-wrapper+.pm__section-desc-wrapper{margin-top:.85em}#cc-main .pm__section-title{border-radius:var(--cc-btn-border-radius);font-size:.95em;font-weight:600}#cc-main .pm__badge{align-items:center;background:var(--cc-btn-secondary-bg);border-radius:5em;color:var(--cc-secondary-color);display:flex;flex:none;font-size:.8em;font-weight:600;height:23px;justify-content:center;margin-left:1em;min-width:23px;overflow:hidden;padding:0 .6em 1px;position:relative;text-align:center;white-space:nowrap;width:auto}#cc-main .pm__service-counter{background:var(--cc-btn-primary-bg);color:var(--cc-btn-primary-color);padding:0;width:23px}#cc-main .pm__service-counter[data-counterlabel]{padding:0 .6em 1px;width:auto}#cc-main .section__toggle,#cc-main .section__toggle-wrapper,#cc-main .toggle__icon,#cc-main .toggle__label{border-radius:var(--cc-pm-toggle-border-radius);height:23px;transform:translateZ(0);width:50px}#cc-main .section__toggle-wrapper{cursor:pointer;position:absolute;right:18px;z-index:1}#cc-main .toggle-service{height:19px;position:relative;right:0;width:42px}#cc-main .toggle-service .section__toggle,#cc-main .toggle-service .toggle__icon,#cc-main .toggle-service .toggle__label{height:19px;width:42px}#cc-main .toggle-service .toggle__icon{position:relative}#cc-main .toggle-service .toggle__icon-circle{height:19px;width:19px}#cc-main .toggle-service .section__toggle:checked~.toggle__icon .toggle__icon-circle{transform:translate(23px)}#cc-main .pm__section--toggle:nth-child(2) .section__toggle-wrapper:after{display:none!important}#cc-main .section__toggle{border:0;cursor:pointer;display:block;left:0;margin:0;position:absolute;top:0}#cc-main .section__toggle:disabled{cursor:not-allowed}#cc-main .toggle__icon{background:var(--cc-toggle-off-bg);box-shadow:0 0 0 1px var(--cc-toggle-off-bg);display:flex;flex-direction:row;pointer-events:none;position:absolute;transition:all .25s ease}#cc-main .toggle__icon-circle{background:var(--cc-toggle-off-knob-bg);border:none;border-radius:var(--cc-pm-toggle-border-radius);box-shadow:0 1px 2px #1820035c;display:block;height:23px;left:0;position:absolute;top:0;transition:transform .25s ease,background-color .25s ease;width:23px}#cc-main .toggle__icon-off,#cc-main .toggle__icon-on{height:100%;position:absolute;transition:opacity .15s ease;width:100%}#cc-main .toggle__icon-on{opacity:0;transform:rotate(45deg)}#cc-main .toggle__icon-on svg{stroke:var(--cc-toggle-on-bg);transform:scale(.55) rotate(-45deg)}#cc-main .toggle__icon-off{opacity:1}#cc-main .toggle__icon-off svg{stroke:var(--cc-toggle-off-bg);transform:scale(.55)}#cc-main .section__toggle:checked~.toggle__icon{background:var(--cc-toggle-on-bg);box-shadow:0 0 0 1px var(--cc-toggle-on-bg)}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-circle{background-color:var(--cc-toggle-on-knob-bg);transform:translate(27px)}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-on{opacity:1}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-off{opacity:0}#cc-main .section__toggle:checked:disabled~.toggle__icon{background:var(--cc-toggle-readonly-bg);box-shadow:0 0 0 1px var(--cc-toggle-readonly-bg)}#cc-main .section__toggle:checked:disabled~.toggle__icon .toggle__icon-circle{background:var(--cc-toggle-readonly-knob-bg);box-shadow:none}#cc-main .section__toggle:checked:disabled~.toggle__icon svg{stroke:var(--cc-toggle-readonly-knob-icon-color)}#cc-main .toggle__label{opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;z-index:-1}#cc-main .pm__section-desc-wrapper{color:var(--cc-secondary-color);display:flex;flex-direction:column;font-size:.9em}#cc-main .pm__section-desc-wrapper>:not(:last-child){border-bottom:1px solid var(--cc-cookie-category-block-border)}#cc-main .pm__section-services{display:flex;flex-direction:column}#cc-main .pm__service{align-items:center;display:flex;justify-content:space-between;padding:.4em 1.2em;position:relative;transition:background-color .15s ease}#cc-main .pm__service:hover{background-color:var(--cc-cookie-category-block-hover-bg)}#cc-main .pm__service-header{align-items:center;display:flex;margin-right:1em;width:100%}#cc-main .pm__service-icon{border:2px solid;border-radius:100%;height:8px;margin-left:6px;margin-right:20px;margin-top:1px;min-width:8px}#cc-main .pm__service-title{font-size:.95em;width:100%;word-break:break-word}#cc-main .pm__section-desc{line-height:1.5em}#cc-main .pm__section-table{border-collapse:collapse;font-size:.9em;margin:0;overflow:hidden;padding:0;text-align:left;width:100%}#cc-main .pm__table-caption{text-align:left}#cc-main .pm__table-caption,#cc-main .pm__table-head>tr{border-bottom:1px dashed var(--cc-separator-border-color);color:var(--cc-primary-color);font-weight:600}#cc-main .pm__table-tr{transition:background-color .15s ease}#cc-main .pm__table-tr:hover{background:var(--cc-cookie-category-block-hover-bg)}#cc-main .pm__table-caption,#cc-main .pm__table-td,#cc-main .pm__table-th{padding:.625em .625em .625em 1.2em;vertical-align:top}#cc-main .pm__footer{border-top:1px solid var(--cc-separator-border-color);display:flex;justify-content:space-between}#cc-main .pm__btn-group{display:flex}#cc-main .pm__btn+.pm__btn,#cc-main .pm__btn-group+.pm__btn-group{margin-left:.375rem}#cc-main .pm--flip .pm__btn+.pm__btn,#cc-main .pm--flip .pm__btn-group+.pm__btn-group{margin-left:0;margin-right:.375rem}#cc-main .pm__btn{background:var(--cc-btn-primary-bg);border:1px solid var(--cc-btn-primary-border-color);border-radius:var(--cc-btn-border-radius);color:var(--cc-btn-primary-color);flex:auto;font-size:.82em;font-weight:600;min-height:42px;min-width:110px;padding:.5em 1.5em;text-align:center;transition:background-color .15s ease,border-color .15s ease,color .15s ease}#cc-main .pm__btn:hover{background:var(--cc-btn-primary-hover-bg);border-color:var(--cc-btn-primary-hover-border-color);color:var(--cc-btn-primary-hover-color)}#cc-main .pm__btn--secondary{background:var(--cc-btn-secondary-bg);border-color:var(--cc-btn-secondary-border-color);color:var(--cc-btn-secondary-color)}#cc-main .pm__btn--secondary:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color);color:var(--cc-btn-secondary-hover-color)}#cc-main .pm--box{height:calc(100% - 2em);left:var(--cc-modal-margin);margin:0 auto;max-height:37.5em;max-width:43em;right:var(--cc-modal-margin);top:50%;transform:translateY(calc(-50% + 1.6em))}#cc-main .pm--box.pm--flip .pm__btn-group,#cc-main .pm--box.pm--flip .pm__footer{flex-direction:row-reverse}#cc-main .pm--bar{border-radius:0;bottom:0;height:100%;margin:0;max-height:none;max-width:29em;opacity:1;top:0;width:100%;--cc-modal-transition-duration:.35s}#cc-main .pm--bar .pm__section-table,#cc-main .pm--bar .pm__table-body,#cc-main .pm--bar .pm__table-td,#cc-main .pm--bar .pm__table-th,#cc-main .pm--bar .pm__table-tr{display:block}#cc-main .pm--bar .pm__table-head{display:none}#cc-main .pm--bar .pm__table-caption{display:block}#cc-main .pm--bar .pm__table-tr:not(:last-child){border-bottom:1px solid var(--cc-separator-border-color)}#cc-main .pm--bar .pm__table-td{display:flex;justify-content:space-between}#cc-main .pm--bar .pm__table-td:before{color:var(--cc-primary-color);content:attr(data-column);flex:1;font-weight:600;min-width:100px;overflow:hidden;padding-right:2em;text-overflow:ellipsis}#cc-main .pm--bar .pm__table-td>div{flex:3}#cc-main .pm--bar:not(.pm--wide) .pm__body,#cc-main .pm--bar:not(.pm--wide) .pm__footer,#cc-main .pm--bar:not(.pm--wide) .pm__header{padding:1em 1.3em}#cc-main .pm--bar:not(.pm--wide) .pm__btn-group,#cc-main .pm--bar:not(.pm--wide) .pm__footer{flex-direction:column}#cc-main .pm--bar:not(.pm--wide) .pm__btn+.pm__btn,#cc-main .pm--bar:not(.pm--wide) .pm__btn-group+.pm__btn-group{margin:.375rem 0 0}#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn-group,#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__footer{flex-direction:column-reverse}#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn+.pm__btn,#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn-group+.pm__btn-group{margin-bottom:.375rem;margin-top:0}#cc-main .pm--bar:not(.pm--wide) .pm__badge{display:none}#cc-main .pm--bar.pm--left{left:0;transform:translate(-100%)}#cc-main .pm--bar.pm--right{right:0;transform:translate(100%)}#cc-main .pm--bar.pm--wide{max-width:35em}#cc-main .pm--bar.pm--wide .pm__body,#cc-main .pm--bar.pm--wide .pm__footer,#cc-main .pm--bar.pm--wide .pm__header{padding:1em 1.4em}#cc-main .pm--bar.pm--wide.pm--flip .pm__btn-group,#cc-main .pm--bar.pm--wide.pm--flip .pm__footer{flex-direction:row-reverse}#cc-main .pm-overlay{background:var(--cc-overlay-bg);bottom:0;content:"";left:0;opacity:0;position:fixed;right:0;top:0;visibility:hidden;z-index:1}#cc-main .cc--anim .pm,#cc-main .cc--anim .pm-overlay{transition:opacity var(--cc-modal-transition-duration) ease,visibility var(--cc-modal-transition-duration) ease,transform var(--cc-modal-transition-duration) ease}.show--preferences #cc-main .cc--anim .pm{opacity:1;visibility:visible!important}.show--preferences #cc-main .cc--anim .pm--box{transform:translateY(-50%)}.show--preferences #cc-main .cc--anim .pm--bar{transform:translate(0)}.show--preferences #cc-main .cc--anim .pm-overlay{opacity:1;visibility:visible}#cc-main.cc--rtl .pm__service-header{margin-left:1em;margin-right:0}#cc-main.cc--rtl .pm__section-arrow{left:unset;right:18px}#cc-main.cc--rtl .section__toggle-wrapper{left:18px;right:unset;transform-origin:left}#cc-main.cc--rtl .toggle-service{left:0}#cc-main.cc--rtl .pm__service-icon{margin-left:20px;margin-right:5px}#cc-main.cc--rtl .pm__section--toggle .pm__section-title{padding-left:5.4em;padding-right:1.2em}#cc-main.cc--rtl .pm__section--expandable .pm__section-title{padding-right:3.4em}#cc-main.cc--rtl .pm__badge{margin-left:unset;margin-right:1em}#cc-main.cc--rtl .toggle__icon-circle{transform:translate(27px)}#cc-main.cc--rtl .toggle-service .toggle__icon-circle{transform:translate(23px)}#cc-main.cc--rtl .section__toggle:checked~.toggle__icon .toggle__icon-circle{transform:translate(0)}#cc-main.cc--rtl .pm__table-td,#cc-main.cc--rtl .pm__table-th{padding-left:unset;padding-right:1.2em;text-align:right}#cc-main.cc--rtl .pm__table-td{padding-left:unset;padding-right:1.2em}#cc-main.cc--rtl .pm__table-td:before{padding-left:2em;padding-right:unset}#cc-main.cc--rtl .pm__btn+.pm__btn,#cc-main.cc--rtl .pm__btn-group+.pm__btn-group{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .pm--flip .pm__btn+.pm__btn,#cc-main.cc--rtl .pm--flip .pm__btn-group+.pm__btn-group{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .pm--flip.pm--bar:not(.pm--wide) .pm__btn+.pm__btn,#cc-main.cc--rtl .pm--flip.pm--bar:not(.pm--wide) .pm__btn-group+.pm__btn-group{margin-left:0}@media screen and (max-width:640px){#cc-main .pm{border-radius:0;bottom:0;height:auto;left:0;max-height:100%;max-width:none!important;right:0;top:0;transform:translateY(1.6em)}#cc-main .pm__body,#cc-main .pm__footer,#cc-main .pm__header{padding:.9em!important}#cc-main .pm__badge{display:none}#cc-main .pm__section-table,#cc-main .pm__table-body,#cc-main .pm__table-caption,#cc-main .pm__table-td,#cc-main .pm__table-th,#cc-main .pm__table-tr{display:block}#cc-main .pm__table-head{display:none}#cc-main .pm__table-tr:not(:last-child){border-bottom:1px solid var(--cc-separator-border-color)}#cc-main .pm__table-td{display:flex;justify-content:space-between}#cc-main .pm__table-td:before{color:var(--cc-primary-color);content:attr(data-column);flex:1;font-weight:600;min-width:100px;overflow:hidden;padding-right:2em;text-overflow:ellipsis}#cc-main .pm__table-td>div{flex:3}#cc-main .pm__btn-group,#cc-main .pm__footer{flex-direction:column!important}#cc-main .pm__btn-group{display:flex!important}#cc-main .pm__btn+.pm__btn,#cc-main .pm__btn-group+.pm__btn-group{margin:.375rem 0 0!important}#cc-main .pm--flip .pm__btn+.pm__btn,#cc-main .pm--flip .pm__btn-group+.pm__btn-group{margin-bottom:.375rem!important;margin-top:0!important}#cc-main .pm--flip .pm__btn-group,#cc-main .pm--flip .pm__footer{flex-direction:column-reverse!important}.show--preferences #cc-main .cc--anim .pm{transform:translateY(0)!important}}.cc-btns{display:flex;flex-direction:column;gap:3px}.cc-btns>button{padding:10px}#cc-main{--cc-btn-primary-bg: #8220ff;--cc-btn-primary-border-color: #6619cc;--cc-btn-primary-hover-bg: #9b51e0;--cc-btn-primary-hover-border-color: #7a29e0;--cc-toggle-on-bg: var(--cc-btn-primary-bg);--cc-btn-border-radius: 10px}`)),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as x from "react";
import kn, { createContext as Qa, useContext as ec, useCallback as Sr, useState as ye, useRef as At, useEffect as _e } from "react";
import { Search as Js, X as tc, XIcon as rc, SearchIcon as nc, Globe as ic } from "lucide-react";
import * as sc from "react-dom";
import oc from "react-dom";
var ar = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei;
function ac() {
  if (Ei) return Ft;
  Ei = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      s = {};
      for (var a in i)
        a !== "key" && (s[a] = i[a]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return Ft.Fragment = t, Ft.jsx = r, Ft.jsxs = r, Ft;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oi;
function cc() {
  return Oi || (Oi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === A ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case m:
          return "Fragment";
        case j:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case z:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case h:
            return "Portal";
          case P:
            return (v.displayName || "Context") + ".Provider";
          case y:
            return (v._context.displayName || "Context") + ".Consumer";
          case w:
            var O = v.render;
            return v = v.displayName, v || (v = O.displayName || O.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case E:
            return O = v.displayName || null, O !== null ? O : e(v.type) || "Memo";
          case C:
            O = v._payload, v = v._init;
            try {
              return e(v(O));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function r(v) {
      try {
        t(v);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var b = O.error, I = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return b.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(v);
      }
    }
    function n(v) {
      if (v === m) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === C)
        return "<...>";
      try {
        var O = e(v);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var v = V.A;
      return v === null ? null : v.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (J.call(v, "key")) {
        var O = Object.getOwnPropertyDescriptor(v, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function a(v, O) {
      function b() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: b,
        configurable: !0
      });
    }
    function u() {
      var v = e(this.type);
      return Z[v] || (Z[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function l(v, O, b, I, L, $, B, F) {
      return b = $.ref, v = {
        $$typeof: f,
        type: v,
        key: O,
        props: $,
        _owner: L
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function p(v, O, b, I, L, $, B, F) {
      var R = O.children;
      if (R !== void 0)
        if (I)
          if (M(R)) {
            for (I = 0; I < R.length; I++)
              d(R[I]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (J.call(O, "key")) {
        R = e(v);
        var X = Object.keys(O).filter(function(de) {
          return de !== "key";
        });
        I = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", k[R + I] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          R,
          X,
          R
        ), k[R + I] = !0);
      }
      if (R = null, b !== void 0 && (r(b), R = "" + b), o(O) && (r(O.key), R = "" + O.key), "key" in O) {
        b = {};
        for (var ce in O)
          ce !== "key" && (b[ce] = O[ce]);
      } else b = O;
      return R && a(
        b,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), l(
        v,
        R,
        $,
        L,
        i(),
        b,
        B,
        F
      );
    }
    function d(v) {
      typeof v == "object" && v !== null && v.$$typeof === f && v._store && (v._store.validated = 1);
    }
    var g = kn, f = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), P = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), V = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, M = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var D, Z = {}, Y = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), W = H(n(s)), k = {};
    Ht.Fragment = m, Ht.jsx = function(v, O, b, I, L) {
      var $ = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        v,
        O,
        b,
        !1,
        I,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? H(n(v)) : W
      );
    }, Ht.jsxs = function(v, O, b, I, L) {
      var $ = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        v,
        O,
        b,
        !0,
        I,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? H(n(v)) : W
      );
    };
  })()), Ht;
}
var Ii;
function lc() {
  return Ii || (Ii = 1, process.env.NODE_ENV === "production" ? ar.exports = ac() : ar.exports = cc()), ar.exports;
}
var c = lc();
function Zs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Zs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Xs() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Zs(e)) && (n && (n += " "), n += t);
  return n;
}
const Ai = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ni = Xs, uc = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ni(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: s } = t, o = Object.keys(i).map((l) => {
    const p = r == null ? void 0 : r[l], d = s == null ? void 0 : s[l];
    if (p === null) return null;
    const g = Ai(p) || Ai(d);
    return i[l][g];
  }), a = r && Object.entries(r).reduce((l, p) => {
    let [d, g] = p;
    return g === void 0 || (l[d] = g), l;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, p) => {
    let { class: d, className: g, ...f } = p;
    return Object.entries(f).every((h) => {
      let [m, _] = h;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === _;
    }) ? [
      ...l,
      d,
      g
    ] : l;
  }, []);
  return Ni(e, o, u, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Kn = "-", dc = (e) => {
  const t = fc(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Kn);
      return a[0] === "" && a.length !== 1 && a.shift(), Qs(a, t) || pc(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const u = r[o] || [];
      return a && n[o] ? [...u, ...n[o]] : u;
    }
  };
}, Qs = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Qs(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(Kn);
  return (o = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}, zi = /^\[(.+)\]$/, pc = (e) => {
  if (zi.test(e)) {
    const t = zi.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, fc = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    Sn(r[i], n, i, t);
  return n;
}, Sn = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : Li(t, i);
      s.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (hc(i)) {
        Sn(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([s, o]) => {
      Sn(o, Li(t, s), r, n);
    });
  });
}, Li = (e, t) => {
  let r = e;
  return t.split(Kn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, hc = (e) => e.isThemeGetter, gc = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (s, o) => {
    r.set(s, o), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = r.get(s);
      if (o !== void 0)
        return o;
      if ((o = n.get(s)) !== void 0)
        return i(s, o), o;
    },
    set(s, o) {
      r.has(s) ? r.set(s, o) : i(s, o);
    }
  };
}, Pn = "!", jn = ":", mc = jn.length, vc = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const s = [];
    let o = 0, a = 0, u = 0, l;
    for (let h = 0; h < i.length; h++) {
      let m = i[h];
      if (o === 0 && a === 0) {
        if (m === jn) {
          s.push(i.slice(u, h)), u = h + mc;
          continue;
        }
        if (m === "/") {
          l = h;
          continue;
        }
      }
      m === "[" ? o++ : m === "]" ? o-- : m === "(" ? a++ : m === ")" && a--;
    }
    const p = s.length === 0 ? i : i.substring(u), d = yc(p), g = d !== p, f = l && l > u ? l - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const i = t + jn, s = n;
    n = (o) => o.startsWith(i) ? s(o.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = n;
    n = (s) => r({
      className: s,
      parseClassName: i
    });
  }
  return n;
}, yc = (e) => e.endsWith(Pn) ? e.substring(0, e.length - 1) : e.startsWith(Pn) ? e.substring(1) : e, xc = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let s = [];
    return n.forEach((o) => {
      o[0] === "[" || t[o] ? (i.push(...s.sort(), o), s = []) : s.push(o);
    }), i.push(...s.sort()), i;
  };
}, bc = (e) => ({
  cache: gc(e.cacheSize),
  parseClassName: vc(e),
  sortModifiers: xc(e),
  ...dc(e)
}), _c = /\s+/, wc = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: s
  } = t, o = [], a = e.trim().split(_c);
  let u = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const p = a[l], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = r(p);
    if (d) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let _ = !!m, j = n(_ ? h.substring(0, m) : h);
    if (!j) {
      if (!_) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (j = n(h), !j) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      _ = !1;
    }
    const y = s(g).join(":"), P = f ? y + Pn : y, w = P + j;
    if (o.includes(w))
      continue;
    o.push(w);
    const S = i(j, _);
    for (let z = 0; z < S.length; ++z) {
      const E = S[z];
      o.push(P + E);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function kc() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = eo(t)) && (n && (n += " "), n += r);
  return n;
}
const eo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = eo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Sc(e, ...t) {
  let r, n, i, s = o;
  function o(u) {
    const l = t.reduce((p, d) => d(p), e());
    return r = bc(l), n = r.cache.get, i = r.cache.set, s = a, a(u);
  }
  function a(u) {
    const l = n(u);
    if (l)
      return l;
    const p = wc(u, r);
    return i(u, p), p;
  }
  return function() {
    return s(kc.apply(null, arguments));
  };
}
const ue = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, to = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ro = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pc = /^\d+\/\d+$/, jc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Cc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ec = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Oc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ic = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ht = (e) => Pc.test(e), ne = (e) => !!e && !Number.isNaN(Number(e)), Fe = (e) => !!e && Number.isInteger(Number(e)), en = (e) => e.endsWith("%") && ne(e.slice(0, -1)), Te = (e) => jc.test(e), Ac = () => !0, Nc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Cc.test(e) && !Ec.test(e)
), no = () => !1, zc = (e) => Oc.test(e), Lc = (e) => Ic.test(e), Tc = (e) => !U(e) && !q(e), Mc = (e) => Tt(e, oo, no), U = (e) => to.test(e), Je = (e) => Tt(e, ao, Nc), tn = (e) => Tt(e, Fc, ne), Ti = (e) => Tt(e, io, no), $c = (e) => Tt(e, so, Lc), cr = (e) => Tt(e, co, zc), q = (e) => ro.test(e), Wt = (e) => Mt(e, ao), Rc = (e) => Mt(e, Hc), Mi = (e) => Mt(e, io), Dc = (e) => Mt(e, oo), Bc = (e) => Mt(e, so), lr = (e) => Mt(e, co, !0), Tt = (e, t, r) => {
  const n = to.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Mt = (e, t, r = !1) => {
  const n = ro.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, io = (e) => e === "position" || e === "percentage", so = (e) => e === "image" || e === "url", oo = (e) => e === "length" || e === "size" || e === "bg-size", ao = (e) => e === "length", Fc = (e) => e === "number", Hc = (e) => e === "family-name", co = (e) => e === "shadow", Wc = () => {
  const e = ue("color"), t = ue("font"), r = ue("text"), n = ue("font-weight"), i = ue("tracking"), s = ue("leading"), o = ue("breakpoint"), a = ue("container"), u = ue("spacing"), l = ue("radius"), p = ue("shadow"), d = ue("inset-shadow"), g = ue("text-shadow"), f = ue("drop-shadow"), h = ue("blur"), m = ue("perspective"), _ = ue("aspect"), j = ue("ease"), y = ue("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], S = () => [...w(), q, U], z = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], C = () => [q, U, u], T = () => [ht, "full", "auto", ...C()], A = () => [Fe, "none", "subgrid", q, U], V = () => ["auto", {
    span: ["full", Fe, q, U]
  }, Fe, q, U], J = () => [Fe, "auto", q, U], M = () => ["auto", "min", "max", "fr", q, U], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Z = () => ["auto", ...C()], Y = () => [ht, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], W = () => [e, q, U], k = () => [...w(), Mi, Ti, {
    position: [q, U]
  }], v = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], O = () => ["auto", "cover", "contain", Dc, Mc, {
    size: [q, U]
  }], b = () => [en, Wt, Je], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    q,
    U
  ], L = () => ["", ne, Wt, Je], $ = () => ["solid", "dashed", "dotted", "double"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [ne, en, Mi, Ti], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    q,
    U
  ], X = () => ["none", ne, q, U], ce = () => ["none", ne, q, U], de = () => [ne, q, U], be = () => [ht, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Te],
      breakpoint: [Te],
      color: [Ac],
      container: [Te],
      "drop-shadow": [Te],
      ease: ["in", "out", "in-out"],
      font: [Tc],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Te],
      shadow: [Te],
      spacing: ["px", ne],
      text: [Te],
      "text-shadow": [Te],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ht, U, q, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ne, U, q, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Fe, "auto", q, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ht, "full", "auto", a, ...C()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ne, ht, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ne, q, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ne, q, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Fe, "first", "last", "none", q, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": M()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": M()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": C()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Wt, Je]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, q, tn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", en, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Rc, U, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, q, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ne, "none", q, tn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", q, U]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: W()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: W()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ne, "from-font", "auto", q, Je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: W()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ne, "auto", q, U]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q, U]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: k()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: v()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: O()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Fe, q, U],
          radial: ["", q, U],
          conic: [Fe, q, U]
        }, Bc, $c]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: W()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: b()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: W()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: W()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": W()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": W()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": W()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": W()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": W()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": W()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": W()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": W()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: W()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ne, q, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ne, Wt, Je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: W()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          lr,
          cr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: W()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, lr, cr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": W()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: W()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ne, Je]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": W()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": W()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, lr, cr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": W()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ne, q, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...B(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": W()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": W()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": W()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": W()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": W()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": W()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": W()
      }],
      "mask-image-radial": [{
        "mask-radial": [q, U]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": W()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: k()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: v()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: O()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", q, U]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: R()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ne, q, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ne, q, U]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          lr,
          cr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": W()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ne, q, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ne, q, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ne, q, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ne, q, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ne, q, U]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": R()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ne, q, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ne, q, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ne, q, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ne, q, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ne, q, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ne, q, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ne, q, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ne, q, U]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, U]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ne, "initial", q, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, q, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ne, q, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, q, U]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [m, q, U]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ce()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ce()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ce()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ce()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [q, U, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: be()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": be()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": be()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": be()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: W()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: W()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, U]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q, U]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...W()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ne, Wt, Je, tn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...W()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Kc = /* @__PURE__ */ Sc(Wc);
function fe(...e) {
  return Kc(Xs(e));
}
function Ir(e, t) {
  if (e) {
    const r = e.split(":");
    if (r.length >= 3 && r[0] && r[2] !== "443")
      return e;
  }
  return t;
}
const Gc = uc(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary/50",
        link: "underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[#8220ff] to-[#a020f0] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-300"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "w-10 h-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ze = x.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ c.jsx("button", { className: fe(Gc({ variant: t, size: r, className: e })), ref: i, ...n })
);
Ze.displayName = "Button";
const pe = ({ href: e, children: t, className: r = "", target: n = "_self", rel: i = "noopener noreferrer", onClick: s }) => {
  const o = (a) => {
    n !== "_blank" && (a.preventDefault(), window.location.href = e), s && s(a);
  };
  return /* @__PURE__ */ c.jsx(
    "a",
    {
      href: e,
      className: r,
      target: n,
      rel: i,
      onClick: o,
      "aria-label": typeof t == "string" ? t : void 0,
      children: t
    }
  );
}, Vc = (e, t, r, n) => {
  var s, o, a, u;
  const i = [r, {
    code: t,
    ...n || {}
  }];
  if ((o = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) != null && o.forward)
    return e.services.logger.forward(i, "warn", "react-i18next::", !0);
  et(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (u = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) != null && u.warn ? e.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, $i = {}, Cn = (e, t, r, n) => {
  et(r) && $i[r] || (et(r) && ($i[r] = /* @__PURE__ */ new Date()), Vc(e, t, r, n));
}, lo = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const r = () => {
      setTimeout(() => {
        e.off("initialized", r);
      }, 0), t();
    };
    e.on("initialized", r);
  }
}, En = (e, t, r) => {
  e.loadNamespaces(t, lo(e, r));
}, Ri = (e, t, r, n) => {
  if (et(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1) return En(e, r, n);
  r.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, lo(e, n));
}, Uc = (e, t, r = {}) => !t.languages || !t.languages.length ? (Cn(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(e, {
  lng: r.lng,
  precheck: (n, i) => {
    if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !i(n.isLanguageChangingTo, e)) return !1;
  }
}), et = (e) => typeof e == "string", qc = (e) => typeof e == "object" && e !== null, Yc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Jc = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Zc = (e) => Jc[e], Xc = (e) => e.replace(Yc, Zc);
let On = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Xc
};
const Qc = (e = {}) => {
  On = {
    ...On,
    ...e
  };
}, el = () => On;
let uo;
const tl = (e) => {
  uo = e;
}, rl = () => uo, nl = {
  type: "3rdParty",
  init(e) {
    Qc(e.options.react), tl(e);
  }
}, il = Qa();
class sl {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const ol = (e, t) => {
  const r = At();
  return _e(() => {
    r.current = e;
  }, [e, t]), r.current;
}, po = (e, t, r, n) => e.getFixedT(t, r, n), al = (e, t, r, n) => Sr(po(e, t, r, n), [e, t, r, n]), Fr = (e, t = {}) => {
  var w, S, z, E;
  const {
    i18n: r
  } = t, {
    i18n: n,
    defaultNS: i
  } = ec(il) || {}, s = r || n || rl();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new sl()), !s) {
    Cn(s, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const C = (A, V) => et(V) ? V : qc(V) && et(V.defaultValue) ? V.defaultValue : Array.isArray(A) ? A[A.length - 1] : A, T = [C, {}, !1];
    return T.t = C, T.i18n = {}, T.ready = !1, T;
  }
  (w = s.options.react) != null && w.wait && Cn(s, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...el(),
    ...s.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: u
  } = o;
  let l = i || ((S = s.options) == null ? void 0 : S.defaultNS);
  l = et(l) ? [l] : l || ["translation"], (E = (z = s.reportNamespaces).addUsedNamespaces) == null || E.call(z, l);
  const p = (s.isInitialized || s.initializedStoreOnce) && l.every((C) => Uc(C, s, o)), d = al(s, t.lng || null, o.nsMode === "fallback" ? l : l[0], u), g = () => d, f = () => po(s, t.lng || null, o.nsMode === "fallback" ? l : l[0], u), [h, m] = ye(g);
  let _ = l.join();
  t.lng && (_ = `${t.lng}${_}`);
  const j = ol(_), y = At(!0);
  _e(() => {
    const {
      bindI18n: C,
      bindI18nStore: T
    } = o;
    y.current = !0, !p && !a && (t.lng ? Ri(s, t.lng, l, () => {
      y.current && m(f);
    }) : En(s, l, () => {
      y.current && m(f);
    })), p && j && j !== _ && y.current && m(f);
    const A = () => {
      y.current && m(f);
    };
    return C && (s == null || s.on(C, A)), T && (s == null || s.store.on(T, A)), () => {
      y.current = !1, s && C && (C == null || C.split(" ").forEach((V) => s.off(V, A))), T && s && T.split(" ").forEach((V) => s.store.off(V, A));
    };
  }, [s, _]), _e(() => {
    y.current && p && m(g);
  }, [s, u, p]);
  const P = [h, s, p];
  if (P.t = h, P.i18n = s, P.ready = p, p || !p && !a) return P;
  throw new Promise((C) => {
    t.lng ? Ri(s, t.lng, l, () => C()) : En(s, l, () => C());
  });
}, te = (e) => typeof e == "string", Kt = () => {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}, Di = (e) => e == null ? "" : "" + e, cl = (e, t, r) => {
  e.forEach((n) => {
    t[n] && (r[n] = t[n]);
  });
}, ll = /###/g, Bi = (e) => e && e.indexOf("###") > -1 ? e.replace(ll, ".") : e, Fi = (e) => !e || te(e), qt = (e, t, r) => {
  const n = te(t) ? t.split(".") : t;
  let i = 0;
  for (; i < n.length - 1; ) {
    if (Fi(e)) return {};
    const s = Bi(n[i]);
    !e[s] && r && (e[s] = new r()), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {}, ++i;
  }
  return Fi(e) ? {} : {
    obj: e,
    k: Bi(n[i])
  };
}, Hi = (e, t, r) => {
  const {
    obj: n,
    k: i
  } = qt(e, t, Object);
  if (n !== void 0 || t.length === 1) {
    n[i] = r;
    return;
  }
  let s = t[t.length - 1], o = t.slice(0, t.length - 1), a = qt(e, o, Object);
  for (; a.obj === void 0 && o.length; )
    s = `${o[o.length - 1]}.${s}`, o = o.slice(0, o.length - 1), a = qt(e, o, Object), a != null && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = r;
}, ul = (e, t, r, n) => {
  const {
    obj: i,
    k: s
  } = qt(e, t, Object);
  i[s] = i[s] || [], i[s].push(r);
}, Ar = (e, t) => {
  const {
    obj: r,
    k: n
  } = qt(e, t);
  if (r && Object.prototype.hasOwnProperty.call(r, n))
    return r[n];
}, dl = (e, t, r) => {
  const n = Ar(e, r);
  return n !== void 0 ? n : Ar(t, r);
}, fo = (e, t, r) => {
  for (const n in t)
    n !== "__proto__" && n !== "constructor" && (n in e ? te(e[n]) || e[n] instanceof String || te(t[n]) || t[n] instanceof String ? r && (e[n] = t[n]) : fo(e[n], t[n], r) : e[n] = t[n]);
  return e;
}, gt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var pl = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const fl = (e) => te(e) ? e.replace(/[&<>"'\/]/g, (t) => pl[t]) : e;
class hl {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t);
    if (r !== void 0)
      return r;
    const n = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, n), this.regExpQueue.push(t), n;
  }
}
const gl = [" ", ",", "?", "!", ";"], ml = new hl(20), vl = (e, t, r) => {
  t = t || "", r = r || "";
  const n = gl.filter((o) => t.indexOf(o) < 0 && r.indexOf(o) < 0);
  if (n.length === 0) return !0;
  const i = ml.getRegExp(`(${n.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let s = !i.test(e);
  if (!s) {
    const o = e.indexOf(r);
    o > 0 && !i.test(e.substring(0, o)) && (s = !0);
  }
  return s;
}, In = (e, t, r = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const n = t.split(r);
  let i = e;
  for (let s = 0; s < n.length; ) {
    if (!i || typeof i != "object")
      return;
    let o, a = "";
    for (let u = s; u < n.length; ++u)
      if (u !== s && (a += r), a += n[u], o = i[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && u < n.length - 1)
          continue;
        s += u - s + 1;
        break;
      }
    i = o;
  }
  return i;
}, Xt = (e) => e == null ? void 0 : e.replace("_", "-"), yl = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    var r, n;
    (n = (r = console == null ? void 0 : console[e]) == null ? void 0 : r.apply) == null || n.call(r, console, t);
  }
};
class Nr {
  constructor(t, r = {}) {
    this.init(t, r);
  }
  init(t, r = {}) {
    this.prefix = r.prefix || "i18next:", this.logger = t || yl, this.options = r, this.debug = r.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, r, n, i) {
    return i && !this.debug ? null : (te(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new Nr(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Nr(this.logger, t);
  }
}
var Ae = new Nr();
class Hr {
  constructor() {
    this.observers = {};
  }
  on(t, r) {
    return t.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const i = this.observers[n].get(r) || 0;
      this.observers[n].set(r, i + 1);
    }), this;
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(r);
    }
  }
  emit(t, ...r) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([i, s]) => {
      for (let o = 0; o < s; o++)
        i(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, s]) => {
      for (let o = 0; o < s; o++)
        i.apply(i, [t, ...r]);
    });
  }
}
class Wi extends Hr {
  constructor(t, r = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(t, r, n, i = {}) {
    var l, p;
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, o = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, r], n && (Array.isArray(n) ? a.push(...n) : te(n) && s ? a.push(...n.split(s)) : a.push(n)));
    const u = Ar(this.data, a);
    return !u && !r && !n && t.indexOf(".") > -1 && (t = a[0], r = a[1], n = a.slice(2).join(".")), u || !o || !te(n) ? u : In((p = (l = this.data) == null ? void 0 : l[t]) == null ? void 0 : p[r], n, s);
  }
  addResource(t, r, n, i, s = {
    silent: !1
  }) {
    const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [t, r];
    n && (a = a.concat(o ? n.split(o) : n)), t.indexOf(".") > -1 && (a = t.split("."), i = r, r = a[1]), this.addNamespaces(r), Hi(this.data, a, i), s.silent || this.emit("added", t, r, n, i);
  }
  addResources(t, r, n, i = {
    silent: !1
  }) {
    for (const s in n)
      (te(n[s]) || Array.isArray(n[s])) && this.addResource(t, r, s, n[s], {
        silent: !0
      });
    i.silent || this.emit("added", t, r, n);
  }
  addResourceBundle(t, r, n, i, s, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [t, r];
    t.indexOf(".") > -1 && (a = t.split("."), i = n, n = r, r = a[1]), this.addNamespaces(r);
    let u = Ar(this.data, a) || {};
    o.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? fo(u, n, s) : u = {
      ...u,
      ...n
    }, Hi(this.data, a, u), o.silent || this.emit("added", t, r, n);
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r);
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0;
  }
  getResourceBundle(t, r) {
    return r || (r = this.options.defaultNS), this.getResource(t, r);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t);
    return !!(r && Object.keys(r) || []).find((i) => r[i] && Object.keys(r[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ho = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, r, n, i) {
    return e.forEach((s) => {
      var o;
      t = ((o = this.processors[s]) == null ? void 0 : o.process(t, r, n, i)) ?? t;
    }), t;
  }
};
const go = Symbol("i18next/PATH_KEY");
function xl() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let r;
  return t.get = (n, i) => {
    var s;
    return (s = r == null ? void 0 : r.revoke) == null || s.call(r), i === go ? e : (e.push(i), r = Proxy.revocable(n, t), r.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function An(e, t) {
  const {
    [go]: r
  } = e(xl());
  return r.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const Ki = {}, Gi = (e) => !te(e) && typeof e != "boolean" && typeof e != "number";
class zr extends Hr {
  constructor(t, r = {}) {
    super(), cl(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ae.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, r = {
    interpolation: {}
  }) {
    const n = {
      ...r
    };
    if (t == null) return !1;
    const i = this.resolve(t, n);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(t, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let s = r.ns || this.options.defaultNS || [];
    const o = n && t.indexOf(n) > -1, a = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !vl(t, n, i);
    if (o && !a) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: te(s) ? [s] : s
        };
      const l = t.split(n);
      (n !== i || n === i && this.options.ns.indexOf(l[0]) > -1) && (s = l.shift()), t = l.join(i);
    }
    return {
      key: t,
      namespaces: te(s) ? [s] : s
    };
  }
  translate(t, r, n) {
    let i = typeof r == "object" ? {
      ...r
    } : r;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), t == null) return "";
    typeof t == "function" && (t = An(t, {
      ...this.options,
      ...i
    })), Array.isArray(t) || (t = [String(t)]);
    const s = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: u
    } = this.extractFromKey(t[t.length - 1], i), l = u[u.length - 1];
    let p = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const d = i.lng || this.language, g = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return g ? s ? {
        res: `${l}${p}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(i)
      } : `${l}${p}${a}` : s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(i)
      } : a;
    const f = this.resolve(t, i);
    let h = f == null ? void 0 : f.res;
    const m = (f == null ? void 0 : f.usedKey) || a, _ = (f == null ? void 0 : f.exactUsedKey) || a, j = ["[object Number]", "[object Function]", "[object RegExp]"], y = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, w = i.count !== void 0 && !te(i.count), S = zr.hasDefaultValue(i), z = w ? this.pluralResolver.getSuffix(d, i.count, i) : "", E = i.ordinal && w ? this.pluralResolver.getSuffix(d, i.count, {
      ordinal: !1
    }) : "", C = w && !i.ordinal && i.count === 0, T = C && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${z}`] || i[`defaultValue${E}`] || i.defaultValue;
    let A = h;
    P && !h && S && (A = T);
    const V = Gi(A), J = Object.prototype.toString.apply(A);
    if (P && A && V && j.indexOf(J) < 0 && !(te(y) && Array.isArray(A))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, A, {
          ...i,
          ns: u
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (f.res = M, f.usedParams = this.getUsedParamsDetails(i), f) : M;
      }
      if (o) {
        const M = Array.isArray(A), H = M ? [] : {}, D = M ? _ : m;
        for (const Z in A)
          if (Object.prototype.hasOwnProperty.call(A, Z)) {
            const Y = `${D}${o}${Z}`;
            S && !h ? H[Z] = this.translate(Y, {
              ...i,
              defaultValue: Gi(T) ? T[Z] : void 0,
              joinArrays: !1,
              ns: u
            }) : H[Z] = this.translate(Y, {
              ...i,
              joinArrays: !1,
              ns: u
            }), H[Z] === Y && (H[Z] = A[Z]);
          }
        h = H;
      }
    } else if (P && te(y) && Array.isArray(h))
      h = h.join(y), h && (h = this.extendTranslation(h, t, i, n));
    else {
      let M = !1, H = !1;
      !this.isValidLookup(h) && S && (M = !0, h = T), this.isValidLookup(h) || (H = !0, h = a);
      const Z = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && H ? void 0 : h, Y = S && T !== h && this.options.updateMissing;
      if (H || M || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", d, l, a, Y ? T : h), o) {
          const O = this.resolve(a, {
            ...i,
            keySeparator: !1
          });
          O && O.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let W = [];
        const k = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && k && k[0])
          for (let O = 0; O < k.length; O++)
            W.push(k[O]);
        else this.options.saveMissingTo === "all" ? W = this.languageUtils.toResolveHierarchy(i.lng || this.language) : W.push(i.lng || this.language);
        const v = (O, b, I) => {
          var $;
          const L = S && I !== h ? I : Z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(O, l, b, L, Y, i) : ($ = this.backendConnector) != null && $.saveMissing && this.backendConnector.saveMissing(O, l, b, L, Y, i), this.emit("missingKey", O, l, b, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && w ? W.forEach((O) => {
          const b = this.pluralResolver.getSuffixes(O, i);
          C && i[`defaultValue${this.options.pluralSeparator}zero`] && b.indexOf(`${this.options.pluralSeparator}zero`) < 0 && b.push(`${this.options.pluralSeparator}zero`), b.forEach((I) => {
            v([O], a + I, i[`defaultValue${I}`] || T);
          });
        }) : v(W, a, T));
      }
      h = this.extendTranslation(h, t, i, f, n), H && h === a && this.options.appendNamespaceToMissingKey && (h = `${l}${p}${a}`), (H || M) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${p}${a}` : a, M ? h : void 0, i));
    }
    return s ? (f.res = h, f.usedParams = this.getUsedParamsDetails(i), f) : h;
  }
  extendTranslation(t, r, n, i, s) {
    var u, l;
    if ((u = this.i18nFormat) != null && u.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const p = te(t) && (((l = n == null ? void 0 : n.interpolation) == null ? void 0 : l.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (p) {
        const f = t.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let g = n.replace && !te(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), t = this.interpolator.interpolate(t, g, n.lng || this.language || i.usedLng, n), p) {
        const f = t.match(this.interpolator.nestingRegexp), h = f && f.length;
        d < h && (n.nest = !1);
      }
      !n.lng && i && i.res && (n.lng = this.language || i.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, (...f) => (s == null ? void 0 : s[0]) === f[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${r[0]}`), null) : this.translate(...f, r), n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, a = te(o) ? [o] : o;
    return t != null && (a != null && a.length) && n.applyPostProcessor !== !1 && (t = ho.handle(a, t, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), t;
  }
  resolve(t, r = {}) {
    let n, i, s, o, a;
    return te(t) && (t = [t]), t.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const l = this.extractFromKey(u, r), p = l.key;
      i = p;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const g = r.count !== void 0 && !te(r.count), f = g && !r.ordinal && r.count === 0, h = r.context !== void 0 && (te(r.context) || typeof r.context == "number") && r.context !== "", m = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      d.forEach((_) => {
        var j, y;
        this.isValidLookup(n) || (a = _, !Ki[`${m[0]}-${_}`] && ((j = this.utils) != null && j.hasLoadedNamespace) && !((y = this.utils) != null && y.hasLoadedNamespace(a)) && (Ki[`${m[0]}-${_}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((P) => {
          var z;
          if (this.isValidLookup(n)) return;
          o = P;
          const w = [p];
          if ((z = this.i18nFormat) != null && z.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, p, P, _, r);
          else {
            let E;
            g && (E = this.pluralResolver.getSuffix(P, r.count, r));
            const C = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (r.ordinal && E.indexOf(T) === 0 && w.push(p + E.replace(T, this.options.pluralSeparator)), w.push(p + E), f && w.push(p + C)), h) {
              const A = `${p}${this.options.contextSeparator || "_"}${r.context}`;
              w.push(A), g && (r.ordinal && E.indexOf(T) === 0 && w.push(A + E.replace(T, this.options.pluralSeparator)), w.push(A + E), f && w.push(A + C));
            }
          }
          let S;
          for (; S = w.pop(); )
            this.isValidLookup(n) || (s = S, n = this.getResource(P, _, S, r));
        }));
      });
    }), {
      res: n,
      usedKey: i,
      exactUsedKey: s,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, r, n, i = {}) {
    var s;
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(t, r, n, i) : this.resourceStore.getResource(t, r, n, i);
  }
  getUsedParamsDetails(t = {}) {
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = t.replace && !te(t.replace);
    let i = n ? t.replace : t;
    if (n && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !n) {
      i = {
        ...i
      };
      for (const s of r)
        delete i[s];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const r = "defaultValue";
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && r === n.substring(0, r.length) && t[n] !== void 0)
        return !0;
    return !1;
  }
}
class Vi {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ae.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Xt(t), !t || t.indexOf("-") < 0) return null;
    const r = t.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Xt(t), !t || t.indexOf("-") < 0) return t;
    const r = t.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (te(t) && t.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let r;
    return t.forEach((n) => {
      if (r) return;
      const i = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (r = i);
    }), !r && this.options.supportedLngs && t.forEach((n) => {
      if (r) return;
      const i = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(i)) return r = i;
      const s = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(s)) return r = s;
      r = this.options.supportedLngs.find((o) => {
        if (o === s) return o;
        if (!(o.indexOf("-") < 0 && s.indexOf("-") < 0) && (o.indexOf("-") > 0 && s.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === s || o.indexOf(s) === 0 && s.length > 1))
          return o;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(r)), te(t) && (t = [t]), Array.isArray(t)) return t;
    if (!r) return t.default || [];
    let n = t[r];
    return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || [];
  }
  toResolveHierarchy(t, r) {
    const n = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], t), i = [], s = (o) => {
      o && (this.isSupportedCode(o) ? i.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return te(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : te(t) && s(this.formatLanguageCode(t)), n.forEach((o) => {
      i.indexOf(o) < 0 && s(this.formatLanguageCode(o));
    }), i;
  }
}
const Ui = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, qi = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class bl {
  constructor(t, r = {}) {
    this.languageUtils = t, this.options = r, this.logger = Ae.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, r) {
    this.rules[t] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, r = {}) {
    const n = Xt(t === "dev" ? "en" : t), i = r.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: n,
      type: i
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let o;
    try {
      o = new Intl.PluralRules(n, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), qi;
      if (!t.match(/-|_/)) return qi;
      const u = this.languageUtils.getLanguagePartFromCode(t);
      o = this.getRule(u, r);
    }
    return this.pluralRulesCache[s] = o, o;
  }
  needsPlural(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, r, n = {}) {
    return this.getSuffixes(t, n).map((i) => `${r}${i}`);
  }
  getSuffixes(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), n ? n.resolvedOptions().pluralCategories.sort((i, s) => Ui[i] - Ui[s]).map((i) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(t, r, n = {}) {
    const i = this.getRule(t, n);
    return i ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(r)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", r, n));
  }
}
const Yi = (e, t, r, n = ".", i = !0) => {
  let s = dl(e, t, r);
  return !s && i && te(r) && (s = In(e, r, n), s === void 0 && (s = In(t, r, n))), s;
}, rn = (e) => e.replace(/\$/g, "$$$$");
class _l {
  constructor(t = {}) {
    var r;
    this.logger = Ae.create("interpolator"), this.options = t, this.format = ((r = t == null ? void 0 : t.interpolation) == null ? void 0 : r.format) || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: i,
      prefix: s,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: l,
      unescapeSuffix: p,
      unescapePrefix: d,
      nestingPrefix: g,
      nestingPrefixEscaped: f,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: _,
      maxReplaces: j,
      alwaysFormat: y
    } = t.interpolation;
    this.escape = r !== void 0 ? r : fl, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = s ? gt(s) : o || "{{", this.suffix = a ? gt(a) : u || "}}", this.formatSeparator = l || ",", this.unescapePrefix = p ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = g ? gt(g) : f || gt("$t("), this.nestingSuffix = h ? gt(h) : m || gt(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = j || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (r, n) => (r == null ? void 0 : r.source) === n ? (r.lastIndex = 0, r) : new RegExp(n, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, r, n, i) {
    var f;
    let s, o, a;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const y = Yi(r, u, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, n, {
          ...i,
          ...r,
          interpolationkey: h
        }) : y;
      }
      const m = h.split(this.formatSeparator), _ = m.shift().trim(), j = m.join(this.formatSeparator).trim();
      return this.format(Yi(r, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), j, n, {
        ...i,
        ...r,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const p = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((f = i == null ? void 0 : i.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => rn(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? rn(this.escape(h)) : rn(h)
    }].forEach((h) => {
      for (a = 0; s = h.regex.exec(t); ) {
        const m = s[1].trim();
        if (o = l(m), o === void 0)
          if (typeof p == "function") {
            const j = p(t, s, i);
            o = te(j) ? j : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, m))
            o = "";
          else if (d) {
            o = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${t}`), o = "";
        else !te(o) && !this.useRawValueToEscape && (o = Di(o));
        const _ = h.safeValue(o);
        if (t = t.replace(s[0], _), d ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= s[0].length) : h.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, r, n = {}) {
    let i, s, o;
    const a = (u, l) => {
      const p = this.nestingOptionsSeparator;
      if (u.indexOf(p) < 0) return u;
      const d = u.split(new RegExp(`${p}[ ]*{`));
      let g = `{${d[1]}`;
      u = d[0], g = this.interpolate(g, o);
      const f = g.match(/'/g), h = g.match(/"/g);
      (((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        o = JSON.parse(g), l && (o = {
          ...l,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, m), `${u}${p}${g}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, u;
    };
    for (; i = this.nestingRegexp.exec(t); ) {
      let u = [];
      o = {
        ...n
      }, o = o.replace && !te(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const l = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (l !== -1 && (u = i[1].slice(l).split(this.formatSeparator).map((p) => p.trim()).filter(Boolean), i[1] = i[1].slice(0, l)), s = r(a.call(this, i[1].trim(), o), o), s && i[0] === t && !te(s)) return s;
      te(s) || (s = Di(s)), s || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), s = ""), u.length && (s = u.reduce((p, d) => this.format(p, d, n.lng, {
        ...n,
        interpolationkey: i[1].trim()
      }), s.trim())), t = t.replace(i[0], s), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const wl = (e) => {
  let t = e.toLowerCase().trim();
  const r = {};
  if (e.indexOf("(") > -1) {
    const n = e.split("(");
    t = n[0].toLowerCase().trim();
    const i = n[1].substring(0, n[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? r.currency || (r.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? r.range || (r.range = i.trim()) : i.split(";").forEach((o) => {
      if (o) {
        const [a, ...u] = o.split(":"), l = u.join(":").trim().replace(/^'+|'+$/g, ""), p = a.trim();
        r[p] || (r[p] = l), l === "false" && (r[p] = !1), l === "true" && (r[p] = !0), isNaN(l) || (r[p] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: r
  };
}, Ji = (e) => {
  const t = {};
  return (r, n, i) => {
    let s = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (s = {
      ...s,
      [i.interpolationkey]: void 0
    });
    const o = n + JSON.stringify(s);
    let a = t[o];
    return a || (a = e(Xt(n), i), t[o] = a), a(r);
  };
}, kl = (e) => (t, r, n) => e(Xt(r), n)(t);
class Sl {
  constructor(t = {}) {
    this.logger = Ae.create("formatter"), this.options = t, this.init(t);
  }
  init(t, r = {
    interpolation: {}
  }) {
    this.formatSeparator = r.interpolation.formatSeparator || ",";
    const n = r.cacheInBuiltFormats ? Ji : kl;
    this.formats = {
      number: n((i, s) => {
        const o = new Intl.NumberFormat(i, {
          ...s
        });
        return (a) => o.format(a);
      }),
      currency: n((i, s) => {
        const o = new Intl.NumberFormat(i, {
          ...s,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: n((i, s) => {
        const o = new Intl.DateTimeFormat(i, {
          ...s
        });
        return (a) => o.format(a);
      }),
      relativetime: n((i, s) => {
        const o = new Intl.RelativeTimeFormat(i, {
          ...s
        });
        return (a) => o.format(a, s.range || "day");
      }),
      list: n((i, s) => {
        const o = new Intl.ListFormat(i, {
          ...s
        });
        return (a) => o.format(a);
      })
    };
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = Ji(r);
  }
  format(t, r, n, i = {}) {
    const s = r.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((a) => a.indexOf(")") > -1)) {
      const a = s.findIndex((u) => u.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator);
    }
    return s.reduce((a, u) => {
      var d;
      const {
        formatName: l,
        formatOptions: p
      } = wl(u);
      if (this.formats[l]) {
        let g = a;
        try {
          const f = ((d = i == null ? void 0 : i.formatParams) == null ? void 0 : d[i.interpolationkey]) || {}, h = f.locale || f.lng || i.locale || i.lng || n;
          g = this.formats[l](a, h, {
            ...p,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, t);
  }
}
const Pl = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class jl extends Hr {
  constructor(t, r, n, i = {}) {
    var s, o;
    super(), this.backend = t, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = Ae.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (o = (s = this.backend) == null ? void 0 : s.init) == null || o.call(s, n, i.backend, i);
  }
  queueLoad(t, r, n, i) {
    const s = {}, o = {}, a = {}, u = {};
    return t.forEach((l) => {
      let p = !0;
      r.forEach((d) => {
        const g = `${l}|${d}`;
        !n.reload && this.store.hasResourceBundle(l, d) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? o[g] === void 0 && (o[g] = !0) : (this.state[g] = 1, p = !1, o[g] === void 0 && (o[g] = !0), s[g] === void 0 && (s[g] = !0), u[d] === void 0 && (u[d] = !0)));
      }), p || (a[l] = !0);
    }), (Object.keys(s).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(t, r, n) {
    const i = t.split("|"), s = i[0], o = i[1];
    r && this.emit("failedLoading", s, o, r), !r && n && this.store.addResourceBundle(s, o, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = r ? -1 : 2, r && n && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((u) => {
      ul(u.loaded, [s], o), Pl(u, t), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const p = u.loaded[l];
        p.length && p.forEach((d) => {
          a[l][d] === void 0 && (a[l][d] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((u) => !u.done);
  }
  read(t, r, n, i = 0, s = this.retryTimeout, o) {
    if (!t.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: r,
        fcName: n,
        tried: i,
        wait: s,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (l, p) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (l && p && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, r, n, i + 1, s * 2, o);
        }, s);
        return;
      }
      o(l, p);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const l = u(t, r);
        l && typeof l.then == "function" ? l.then((p) => a(null, p)).catch(a) : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return u(t, r, a);
  }
  prepareLoading(t, r, n = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    te(t) && (t = this.languageUtils.toResolveHierarchy(t)), te(r) && (r = [r]);
    const s = this.queueLoad(t, r, n, i);
    if (!s.toLoad.length)
      return s.pending.length || i(), null;
    s.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(t, r, n) {
    this.prepareLoading(t, r, {}, n);
  }
  reload(t, r, n) {
    this.prepareLoading(t, r, {
      reload: !0
    }, n);
  }
  loadOne(t, r = "") {
    const n = t.split("|"), i = n[0], s = n[1];
    this.read(i, s, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${r}loading namespace ${s} for language ${i} failed`, o), !o && a && this.logger.log(`${r}loaded namespace ${s} for language ${i}`, a), this.loaded(t, o, a);
    });
  }
  saveMissing(t, r, n, i, s, o = {}, a = () => {
  }) {
    var u, l, p, d, g;
    if ((l = (u = this.services) == null ? void 0 : u.utils) != null && l.hasLoadedNamespace && !((d = (p = this.services) == null ? void 0 : p.utils) != null && d.hasLoadedNamespace(r))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((g = this.backend) != null && g.create) {
        const f = {
          ...o,
          isUpdate: s
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let m;
            h.length === 5 ? m = h(t, r, n, i, f) : m = h(t, r, n, i), m && typeof m.then == "function" ? m.then((_) => a(null, _)).catch(a) : a(null, m);
          } catch (m) {
            a(m);
          }
        else
          h(t, r, n, i, a, f);
      }
      !t || !t[0] || this.store.addResource(t[0], r, n, i);
    }
  }
}
const Zi = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), te(e[1]) && (t.defaultValue = e[1]), te(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const r = e[3] || e[2];
      Object.keys(r).forEach((n) => {
        t[n] = r[n];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Xi = (e) => {
  var t, r;
  return te(e.ns) && (e.ns = [e.ns]), te(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), te(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), ((r = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : r.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e;
}, ur = () => {
}, Cl = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((r) => {
    typeof e[r] == "function" && (e[r] = e[r].bind(e));
  });
};
class Qt extends Hr {
  constructor(t = {}, r) {
    if (super(), this.options = Xi(t), this.services = {}, this.logger = Ae, this.modules = {
      external: []
    }, Cl(this), r && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, r), this;
      setTimeout(() => {
        this.init(t, r);
      }, 0);
    }
  }
  init(t = {}, r) {
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (te(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = Zi();
    this.options = {
      ...n,
      ...this.options,
      ...Xi(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (l) => l ? typeof l == "function" ? new l() : l : null;
    if (!this.options.isClone) {
      this.modules.logger ? Ae.init(i(this.modules.logger), this.options) : Ae.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : l = Sl;
      const p = new Vi(this.options);
      this.store = new Wi(this.options.resources, this.options);
      const d = this.services;
      d.logger = Ae, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new bl(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), l && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (d.formatter = i(l), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new _l(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new jl(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new zr(this.services, this.options), this.translator.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ur), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = (...p) => this.store[l](...p);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = (...p) => (this.store[l](...p), this);
    });
    const a = Kt(), u = () => {
      const l = (p, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), r(p, d);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), a;
  }
  loadResources(t, r = ur) {
    var s, o;
    let n = r;
    const i = te(t) ? t : this.language;
    if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const a = [], u = (l) => {
        if (!l || l === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((d) => {
          d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
        });
      };
      i ? u(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => u(p)), (o = (s = this.options.preload) == null ? void 0 : s.forEach) == null || o.call(s, (l) => u(l)), this.services.backendConnector.load(a, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(l);
      });
    } else
      n(null);
  }
  reloadResources(t, r, n) {
    const i = Kt();
    return typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = void 0), t || (t = this.languages), r || (r = this.options.ns), n || (n = ur), this.services.backendConnector.reload(t, r, (s) => {
      i.resolve(), n(s);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && ho.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, r) {
    this.isLanguageChangingTo = t;
    const n = Kt();
    this.emit("languageChanging", t);
    const i = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, u) => {
      u ? this.isLanguageChangingTo === t && (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, n.resolve((...l) => this.t(...l)), r && r(a, (...l) => this.t(...l));
    }, o = (a) => {
      var p, d;
      !t && !a && this.services.languageDetector && (a = []);
      const u = te(a) ? a : a && a[0], l = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(te(a) ? [a] : a);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), (d = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || d.call(p, l)), this.loadResources(l, (g) => {
        s(g, l);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), n;
  }
  getFixedT(t, r, n) {
    const i = (s, o, ...a) => {
      let u;
      typeof o != "object" ? u = this.options.overloadTranslationOptionHandler([s, o].concat(a)) : u = {
        ...o
      }, u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || i.keyPrefix);
      const l = this.options.keySeparator || ".";
      let p;
      return u.keyPrefix && Array.isArray(s) ? p = s.map((d) => (typeof d == "function" && (d = An(d, {
        ...this.options,
        ...o
      })), `${u.keyPrefix}${l}${d}`)) : (typeof s == "function" && (s = An(s, {
        ...this.options,
        ...o
      })), p = u.keyPrefix ? `${u.keyPrefix}${l}${s}` : s), this.t(p, u);
    };
    return te(t) ? i.lng = t : i.lngs = t, i.ns = r, i.keyPrefix = n, i;
  }
  t(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...t);
  }
  exists(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, r = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = r.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const o = (a, u) => {
      const l = this.services.backendConnector.state[`${a}|${u}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (r.precheck) {
      const a = r.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, t) && (!i || o(s, t)));
  }
  loadNamespaces(t, r) {
    const n = Kt();
    return this.options.ns ? (te(t) && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      n.resolve(), r && r(i);
    }), n) : (r && r(), Promise.resolve());
  }
  loadLanguages(t, r) {
    const n = Kt();
    te(t) && (t = [t]);
    const i = this.options.preload || [], s = t.filter((o) => i.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return s.length ? (this.options.preload = i.concat(s), this.loadResources((o) => {
      n.resolve(), r && r(o);
    }), n) : (r && r(), Promise.resolve());
  }
  dir(t) {
    var i, s;
    if (t || (t = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const o = new Intl.Locale(t);
      if (o && o.getTextInfo) {
        const a = o.getTextInfo();
        if (a && a.direction) return a.direction;
      }
    } catch {
    }
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((s = this.services) == null ? void 0 : s.languageUtils) || new Vi(Zi());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, r) {
    return new Qt(t, r);
  }
  cloneInstance(t = {}, r = ur) {
    const n = t.forkResourceStore;
    n && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, s = new Qt(i);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (s.logger = s.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, n) {
      const a = Object.keys(this.store.data).reduce((u, l) => (u[l] = {
        ...this.store.data[l]
      }, u[l] = Object.keys(u[l]).reduce((p, d) => (p[d] = {
        ...u[l][d]
      }, p), u[l]), u), {});
      s.store = new Wi(a, i), s.services.resourceStore = s.store;
    }
    return s.translator = new zr(s.services, i), s.translator.on("*", (a, ...u) => {
      s.emit(a, ...u);
    }), s.init(i, r), s.translator.options = i, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const me = Qt.createInstance();
me.createInstance = Qt.createInstance;
me.createInstance;
me.dir;
me.init;
me.loadResources;
me.reloadResources;
me.use;
me.changeLanguage;
me.getFixedT;
me.t;
me.exists;
me.setDefaultNamespace;
me.hasLoadedNamespace;
me.loadNamespaces;
me.loadLanguages;
var Gn = {
  footer: {
    policies: {
      legal_notice: "إشعار قانوني",
      management_policy: "سياسة الإدارة",
      privacy_policy: "سياسة الخصوصية"
    },
    readiness: "جاهزية SOC2 النوع الثاني",
    sections: {
      company: {
        links: {
          about_us: "من نحن",
          careers: "وظائف",
          contact: "تواصل",
          privacy_policy: "سياسة الخصوصية"
        },
        title: "الشركة"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "الفوائد",
          ciem: "CIEM",
          container_security: "أمان الحاويات",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "نظرة عامة على المنصة",
          pricing: "التسعير",
          use_cases: "حالات الاستخدام"
        },
        title: "المنتجات"
      },
      resources: {
        links: {
          blog: "مدونة",
          case_studies: "دراسات الحالة",
          documentation: "الوثائق",
          security_resources: "موارد الأمان"
        },
        title: "الموارد"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "إنستغرام",
      linkedin: "لينكد إن",
      twitter: "تويتر"
    },
    tagline: "ارتقِ باستراتيجية الأمن السيبراني الخاصة بك مع Plexicus"
  },
  nav: {
    contact: "تواصل",
    developers: {
      api_references: "مراجع API",
      api_references_desc: "وثائق API شاملة",
      documentation: "الوثائق",
      documentation_desc: "أدلة فنية ومراجع",
      github_apps: "تطبيقات GitHub",
      github_apps_desc: "دمج Plexicus مع مستودعاتك",
      plexalyzer_action: "إجراء Plexalyzer",
      plexalyzer_action_desc: "أتمتة الأمان في خط أنابيب CI/CD الخاص بك",
      title: "المطورون"
    },
    get_started: "ابدأ الآن",
    languages: "اللغات",
    login: "تسجيل الدخول",
    pricing: "التسعير",
    product: {
      aspm: "ASPM",
      aspm_desc: "إدارة وضع أمان التطبيقات",
      benefits: "الفوائد",
      benefits_desc: "شاهد كيف يحول Plexicus الأمان",
      ciem: "CIEM",
      ciem_desc: "إدارة استحقاقات البنية التحتية السحابية",
      container_security: "أمان الحاويات",
      container_security_desc: "أمان الحاويات وKubernetes",
      cspm: "CSPM",
      cspm_desc: "إدارة وضع أمان السحابة",
      cwpp: "CWPP",
      cwpp_desc: "منصة حماية عبء العمل السحابي",
      explore: "استكشاف منتجنا",
      platform_overview: "نظرة عامة على المنصة",
      platform_overview_desc: "منصة CNAPP موحدة",
      title: "المنتج",
      use_cases: "حالات الاستخدام",
      use_cases_desc: "أمثلة على التنفيذ في العالم الحقيقي"
    },
    resources: {
      blog: "مدونة",
      blog_desc: "آخر الأخبار ورؤى الأمان",
      branding_assets: "أصول العلامة التجارية",
      branding_assets_desc: "الشعارات وإرشادات العلامة التجارية",
      changelogs: "سجلات التغيير",
      changelogs_desc: "آخر تحديثات المنتج",
      comparison_overview: "نظرة عامة على المقارنة",
      comparison_overview_desc: "شاهد كيف يقارن Plexicus بأدوات الأمان الأخرى",
      explore: "استكشاف مواردنا",
      feature_requests: "طلبات الميزات",
      feature_requests_desc: "تقديم والتصويت على ميزات جديدة",
      integrations: "التكاملات",
      integrations_desc: "ربط أدواتك ومنصاتك",
      support: "الدعم",
      support_desc: "يوفر Plexicus دعمًا شاملاً لمساعدتك في الاستفادة القصوى من منصتنا.",
      title: "الموارد",
      youtube_channel: "قناة يوتيوب",
      youtube_channel_desc: "دروس فيديو وندوات عبر الإنترنت"
    },
    solutions: {
      agencies: "الوكالات",
      agencies_desc: "الأمان للوكالات الرقمية والتسويقية",
      enterprise: "المؤسسات",
      enterprise_desc: "أمان شامل للمؤسسات الكبيرة",
      explore: "استكشاف حلولنا",
      fintech: "التكنولوجيا المالية",
      fintech_desc: "حلول الأمان للتكنولوجيا المالية",
      government: "الحكومة",
      government_desc: "حلول الأمان للوكالات الحكومية",
      group_companies: "الشركات الجماعية",
      group_companies_desc: "حلول للمجموعات والشركات القابضة",
      healthtech: "التكنولوجيا الصحية",
      healthtech_desc: "حلول أمان متوافقة مع HIPAA",
      hrtech: "تكنولوجيا الموارد البشرية",
      hrtech_desc: "الأمان لتكنولوجيا الموارد البشرية",
      legal_desc: "الأمان للشركات القانونية",
      legaltech: "التكنولوجيا القانونية",
      manufacturing: "التصنيع",
      manufacturing_desc: "الأمان للأنظمة الصناعية وإنترنت الأشياء",
      mobile_apps: "تطبيقات الجوال",
      mobile_apps_desc: "الأمان لتطبيقات iOS وAndroid",
      retailtech: "تكنولوجيا البيع بالتجزئة",
      retailtech_desc: "الأمان لمنصات التجارة الإلكترونية والبيع بالتجزئة",
      startups: "الشركات الناشئة",
      startups_desc: "أمان قابل للتوسع للشركات الناشئة",
      title: "الحلول"
    }
  }
}, El = Gn.footer, Ol = Gn.nav;
const Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gn,
  footer: El,
  nav: Ol
}, Symbol.toStringTag, { value: "Module" }));
var Vn = {
  footer: {
    policies: {
      legal_notice: "Právní oznámení",
      management_policy: "Politika řízení",
      privacy_policy: "Zásady ochrany osobních údajů"
    },
    readiness: "SOC2 Typ II Připravenost",
    sections: {
      company: {
        links: {
          about_us: "O nás",
          careers: "Kariéra",
          contact: "Kontakt",
          privacy_policy: "Zásady ochrany osobních údajů"
        },
        title: "Společnost"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Výhody",
          ciem: "CIEM",
          container_security: "Bezpečnost kontejnerů",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Přehled platformy",
          pricing: "Ceny",
          use_cases: "Případy použití"
        },
        title: "Produkty"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Případové studie",
          documentation: "Dokumentace",
          security_resources: "Bezpečnostní zdroje"
        },
        title: "Zdroje"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Zvyšte svou strategii kybernetické bezpečnosti s Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API Reference",
      api_references_desc: "Komplexní dokumentace API",
      documentation: "Dokumentace",
      documentation_desc: "Technické příručky a reference",
      github_apps: "GitHub Aplikace",
      github_apps_desc: "Integrujte Plexicus s vašimi repozitáři",
      plexalyzer_action: "Plexalyzer Akce",
      plexalyzer_action_desc: "Automatizujte bezpečnost ve vašem CI/CD pipeline",
      title: "Vývojáři"
    },
    get_started: "Začít",
    languages: "Jazyky",
    login: "Přihlásit se",
    pricing: "Ceny",
    product: {
      aspm: "ASPM",
      aspm_desc: "Řízení bezpečnostního postoje aplikací",
      benefits: "Výhody",
      benefits_desc: "Podívejte se, jak Plexicus transformuje bezpečnost",
      ciem: "CIEM",
      ciem_desc: "Řízení oprávnění cloudové infrastruktury",
      container_security: "Bezpečnost kontejnerů",
      container_security_desc: "Bezpečnost kontejnerů a Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Řízení bezpečnostního postoje cloudu",
      cwpp: "CWPP",
      cwpp_desc: "Platforma ochrany cloudových pracovních zátěží",
      explore: "Prozkoumejte náš produkt",
      platform_overview: "Přehled platformy",
      platform_overview_desc: "Jednotná CNAPP platforma",
      title: "Produkt",
      use_cases: "Případy použití",
      use_cases_desc: "Příklady implementace v reálném světě"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Nejnovější zprávy a bezpečnostní poznatky",
      branding_assets: "Brandingové materiály",
      branding_assets_desc: "Loga a pokyny k značce",
      changelogs: "Změny",
      changelogs_desc: "Nejnovější aktualizace produktů",
      comparison_overview: "Přehled srovnání",
      comparison_overview_desc: "Podívejte se, jak Plexicus srovnává s jinými bezpečnostními nástroji",
      explore: "Prozkoumejte naše zdroje",
      feature_requests: "Požadavky na funkce",
      feature_requests_desc: "Podávejte a hlasujte o nových funkcích",
      integrations: "Integrace",
      integrations_desc: "Připojte své nástroje a platformy",
      support: "Podpora",
      support_desc: "Plexicus poskytuje komplexní podporu, aby vám pomohl co nejlépe využít naši platformu.",
      title: "Zdroje",
      youtube_channel: "YouTube Kanál",
      youtube_channel_desc: "Video tutoriály a webináře"
    },
    solutions: {
      agencies: "Agentury",
      agencies_desc: "Bezpečnost pro digitální a marketingové agentury",
      enterprise: "Podnik",
      enterprise_desc: "Komplexní bezpečnost pro velké organizace",
      explore: "Prozkoumejte naše řešení",
      fintech: "FinTech",
      fintech_desc: "Bezpečnostní řešení pro finanční technologie",
      government: "Vláda",
      government_desc: "Bezpečnostní řešení pro vládní agentury",
      group_companies: "Skupinové společnosti",
      group_companies_desc: "Řešení pro korporátní skupiny a holdingy",
      healthtech: "HealthTech",
      healthtech_desc: "Bezpečnostní řešení v souladu s HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Bezpečnost pro technologie lidských zdrojů",
      legal_desc: "Bezpečnost pro právní společnosti",
      legaltech: "LegalTech",
      manufacturing: "Výroba",
      manufacturing_desc: "Bezpečnost pro průmyslové a IoT systémy",
      mobile_apps: "Mobilní aplikace",
      mobile_apps_desc: "Bezpečnost pro iOS a Android aplikace",
      retailtech: "RetailTech",
      retailtech_desc: "Bezpečnost pro e-commerce a maloobchodní platformy",
      startups: "Startupy",
      startups_desc: "Škálovatelná bezpečnost pro rostoucí společnosti",
      title: "Řešení"
    }
  }
}, Al = Vn.footer, Nl = Vn.nav;
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn,
  footer: Al,
  nav: Nl
}, Symbol.toStringTag, { value: "Module" }));
var Un = {
  footer: {
    policies: {
      legal_notice: "Juridisk meddelelse",
      management_policy: "Ledelsespolitik",
      privacy_policy: "Privatlivspolitik"
    },
    readiness: "SOC2 Type II Parathed",
    sections: {
      company: {
        links: {
          about_us: "Om os",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Privatlivspolitik"
        },
        title: "Virksomhed"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fordele",
          ciem: "CIEM",
          container_security: "Containersikkerhed",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platformoversigt",
          pricing: "Prissætning",
          use_cases: "Anvendelsestilfælde"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Case-studier",
          documentation: "Dokumentation",
          security_resources: "Sikkerhedsressourcer"
        },
        title: "Ressourcer"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Forbedr din cybersikkerhedsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-referencer",
      api_references_desc: "Omfattende API-dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Tekniske guider og referencer",
      github_apps: "GitHub-apps",
      github_apps_desc: "Integrer Plexicus med dine repositories",
      plexalyzer_action: "Plexalyzer-handling",
      plexalyzer_action_desc: "Automatiser sikkerhed i din CI/CD-pipeline",
      title: "Udviklere"
    },
    get_started: "Kom i gang",
    languages: "Sprog",
    login: "Log ind",
    pricing: "Prissætning",
    product: {
      aspm: "ASPM",
      aspm_desc: "Applikationssikkerhedsstyring",
      benefits: "Fordele",
      benefits_desc: "Se hvordan Plexicus transformerer sikkerhed",
      ciem: "CIEM",
      ciem_desc: "Cloud Infrastructure Entitlement Management",
      container_security: "Containersikkerhed",
      container_security_desc: "Container- og Kubernetes-sikkerhed",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform",
      explore: "Udforsk vores produkt",
      platform_overview: "Platformoversigt",
      platform_overview_desc: "Enhedlig CNAPP-platform",
      title: "Produkt",
      use_cases: "Anvendelsestilfælde",
      use_cases_desc: "Eksempler på implementering i den virkelige verden"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Seneste nyheder og sikkerhedsindsigter",
      branding_assets: "Branding-aktiver",
      branding_assets_desc: "Logoer og brandretningslinjer",
      changelogs: "Ændringslog",
      changelogs_desc: "Seneste produktopdateringer",
      comparison_overview: "Sammenligningsoversigt",
      comparison_overview_desc: "Se hvordan Plexicus sammenlignes med andre sikkerhedsværktøjer",
      explore: "Udforsk vores ressourcer",
      feature_requests: "Funktionsanmodninger",
      feature_requests_desc: "Indsend og stem på nye funktioner",
      integrations: "Integrationer",
      integrations_desc: "Forbind dine værktøjer og platforme",
      support: "Support",
      support_desc: "Plexicus tilbyder omfattende support for at hjælpe dig med at få mest muligt ud af vores platform.",
      title: "Ressourcer",
      youtube_channel: "YouTube-kanal",
      youtube_channel_desc: "Videotutorials og webinarer"
    },
    solutions: {
      agencies: "Agenturer",
      agencies_desc: "Sikkerhed for digitale og marketingbureauer",
      enterprise: "Enterprise",
      enterprise_desc: "Omfattende sikkerhed for store organisationer",
      explore: "Udforsk vores løsninger",
      fintech: "FinTech",
      fintech_desc: "Sikkerhedsløsninger for finansiel teknologi",
      government: "Regering",
      government_desc: "Sikkerhedsløsninger for offentlige myndigheder",
      group_companies: "Koncernselskaber",
      group_companies_desc: "Løsninger for koncerner og holdingselskaber",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatible sikkerhedsløsninger",
      hrtech: "HRTech",
      hrtech_desc: "Sikkerhed for HR-teknologi",
      legal_desc: "Sikkerhed for juridiske virksomheder",
      legaltech: "LegalTech",
      manufacturing: "Produktion",
      manufacturing_desc: "Sikkerhed for industrielle og IoT-systemer",
      mobile_apps: "Mobilapps",
      mobile_apps_desc: "Sikkerhed for iOS- og Android-applikationer",
      retailtech: "RetailTech",
      retailtech_desc: "Sikkerhed for e-handel og detailplatforme",
      startups: "Startups",
      startups_desc: "Skalerbar sikkerhed for voksende virksomheder",
      title: "Løsninger"
    }
  }
}, Ll = Un.footer, Tl = Un.nav;
const Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un,
  footer: Ll,
  nav: Tl
}, Symbol.toStringTag, { value: "Module" }));
var qn = {
  footer: {
    policies: {
      legal_notice: "Impressum",
      management_policy: "Managementrichtlinie",
      privacy_policy: "Datenschutzrichtlinie"
    },
    readiness: "SOC2 Typ II Bereitschaft",
    sections: {
      company: {
        links: {
          about_us: "Über uns",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Datenschutzrichtlinie"
        },
        title: "Unternehmen"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Vorteile",
          ciem: "CIEM",
          container_security: "Containersicherheit",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformübersicht",
          pricing: "Preisgestaltung",
          use_cases: "Anwendungsfälle"
        },
        title: "Produkte"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Fallstudien",
          documentation: "Dokumentation",
          security_resources: "Sicherheitsressourcen"
        },
        title: "Ressourcen"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Erhöhen Sie Ihre Cybersicherheitsstrategie mit Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-Referenzen",
      api_references_desc: "Umfassende API-Dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Technische Anleitungen und Referenzen",
      github_apps: "GitHub-Apps",
      github_apps_desc: "Integrieren Sie Plexicus in Ihre Repositories",
      plexalyzer_action: "Plexalyzer-Aktion",
      plexalyzer_action_desc: "Automatisieren Sie die Sicherheit in Ihrer CI/CD-Pipeline",
      title: "Entwickler"
    },
    get_started: "Erste Schritte",
    languages: "Sprachen",
    login: "Anmelden",
    pricing: "Preisgestaltung",
    product: {
      aspm: "ASPM",
      aspm_desc: "Verwaltung der Anwendungssicherheitslage",
      benefits: "Vorteile",
      benefits_desc: "Sehen Sie, wie Plexicus die Sicherheit transformiert",
      ciem: "CIEM",
      ciem_desc: "Verwaltung von Cloud-Infrastruktur-Berechtigungen",
      container_security: "Containersicherheit",
      container_security_desc: "Sicherheit für Container und Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Verwaltung der Cloud-Sicherheitslage",
      cwpp: "CWPP",
      cwpp_desc: "Plattform zum Schutz von Cloud-Workloads",
      explore: "Entdecken Sie unser Produkt",
      platform_overview: "Plattformübersicht",
      platform_overview_desc: "Einheitliche CNAPP-Plattform",
      title: "Produkt",
      use_cases: "Anwendungsfälle",
      use_cases_desc: "Beispiele für reale Implementierungen"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Neueste Nachrichten und Sicherheitseinblicke",
      branding_assets: "Markenressourcen",
      branding_assets_desc: "Logos und Markenrichtlinien",
      changelogs: "Änderungsprotokolle",
      changelogs_desc: "Neueste Produktaktualisierungen",
      comparison_overview: "Vergleichsübersicht",
      comparison_overview_desc: "Sehen Sie, wie Plexicus im Vergleich zu anderen Sicherheitstools abschneidet",
      explore: "Entdecken Sie unsere Ressourcen",
      feature_requests: "Funktionsanfragen",
      feature_requests_desc: "Neue Funktionen einreichen und abstimmen",
      integrations: "Integrationen",
      integrations_desc: "Verbinden Sie Ihre Tools und Plattformen",
      support: "Unterstützung",
      support_desc: "Plexicus bietet umfassenden Support, um Ihnen zu helfen, das Beste aus unserer Plattform herauszuholen.",
      title: "Ressourcen",
      youtube_channel: "YouTube-Kanal",
      youtube_channel_desc: "Video-Tutorials und Webinare"
    },
    solutions: {
      agencies: "Agenturen",
      agencies_desc: "Sicherheit für digitale und Marketingagenturen",
      enterprise: "Unternehmen",
      enterprise_desc: "Umfassende Sicherheit für große Organisationen",
      explore: "Entdecken Sie unsere Lösungen",
      fintech: "FinTech",
      fintech_desc: "Sicherheitslösungen für Finanztechnologie",
      government: "Regierung",
      government_desc: "Sicherheitslösungen für Regierungsbehörden",
      group_companies: "Unternehmensgruppen",
      group_companies_desc: "Lösungen für Unternehmensgruppen und Holdings",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-konforme Sicherheitslösungen",
      hrtech: "HRTech",
      hrtech_desc: "Sicherheit für Personaltechnologie",
      legal_desc: "Sicherheit für Rechtsunternehmen",
      legaltech: "LegalTech",
      manufacturing: "Fertigung",
      manufacturing_desc: "Sicherheit für industrielle und IoT-Systeme",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Sicherheit für iOS- und Android-Anwendungen",
      retailtech: "RetailTech",
      retailtech_desc: "Sicherheit für E-Commerce- und Einzelhandelsplattformen",
      startups: "Startups",
      startups_desc: "Skalierbare Sicherheit für wachsende Unternehmen",
      title: "Lösungen"
    }
  }
}, $l = qn.footer, Rl = qn.nav;
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn,
  footer: $l,
  nav: Rl
}, Symbol.toStringTag, { value: "Module" }));
var Wr = {
  footer: {
    policies: {
      legal_notice: "Legal Notice",
      management_policy: "Management Policy",
      privacy_policy: "Privacy Policy"
    },
    readiness: "SOC2 Type II Readiness",
    sections: {
      company: {
        links: {
          about_us: "About Us",
          careers: "Careers",
          contact: "Contact",
          privacy_policy: "Privacy Policy"
        },
        title: "Company"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Benefits",
          ciem: "CIEM",
          container_security: "Container Security",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platform Overview",
          pricing: "Pricing",
          use_cases: "Use Cases"
        },
        title: "Products"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Case Studies",
          documentation: "Documentation",
          security_resources: "Security Resources"
        },
        title: "Resources"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Elevate your cybersecurity strategy with Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "API References",
      api_references_desc: "Comprehensive API documentation",
      documentation: "Documentation",
      documentation_desc: "Technical guides and references",
      github_apps: "GitHub Apps",
      github_apps_desc: "Integrate Plexicus with your repositories",
      plexalyzer_action: "Plexalyzer Action",
      plexalyzer_action_desc: "Automate security in your CI/CD pipeline",
      title: "Developers"
    },
    get_started: "Get Started",
    languages: "Languages",
    login: "Login",
    pricing: "Pricing",
    product: {
      aspm: "ASPM",
      aspm_desc: "Application Security Posture Management",
      benefits: "Benefits",
      benefits_desc: "See how Plexicus transforms security",
      ciem: "CIEM",
      ciem_desc: "Cloud Infrastructure Entitlement Management",
      container_security: "Container Security",
      container_security_desc: "Container and Kubernetes security",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform",
      explore: "Explore our product",
      platform_overview: "Platform Overview",
      platform_overview_desc: "Unified CNAPP platform",
      title: "Product",
      use_cases: "Use Cases",
      use_cases_desc: "Real-world implementation examples"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Latest news and security insights",
      branding_assets: "Branding Assets",
      branding_assets_desc: "Logos and brand guidelines",
      changelogs: "Changelogs",
      changelogs_desc: "Latest product updates",
      comparison_overview: "Comparison Overview",
      comparison_overview_desc: "See how Plexicus compares to other security tools",
      explore: "Explore our resources",
      feature_requests: "Feature Requests",
      feature_requests_desc: "Submit and vote on new features",
      integrations: "Integrations",
      integrations_desc: "Connect your tools and platforms",
      support: "Support",
      support_desc: "Plexicus provides comprehensive support to help you get the most out of our platform.",
      title: "Resources",
      youtube_channel: "YouTube Channel",
      youtube_channel_desc: "Video tutorials and webinars"
    },
    solutions: {
      agencies: "Agencies",
      agencies_desc: "Security for digital and marketing agencies",
      enterprise: "Enterprise",
      enterprise_desc: "Comprehensive security for large organizations",
      explore: "Explore our solutions",
      fintech: "FinTech",
      fintech_desc: "Security solutions for financial technology",
      government: "Government",
      government_desc: "Security solutions for government agencies",
      group_companies: "Group Companies",
      group_companies_desc: "Solutions for corporate groups and holdings",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA compliant security solutions",
      hrtech: "HRTech",
      hrtech_desc: "Security for human resources technology",
      legal_desc: "Security for legal companies",
      legaltech: "LegalTech",
      manufacturing: "Manufacturing",
      manufacturing_desc: "Security for industrial and IoT systems",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Security for iOS and Android applications",
      retailtech: "RetailTech",
      retailtech_desc: "Security for e-commerce and retail platforms",
      startups: "Startups",
      startups_desc: "Scalable security for growing companies",
      title: "Solutions"
    }
  },
  search: {
    placeholder: "Search anything...",
    searching: "Searching...",
    not_found: "No results found",
    start_typing: "Start typing to search..."
  }
}, Bl = Wr.footer, Fl = Wr.nav, Hl = Wr.search;
const Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wr,
  footer: Bl,
  nav: Fl,
  search: Hl
}, Symbol.toStringTag, { value: "Module" }));
var Yn = {
  footer: {
    policies: {
      legal_notice: "Aviso Legal",
      management_policy: "Política de Gestión",
      privacy_policy: "Política de Privacidad"
    },
    readiness: "Preparación SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Sobre Nosotros",
          careers: "Carreras",
          contact: "Contacto",
          privacy_policy: "Política de Privacidad"
        },
        title: "Empresa"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Beneficios",
          ciem: "CIEM",
          container_security: "Seguridad de Contenedores",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Descripción de la Plataforma",
          pricing: "Precios",
          use_cases: "Casos de Uso"
        },
        title: "Productos"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Estudios de Caso",
          documentation: "Documentación",
          security_resources: "Recursos de Seguridad"
        },
        title: "Recursos"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleva tu estrategia de ciberseguridad con Plexicus"
  },
  nav: {
    contact: "Contacto",
    developers: {
      api_references: "Referencias API",
      api_references_desc: "Documentación completa de API",
      documentation: "Documentación",
      documentation_desc: "Guías técnicas y referencias",
      github_apps: "Aplicaciones de GitHub",
      github_apps_desc: "Integra Plexicus con tus repositorios",
      plexalyzer_action: "Acción Plexalyzer",
      plexalyzer_action_desc: "Automatiza la seguridad en tu pipeline CI/CD",
      title: "Desarrolladores"
    },
    get_started: "Comenzar",
    languages: "Idiomas",
    login: "Iniciar Sesión",
    pricing: "Precios",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestión de Postura de Seguridad de Aplicaciones",
      benefits: "Beneficios",
      benefits_desc: "Descubre cómo Plexicus transforma la seguridad",
      ciem: "CIEM",
      ciem_desc: "Gestión de Derechos de Infraestructura en la Nube",
      container_security: "Seguridad de Contenedores",
      container_security_desc: "Seguridad de contenedores y Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestión de Postura de Seguridad en la Nube",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Protección de Cargas de Trabajo en la Nube",
      explore: "Explora nuestro producto",
      platform_overview: "Descripción de la Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      title: "Producto",
      use_cases: "Casos de Uso",
      use_cases_desc: "Ejemplos de implementación en el mundo real"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Últimas noticias y perspectivas de seguridad",
      branding_assets: "Activos de Marca",
      branding_assets_desc: "Logotipos y guías de marca",
      changelogs: "Registros de Cambios",
      changelogs_desc: "Últimas actualizaciones de productos",
      comparison_overview: "Descripción Comparativa",
      comparison_overview_desc: "Descubre cómo Plexicus se compara con otras herramientas de seguridad",
      explore: "Explora nuestros recursos",
      feature_requests: "Solicitudes de Funciones",
      feature_requests_desc: "Envía y vota nuevas funciones",
      integrations: "Integraciones",
      integrations_desc: "Conecta tus herramientas y plataformas",
      support: "Soporte",
      support_desc: "Plexicus proporciona soporte integral para ayudarte a aprovechar al máximo nuestra plataforma.",
      title: "Recursos",
      youtube_channel: "Canal de YouTube",
      youtube_channel_desc: "Tutoriales en video y seminarios web"
    },
    solutions: {
      agencies: "Agencias",
      agencies_desc: "Seguridad para agencias digitales y de marketing",
      enterprise: "Empresa",
      enterprise_desc: "Seguridad integral para grandes organizaciones",
      explore: "Explora nuestras soluciones",
      fintech: "FinTech",
      fintech_desc: "Soluciones de seguridad para tecnología financiera",
      government: "Gobierno",
      government_desc: "Soluciones de seguridad para agencias gubernamentales",
      group_companies: "Empresas del Grupo",
      group_companies_desc: "Soluciones para grupos corporativos y holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Soluciones de seguridad compatibles con HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Seguridad para tecnología de recursos humanos",
      legal_desc: "Seguridad para empresas legales",
      legaltech: "LegalTech",
      manufacturing: "Manufactura",
      manufacturing_desc: "Seguridad para sistemas industriales e IoT",
      mobile_apps: "Aplicaciones Móviles",
      mobile_apps_desc: "Seguridad para aplicaciones iOS y Android",
      retailtech: "RetailTech",
      retailtech_desc: "Seguridad para plataformas de comercio electrónico y minoristas",
      startups: "Startups",
      startups_desc: "Seguridad escalable para empresas en crecimiento",
      title: "Soluciones"
    }
  }
}, Kl = Yn.footer, Gl = Yn.nav;
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn,
  footer: Kl,
  nav: Gl
}, Symbol.toStringTag, { value: "Module" }));
var Jn = {
  footer: {
    policies: {
      legal_notice: "Laillinen ilmoitus",
      management_policy: "Hallintapolitiikka",
      privacy_policy: "Tietosuojakäytäntö"
    },
    readiness: "SOC2 Type II Valmius",
    sections: {
      company: {
        links: {
          about_us: "Meistä",
          careers: "Urat",
          contact: "Yhteystiedot",
          privacy_policy: "Tietosuojakäytäntö"
        },
        title: "Yritys"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Hyödyt",
          ciem: "CIEM",
          container_security: "Konttiturvallisuus",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Alustan yleiskatsaus",
          pricing: "Hinnoittelu",
          use_cases: "Käyttötapaukset"
        },
        title: "Tuotteet"
      },
      resources: {
        links: {
          blog: "Blogi",
          case_studies: "Case-tutkimukset",
          documentation: "Dokumentaatio",
          security_resources: "Turvallisuusresurssit"
        },
        title: "Resurssit"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Nosta kyberturvallisuusstrategiasi Plexicuksen avulla"
  },
  nav: {
    contact: "Yhteystiedot",
    developers: {
      api_references: "API-viitteet",
      api_references_desc: "Kattava API-dokumentaatio",
      documentation: "Dokumentaatio",
      documentation_desc: "Teknisiä oppaita ja viitteitä",
      github_apps: "GitHub-sovellukset",
      github_apps_desc: "Integroi Plexicus repositorioihisi",
      plexalyzer_action: "Plexalyzer-toiminto",
      plexalyzer_action_desc: "Automatisoi turvallisuus CI/CD-putkessasi",
      title: "Kehittäjät"
    },
    get_started: "Aloita",
    languages: "Kielet",
    login: "Kirjaudu sisään",
    pricing: "Hinnoittelu",
    product: {
      aspm: "ASPM",
      aspm_desc: "Sovellusturvallisuuden hallinta",
      benefits: "Hyödyt",
      benefits_desc: "Katso, miten Plexicus muuttaa turvallisuutta",
      ciem: "CIEM",
      ciem_desc: "Pilvi-infrastruktuurin oikeuksien hallinta",
      container_security: "Konttiturvallisuus",
      container_security_desc: "Konttien ja Kubernetesin turvallisuus",
      cspm: "CSPM",
      cspm_desc: "Pilviturvallisuuden hallinta",
      cwpp: "CWPP",
      cwpp_desc: "Pilvityökuormien suojausalusta",
      explore: "Tutustu tuotteeseemme",
      platform_overview: "Alustan yleiskatsaus",
      platform_overview_desc: "Yhtenäinen CNAPP-alusta",
      title: "Tuote",
      use_cases: "Käyttötapaukset",
      use_cases_desc: "Todellisia toteutusesimerkkejä"
    },
    resources: {
      blog: "Blogi",
      blog_desc: "Viimeisimmät uutiset ja turvallisuusnäkemykset",
      branding_assets: "Brändäysmateriaalit",
      branding_assets_desc: "Logot ja brändiohjeet",
      changelogs: "Muutoslokit",
      changelogs_desc: "Viimeisimmät tuoteuutiset",
      comparison_overview: "Vertailun yleiskatsaus",
      comparison_overview_desc: "Katso, miten Plexicus vertautuu muihin turvallisuustyökaluihin",
      explore: "Tutustu resursseihimme",
      feature_requests: "Ominaisuuspyynnöt",
      feature_requests_desc: "Lähetä ja äänestä uusia ominaisuuksia",
      integrations: "Integraatiot",
      integrations_desc: "Yhdistä työkalusi ja alustasi",
      support: "Tuki",
      support_desc: "Plexicus tarjoaa kattavaa tukea, jotta saat kaiken irti alustastamme.",
      title: "Resurssit",
      youtube_channel: "YouTube-kanava",
      youtube_channel_desc: "Videotutoriaalit ja webinaarit"
    },
    solutions: {
      agencies: "Toimistot",
      agencies_desc: "Turvallisuus digitaalisille ja markkinointitoimistoille",
      enterprise: "Yritykset",
      enterprise_desc: "Kattava turvallisuus suurille organisaatioille",
      explore: "Tutustu ratkaisuihimme",
      fintech: "FinTech",
      fintech_desc: "Turvallisuusratkaisut finanssiteknologialle",
      government: "Hallitus",
      government_desc: "Turvallisuusratkaisut valtion virastoille",
      group_companies: "Yritysryhmät",
      group_companies_desc: "Ratkaisut yritysryhmille ja holding-yhtiöille",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-yhteensopivat turvallisuusratkaisut",
      hrtech: "HRTech",
      hrtech_desc: "Turvallisuus henkilöstöhallinnon teknologialle",
      legal_desc: "Turvallisuus lakialan yrityksille",
      legaltech: "LegalTech",
      manufacturing: "Valmistus",
      manufacturing_desc: "Turvallisuus teollisuus- ja IoT-järjestelmille",
      mobile_apps: "Mobiilisovellukset",
      mobile_apps_desc: "Turvallisuus iOS- ja Android-sovelluksille",
      retailtech: "RetailTech",
      retailtech_desc: "Turvallisuus verkkokauppa- ja vähittäiskauppa-alustoille",
      startups: "Startupit",
      startups_desc: "Skaalautuva turvallisuus kasvaville yrityksille",
      title: "Ratkaisut"
    }
  }
}, Ul = Jn.footer, ql = Jn.nav;
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn,
  footer: Ul,
  nav: ql
}, Symbol.toStringTag, { value: "Module" }));
var Zn = {
  footer: {
    policies: {
      legal_notice: "Avis légal",
      management_policy: "Politique de gestion",
      privacy_policy: "Politique de confidentialité"
    },
    readiness: "Préparation SOC2 Type II",
    sections: {
      company: {
        links: {
          about_us: "À propos de nous",
          careers: "Carrières",
          contact: "Contact",
          privacy_policy: "Politique de confidentialité"
        },
        title: "Entreprise"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Avantages",
          ciem: "CIEM",
          container_security: "Sécurité des conteneurs",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Aperçu de la plateforme",
          pricing: "Tarification",
          use_cases: "Cas d'utilisation"
        },
        title: "Produits"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Études de cas",
          documentation: "Documentation",
          security_resources: "Ressources de sécurité"
        },
        title: "Ressources"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Élevez votre stratégie de cybersécurité avec Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "Références API",
      api_references_desc: "Documentation complète de l'API",
      documentation: "Documentation",
      documentation_desc: "Guides techniques et références",
      github_apps: "Applications GitHub",
      github_apps_desc: "Intégrez Plexicus avec vos dépôts",
      plexalyzer_action: "Action Plexalyzer",
      plexalyzer_action_desc: "Automatisez la sécurité dans votre pipeline CI/CD",
      title: "Développeurs"
    },
    get_started: "Commencer",
    languages: "Langues",
    login: "Connexion",
    pricing: "Tarification",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestion de la posture de sécurité des applications",
      benefits: "Avantages",
      benefits_desc: "Découvrez comment Plexicus transforme la sécurité",
      ciem: "CIEM",
      ciem_desc: "Gestion des droits d'infrastructure cloud",
      container_security: "Sécurité des conteneurs",
      container_security_desc: "Sécurité des conteneurs et Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestion de la posture de sécurité cloud",
      cwpp: "CWPP",
      cwpp_desc: "Plateforme de protection des charges de travail cloud",
      explore: "Explorez notre produit",
      platform_overview: "Aperçu de la plateforme",
      platform_overview_desc: "Plateforme CNAPP unifiée",
      title: "Produit",
      use_cases: "Cas d'utilisation",
      use_cases_desc: "Exemples de mise en œuvre réelle"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Dernières nouvelles et perspectives de sécurité",
      branding_assets: "Actifs de marque",
      branding_assets_desc: "Logos et directives de marque",
      changelogs: "Journaux des modifications",
      changelogs_desc: "Dernières mises à jour du produit",
      comparison_overview: "Aperçu des comparaisons",
      comparison_overview_desc: "Découvrez comment Plexicus se compare à d'autres outils de sécurité",
      explore: "Explorez nos ressources",
      feature_requests: "Demandes de fonctionnalités",
      feature_requests_desc: "Soumettez et votez pour de nouvelles fonctionnalités",
      integrations: "Intégrations",
      integrations_desc: "Connectez vos outils et plateformes",
      support: "Support",
      support_desc: "Plexicus fournit un support complet pour vous aider à tirer le meilleur parti de notre plateforme.",
      title: "Ressources",
      youtube_channel: "Chaîne YouTube",
      youtube_channel_desc: "Tutoriels vidéo et webinaires"
    },
    solutions: {
      agencies: "Agences",
      agencies_desc: "Sécurité pour les agences numériques et de marketing",
      enterprise: "Entreprise",
      enterprise_desc: "Sécurité complète pour les grandes organisations",
      explore: "Explorez nos solutions",
      fintech: "FinTech",
      fintech_desc: "Solutions de sécurité pour la technologie financière",
      government: "Gouvernement",
      government_desc: "Solutions de sécurité pour les agences gouvernementales",
      group_companies: "Entreprises de groupe",
      group_companies_desc: "Solutions pour les groupes d'entreprises et holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Solutions de sécurité conformes à la HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sécurité pour la technologie des ressources humaines",
      legal_desc: "Sécurité pour les entreprises juridiques",
      legaltech: "LegalTech",
      manufacturing: "Fabrication",
      manufacturing_desc: "Sécurité pour les systèmes industriels et IoT",
      mobile_apps: "Applications mobiles",
      mobile_apps_desc: "Sécurité pour les applications iOS et Android",
      retailtech: "RetailTech",
      retailtech_desc: "Sécurité pour les plateformes de commerce électronique et de vente au détail",
      startups: "Startups",
      startups_desc: "Sécurité évolutive pour les entreprises en croissance",
      title: "Solutions"
    }
  }
}, Jl = Zn.footer, Zl = Zn.nav;
const Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn,
  footer: Jl,
  nav: Zl
}, Symbol.toStringTag, { value: "Module" }));
var Xn = {
  footer: {
    policies: {
      legal_notice: "הודעה משפטית",
      management_policy: "מדיניות ניהול",
      privacy_policy: "מדיניות פרטיות"
    },
    readiness: "מוכנות SOC2 סוג II",
    sections: {
      company: {
        links: {
          about_us: "אודותינו",
          careers: "קריירה",
          contact: "צור קשר",
          privacy_policy: "מדיניות פרטיות"
        },
        title: "חברה"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "יתרונות",
          ciem: "CIEM",
          container_security: "אבטחת מכולות",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "סקירת פלטפורמה",
          pricing: "תמחור",
          use_cases: "מקרי שימוש"
        },
        title: "מוצרים"
      },
      resources: {
        links: {
          blog: "בלוג",
          case_studies: "מחקרי מקרה",
          documentation: "תיעוד",
          security_resources: "משאבי אבטחה"
        },
        title: "משאבים"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "אינסטגרם",
      linkedin: "LinkedIn",
      twitter: "טוויטר"
    },
    tagline: "שפר את אסטרטגיית הסייבר שלך עם Plexicus"
  },
  nav: {
    contact: "צור קשר",
    developers: {
      api_references: "הפניות API",
      api_references_desc: "תיעוד API מקיף",
      documentation: "תיעוד",
      documentation_desc: "מדריכים טכניים והפניות",
      github_apps: "אפליקציות GitHub",
      github_apps_desc: "שלב את Plexicus עם המאגר שלך",
      plexalyzer_action: "פעולה Plexalyzer",
      plexalyzer_action_desc: "אוטומציה של אבטחה בצנרת CI/CD שלך",
      title: "מפתחים"
    },
    get_started: "התחל",
    languages: "שפות",
    login: "התחברות",
    pricing: "תמחור",
    product: {
      aspm: "ASPM",
      aspm_desc: "ניהול מצב אבטחת יישומים",
      benefits: "יתרונות",
      benefits_desc: "ראה כיצד Plexicus משנה את האבטחה",
      ciem: "CIEM",
      ciem_desc: "ניהול זכויות תשתית ענן",
      container_security: "אבטחת מכולות",
      container_security_desc: "אבטחת מכולות וקוברנטיס",
      cspm: "CSPM",
      cspm_desc: "ניהול מצב אבטחת ענן",
      cwpp: "CWPP",
      cwpp_desc: "פלטפורמת הגנת עומסי עבודה בענן",
      explore: "חקור את המוצר שלנו",
      platform_overview: "סקירת פלטפורמה",
      platform_overview_desc: "פלטפורמת CNAPP מאוחדת",
      title: "מוצר",
      use_cases: "מקרי שימוש",
      use_cases_desc: "דוגמאות ליישום בעולם האמיתי"
    },
    resources: {
      blog: "בלוג",
      blog_desc: "חדשות אחרונות ותובנות אבטחה",
      branding_assets: "נכסי מותג",
      branding_assets_desc: "לוגואים והנחיות מותג",
      changelogs: "יומני שינויים",
      changelogs_desc: "עדכוני מוצר אחרונים",
      comparison_overview: "סקירת השוואה",
      comparison_overview_desc: "ראה כיצד Plexicus משווה לכלי אבטחה אחרים",
      explore: "חקור את המשאבים שלנו",
      feature_requests: "בקשות תכונה",
      feature_requests_desc: "הגש והצביע על תכונות חדשות",
      integrations: "אינטגרציות",
      integrations_desc: "חבר את הכלים והפלטפורמות שלך",
      support: "תמיכה",
      support_desc: "Plexicus מספקת תמיכה מקיפה כדי לעזור לך להפיק את המירב מהפלטפורמה שלנו.",
      title: "משאבים",
      youtube_channel: "ערוץ YouTube",
      youtube_channel_desc: "מדריכי וידאו וסמינרים מקוונים"
    },
    solutions: {
      agencies: "סוכנויות",
      agencies_desc: "אבטחה לסוכנויות דיגיטל ושיווק",
      enterprise: "ארגונים",
      enterprise_desc: "אבטחה מקיפה לארגונים גדולים",
      explore: "חקור את הפתרונות שלנו",
      fintech: "FinTech",
      fintech_desc: "פתרונות אבטחה לטכנולוגיה פיננסית",
      government: "ממשלה",
      government_desc: "פתרונות אבטחה לסוכנויות ממשלתיות",
      group_companies: "חברות קבוצתיות",
      group_companies_desc: "פתרונות לקבוצות תאגידיות והחזקות",
      healthtech: "HealthTech",
      healthtech_desc: "פתרונות אבטחה תואמי HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "אבטחה לטכנולוגיית משאבי אנוש",
      legal_desc: "אבטחה לחברות משפטיות",
      legaltech: "LegalTech",
      manufacturing: "ייצור",
      manufacturing_desc: "אבטחה למערכות תעשייתיות ו-IoT",
      mobile_apps: "אפליקציות ניידות",
      mobile_apps_desc: "אבטחה לאפליקציות iOS ו-Android",
      retailtech: "RetailTech",
      retailtech_desc: "אבטחה לפלטפורמות מסחר אלקטרוני וקמעונאות",
      startups: "סטארטאפים",
      startups_desc: "אבטחה ניתנת להרחבה לחברות מתפתחות",
      title: "פתרונות"
    }
  }
}, Ql = Xn.footer, eu = Xn.nav;
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn,
  footer: Ql,
  nav: eu
}, Symbol.toStringTag, { value: "Module" }));
var Qn = {
  footer: {
    policies: {
      legal_notice: "Pemberitahuan Hukum",
      management_policy: "Kebijakan Manajemen",
      privacy_policy: "Kebijakan Privasi"
    },
    readiness: "Kesiapan SOC2 Tipe II",
    sections: {
      company: {
        links: {
          about_us: "Tentang Kami",
          careers: "Karir",
          contact: "Kontak",
          privacy_policy: "Kebijakan Privasi"
        },
        title: "Perusahaan"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Manfaat",
          ciem: "CIEM",
          container_security: "Keamanan Kontainer",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Gambaran Platform",
          pricing: "Harga",
          use_cases: "Kasus Penggunaan"
        },
        title: "Produk"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Studi Kasus",
          documentation: "Dokumentasi",
          security_resources: "Sumber Daya Keamanan"
        },
        title: "Sumber Daya"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Tingkatkan strategi keamanan siber Anda dengan Plexicus"
  },
  nav: {
    contact: "Kontak",
    developers: {
      api_references: "Referensi API",
      api_references_desc: "Dokumentasi API yang komprehensif",
      documentation: "Dokumentasi",
      documentation_desc: "Panduan teknis dan referensi",
      github_apps: "Aplikasi GitHub",
      github_apps_desc: "Integrasikan Plexicus dengan repositori Anda",
      plexalyzer_action: "Aksi Plexalyzer",
      plexalyzer_action_desc: "Otomatisasi keamanan dalam pipeline CI/CD Anda",
      title: "Pengembang"
    },
    get_started: "Mulai",
    languages: "Bahasa",
    login: "Masuk",
    pricing: "Harga",
    product: {
      aspm: "ASPM",
      aspm_desc: "Manajemen Postur Keamanan Aplikasi",
      benefits: "Manfaat",
      benefits_desc: "Lihat bagaimana Plexicus mengubah keamanan",
      ciem: "CIEM",
      ciem_desc: "Manajemen Hak Infrastruktur Cloud",
      container_security: "Keamanan Kontainer",
      container_security_desc: "Keamanan Kontainer dan Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Manajemen Postur Keamanan Cloud",
      cwpp: "CWPP",
      cwpp_desc: "Platform Perlindungan Beban Kerja Cloud",
      explore: "Jelajahi produk kami",
      platform_overview: "Gambaran Platform",
      platform_overview_desc: "Platform CNAPP terpadu",
      title: "Produk",
      use_cases: "Kasus Penggunaan",
      use_cases_desc: "Contoh implementasi dunia nyata"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Berita terbaru dan wawasan keamanan",
      branding_assets: "Aset Merek",
      branding_assets_desc: "Logo dan panduan merek",
      changelogs: "Catatan Perubahan",
      changelogs_desc: "Pembaruan produk terbaru",
      comparison_overview: "Gambaran Perbandingan",
      comparison_overview_desc: "Lihat bagaimana Plexicus dibandingkan dengan alat keamanan lainnya",
      explore: "Jelajahi sumber daya kami",
      feature_requests: "Permintaan Fitur",
      feature_requests_desc: "Kirim dan beri suara pada fitur baru",
      integrations: "Integrasi",
      integrations_desc: "Hubungkan alat dan platform Anda",
      support: "Dukungan",
      support_desc: "Plexicus menyediakan dukungan komprehensif untuk membantu Anda mendapatkan hasil maksimal dari platform kami.",
      title: "Sumber Daya",
      youtube_channel: "Saluran YouTube",
      youtube_channel_desc: "Tutorial video dan webinar"
    },
    solutions: {
      agencies: "Agensi",
      agencies_desc: "Keamanan untuk agensi digital dan pemasaran",
      enterprise: "Perusahaan",
      enterprise_desc: "Keamanan komprehensif untuk organisasi besar",
      explore: "Jelajahi solusi kami",
      fintech: "FinTech",
      fintech_desc: "Solusi keamanan untuk teknologi keuangan",
      government: "Pemerintah",
      government_desc: "Solusi keamanan untuk lembaga pemerintah",
      group_companies: "Perusahaan Grup",
      group_companies_desc: "Solusi untuk kelompok perusahaan dan holding",
      healthtech: "HealthTech",
      healthtech_desc: "Solusi keamanan yang sesuai dengan HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Keamanan untuk teknologi sumber daya manusia",
      legal_desc: "Keamanan untuk perusahaan hukum",
      legaltech: "LegalTech",
      manufacturing: "Manufaktur",
      manufacturing_desc: "Keamanan untuk sistem industri dan IoT",
      mobile_apps: "Aplikasi Mobile",
      mobile_apps_desc: "Keamanan untuk aplikasi iOS dan Android",
      retailtech: "RetailTech",
      retailtech_desc: "Keamanan untuk platform e-commerce dan ritel",
      startups: "Startup",
      startups_desc: "Keamanan yang dapat diskalakan untuk perusahaan yang sedang berkembang",
      title: "Solusi"
    }
  }
}, ru = Qn.footer, nu = Qn.nav;
const iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn,
  footer: ru,
  nav: nu
}, Symbol.toStringTag, { value: "Module" }));
var ei = {
  footer: {
    policies: {
      legal_notice: "Avviso Legale",
      management_policy: "Politica di Gestione",
      privacy_policy: "Politica sulla Privacy"
    },
    readiness: "Prontezza SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Chi Siamo",
          careers: "Carriere",
          contact: "Contatto",
          privacy_policy: "Politica sulla Privacy"
        },
        title: "Azienda"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Vantaggi",
          ciem: "CIEM",
          container_security: "Sicurezza dei Container",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Panoramica della Piattaforma",
          pricing: "Prezzi",
          use_cases: "Casi d'Uso"
        },
        title: "Prodotti"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Casi di Studio",
          documentation: "Documentazione",
          security_resources: "Risorse di Sicurezza"
        },
        title: "Risorse"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleva la tua strategia di cybersecurity con Plexicus"
  },
  nav: {
    contact: "Contatto",
    developers: {
      api_references: "Riferimenti API",
      api_references_desc: "Documentazione API completa",
      documentation: "Documentazione",
      documentation_desc: "Guide tecniche e riferimenti",
      github_apps: "App GitHub",
      github_apps_desc: "Integra Plexicus con i tuoi repository",
      plexalyzer_action: "Azione Plexalyzer",
      plexalyzer_action_desc: "Automatizza la sicurezza nel tuo pipeline CI/CD",
      title: "Sviluppatori"
    },
    get_started: "Inizia",
    languages: "Lingue",
    login: "Accedi",
    pricing: "Prezzi",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestione della Postura di Sicurezza delle Applicazioni",
      benefits: "Vantaggi",
      benefits_desc: "Scopri come Plexicus trasforma la sicurezza",
      ciem: "CIEM",
      ciem_desc: "Gestione delle Autorizzazioni dell'Infrastruttura Cloud",
      container_security: "Sicurezza dei Container",
      container_security_desc: "Sicurezza dei Container e Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestione della Postura di Sicurezza Cloud",
      cwpp: "CWPP",
      cwpp_desc: "Piattaforma di Protezione dei Carichi di Lavoro Cloud",
      explore: "Esplora il nostro prodotto",
      platform_overview: "Panoramica della Piattaforma",
      platform_overview_desc: "Piattaforma CNAPP unificata",
      title: "Prodotto",
      use_cases: "Casi d'Uso",
      use_cases_desc: "Esempi di implementazione nel mondo reale"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Ultime notizie e approfondimenti sulla sicurezza",
      branding_assets: "Risorse di Branding",
      branding_assets_desc: "Loghi e linee guida del marchio",
      changelogs: "Changelog",
      changelogs_desc: "Ultimi aggiornamenti del prodotto",
      comparison_overview: "Panoramica Comparativa",
      comparison_overview_desc: "Scopri come Plexicus si confronta con altri strumenti di sicurezza",
      explore: "Esplora le nostre risorse",
      feature_requests: "Richieste di Funzionalità",
      feature_requests_desc: "Invia e vota nuove funzionalità",
      integrations: "Integrazioni",
      integrations_desc: "Connetti i tuoi strumenti e piattaforme",
      support: "Supporto",
      support_desc: "Plexicus offre supporto completo per aiutarti a ottenere il massimo dalla nostra piattaforma.",
      title: "Risorse",
      youtube_channel: "Canale YouTube",
      youtube_channel_desc: "Tutorial video e webinar"
    },
    solutions: {
      agencies: "Agenzie",
      agencies_desc: "Sicurezza per agenzie digitali e di marketing",
      enterprise: "Impresa",
      enterprise_desc: "Sicurezza completa per grandi organizzazioni",
      explore: "Esplora le nostre soluzioni",
      fintech: "FinTech",
      fintech_desc: "Soluzioni di sicurezza per la tecnologia finanziaria",
      government: "Governo",
      government_desc: "Soluzioni di sicurezza per agenzie governative",
      group_companies: "Gruppi Aziendali",
      group_companies_desc: "Soluzioni per gruppi aziendali e holding",
      healthtech: "HealthTech",
      healthtech_desc: "Soluzioni di sicurezza conformi a HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sicurezza per la tecnologia delle risorse umane",
      legal_desc: "Sicurezza per aziende legali",
      legaltech: "LegalTech",
      manufacturing: "Manifatturiero",
      manufacturing_desc: "Sicurezza per sistemi industriali e IoT",
      mobile_apps: "App Mobili",
      mobile_apps_desc: "Sicurezza per applicazioni iOS e Android",
      retailtech: "RetailTech",
      retailtech_desc: "Sicurezza per piattaforme di e-commerce e vendita al dettaglio",
      startups: "Startup",
      startups_desc: "Sicurezza scalabile per aziende in crescita",
      title: "Soluzioni"
    }
  }
}, su = ei.footer, ou = ei.nav;
const au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei,
  footer: su,
  nav: ou
}, Symbol.toStringTag, { value: "Module" }));
var ti = {
  footer: {
    policies: {
      legal_notice: "法的通知",
      management_policy: "管理方針",
      privacy_policy: "プライバシーポリシー"
    },
    readiness: "SOC2 タイプII準備",
    sections: {
      company: {
        links: {
          about_us: "会社概要",
          careers: "採用情報",
          contact: "お問い合わせ",
          privacy_policy: "プライバシーポリシー"
        },
        title: "会社"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "利点",
          ciem: "CIEM",
          container_security: "コンテナセキュリティ",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "プラットフォーム概要",
          pricing: "価格",
          use_cases: "ユースケース"
        },
        title: "製品"
      },
      resources: {
        links: {
          blog: "ブログ",
          case_studies: "ケーススタディ",
          documentation: "ドキュメント",
          security_resources: "セキュリティリソース"
        },
        title: "リソース"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Plexicusでサイバーセキュリティ戦略を高めましょう"
  },
  nav: {
    contact: "お問い合わせ",
    developers: {
      api_references: "APIリファレンス",
      api_references_desc: "包括的なAPIドキュメント",
      documentation: "ドキュメント",
      documentation_desc: "技術ガイドとリファレンス",
      github_apps: "GitHubアプリ",
      github_apps_desc: "リポジトリにPlexicusを統合",
      plexalyzer_action: "Plexalyzerアクション",
      plexalyzer_action_desc: "CI/CDパイプラインでのセキュリティ自動化",
      title: "開発者"
    },
    get_started: "始める",
    languages: "言語",
    login: "ログイン",
    pricing: "価格",
    product: {
      aspm: "ASPM",
      aspm_desc: "アプリケーションセキュリティポスチャ管理",
      benefits: "利点",
      benefits_desc: "Plexicusがどのようにセキュリティを変革するかを見る",
      ciem: "CIEM",
      ciem_desc: "クラウドインフラストラクチャ権限管理",
      container_security: "コンテナセキュリティ",
      container_security_desc: "コンテナとKubernetesのセキュリティ",
      cspm: "CSPM",
      cspm_desc: "クラウドセキュリティポスチャ管理",
      cwpp: "CWPP",
      cwpp_desc: "クラウドワークロード保護プラットフォーム",
      explore: "製品を探る",
      platform_overview: "プラットフォーム概要",
      platform_overview_desc: "統合CNAPPプラットフォーム",
      title: "製品",
      use_cases: "ユースケース",
      use_cases_desc: "実際の実装例"
    },
    resources: {
      blog: "ブログ",
      blog_desc: "最新ニュースとセキュリティの洞察",
      branding_assets: "ブランディング資産",
      branding_assets_desc: "ロゴとブランドガイドライン",
      changelogs: "変更履歴",
      changelogs_desc: "最新の製品アップデート",
      comparison_overview: "比較概要",
      comparison_overview_desc: "Plexicusが他のセキュリティツールとどのように比較されるかを見る",
      explore: "リソースを探る",
      feature_requests: "機能リクエスト",
      feature_requests_desc: "新機能の提出と投票",
      integrations: "統合",
      integrations_desc: "ツールとプラットフォームを接続",
      support: "サポート",
      support_desc: "Plexicusはプラットフォームを最大限に活用するための包括的なサポートを提供します。",
      title: "リソース",
      youtube_channel: "YouTubeチャンネル",
      youtube_channel_desc: "ビデオチュートリアルとウェビナー"
    },
    solutions: {
      agencies: "エージェンシー",
      agencies_desc: "デジタルおよびマーケティングエージェンシー向けのセキュリティ",
      enterprise: "エンタープライズ",
      enterprise_desc: "大規模組織向けの包括的なセキュリティ",
      explore: "ソリューションを探る",
      fintech: "フィンテック",
      fintech_desc: "金融技術向けのセキュリティソリューション",
      government: "政府",
      government_desc: "政府機関向けのセキュリティソリューション",
      group_companies: "グループ企業",
      group_companies_desc: "企業グループおよびホールディング向けのソリューション",
      healthtech: "ヘルステック",
      healthtech_desc: "HIPAA準拠のセキュリティソリューション",
      hrtech: "HRテック",
      hrtech_desc: "人事技術向けのセキュリティ",
      legal_desc: "法律会社向けのセキュリティ",
      legaltech: "リーガルテック",
      manufacturing: "製造業",
      manufacturing_desc: "産業およびIoTシステム向けのセキュリティ",
      mobile_apps: "モバイルアプリ",
      mobile_apps_desc: "iOSおよびAndroidアプリケーション向けのセキュリティ",
      retailtech: "リテールテック",
      retailtech_desc: "eコマースおよび小売プラットフォーム向けのセキュリティ",
      startups: "スタートアップ",
      startups_desc: "成長企業向けのスケーラブルなセキュリティ",
      title: "ソリューション"
    }
  }
}, cu = ti.footer, lu = ti.nav;
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti,
  footer: cu,
  nav: lu
}, Symbol.toStringTag, { value: "Module" }));
var ri = {
  footer: {
    policies: {
      legal_notice: "Juridische Kennisgeving",
      management_policy: "Beleid van het Management",
      privacy_policy: "Privacybeleid"
    },
    readiness: "SOC2 Type II Gereedheid",
    sections: {
      company: {
        links: {
          about_us: "Over Ons",
          careers: "Carrières",
          contact: "Contact",
          privacy_policy: "Privacybeleid"
        },
        title: "Bedrijf"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Voordelen",
          ciem: "CIEM",
          container_security: "Containerbeveiliging",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platformoverzicht",
          pricing: "Prijzen",
          use_cases: "Gebruiksscenario's"
        },
        title: "Producten"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Casestudy's",
          documentation: "Documentatie",
          security_resources: "Beveiligingsbronnen"
        },
        title: "Bronnen"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Verhoog uw cybersecuritystrategie met Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "API-referenties",
      api_references_desc: "Uitgebreide API-documentatie",
      documentation: "Documentatie",
      documentation_desc: "Technische handleidingen en referenties",
      github_apps: "GitHub-apps",
      github_apps_desc: "Integreer Plexicus met uw repositories",
      plexalyzer_action: "Plexalyzer-actie",
      plexalyzer_action_desc: "Automatiseer beveiliging in uw CI/CD-pijplijn",
      title: "Ontwikkelaars"
    },
    get_started: "Aan de Slag",
    languages: "Talen",
    login: "Inloggen",
    pricing: "Prijzen",
    product: {
      aspm: "ASPM",
      aspm_desc: "Beheer van Applicatiebeveiligingshouding",
      benefits: "Voordelen",
      benefits_desc: "Zie hoe Plexicus beveiliging transformeert",
      ciem: "CIEM",
      ciem_desc: "Beheer van Cloudinfrastructuurtoestemmingen",
      container_security: "Containerbeveiliging",
      container_security_desc: "Beveiliging van containers en Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Beheer van Cloudbeveiligingshouding",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Beschermingsplatform",
      explore: "Verken ons product",
      platform_overview: "Platformoverzicht",
      platform_overview_desc: "Geïntegreerd CNAPP-platform",
      title: "Product",
      use_cases: "Gebruiksscenario's",
      use_cases_desc: "Voorbeelden van implementatie in de praktijk"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Laatste nieuws en beveiligingsinzichten",
      branding_assets: "Merkmiddelen",
      branding_assets_desc: "Logo's en merkrichtlijnen",
      changelogs: "Wijzigingslogboeken",
      changelogs_desc: "Laatste productupdates",
      comparison_overview: "Vergelijkingsoverzicht",
      comparison_overview_desc: "Zie hoe Plexicus zich verhoudt tot andere beveiligingstools",
      explore: "Verken onze bronnen",
      feature_requests: "Functieaanvragen",
      feature_requests_desc: "Dien nieuwe functies in en stem erop",
      integrations: "Integraties",
      integrations_desc: "Verbind uw tools en platforms",
      support: "Ondersteuning",
      support_desc: "Plexicus biedt uitgebreide ondersteuning om u te helpen het meeste uit ons platform te halen.",
      title: "Bronnen",
      youtube_channel: "YouTube-kanaal",
      youtube_channel_desc: "Videotutorials en webinars"
    },
    solutions: {
      agencies: "Bureaus",
      agencies_desc: "Beveiliging voor digitale en marketingbureaus",
      enterprise: "Onderneming",
      enterprise_desc: "Uitgebreide beveiliging voor grote organisaties",
      explore: "Verken onze oplossingen",
      fintech: "FinTech",
      fintech_desc: "Beveiligingsoplossingen voor financiële technologie",
      government: "Overheid",
      government_desc: "Beveiligingsoplossingen voor overheidsinstanties",
      group_companies: "Groepsbedrijven",
      group_companies_desc: "Oplossingen voor bedrijfs- en holdinggroepen",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-conforme beveiligingsoplossingen",
      hrtech: "HRTech",
      hrtech_desc: "Beveiliging voor technologie op het gebied van personeelszaken",
      legal_desc: "Beveiliging voor juridische bedrijven",
      legaltech: "LegalTech",
      manufacturing: "Productie",
      manufacturing_desc: "Beveiliging voor industriële en IoT-systemen",
      mobile_apps: "Mobiele Apps",
      mobile_apps_desc: "Beveiliging voor iOS- en Android-applicaties",
      retailtech: "RetailTech",
      retailtech_desc: "Beveiliging voor e-commerce en retailplatforms",
      startups: "Startups",
      startups_desc: "Schaalbare beveiliging voor groeiende bedrijven",
      title: "Oplossingen"
    }
  }
}, du = ri.footer, pu = ri.nav;
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri,
  footer: du,
  nav: pu
}, Symbol.toStringTag, { value: "Module" }));
var ni = {
  footer: {
    policies: {
      legal_notice: "Juridisk Merknad",
      management_policy: "Ledelsespolitikk",
      privacy_policy: "Personvernpolicy"
    },
    readiness: "SOC2 Type II Beredskap",
    sections: {
      company: {
        links: {
          about_us: "Om Oss",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Personvernpolicy"
        },
        title: "Selskap"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fordeler",
          ciem: "CIEM",
          container_security: "Container Sikkerhet",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformoversikt",
          pricing: "Prising",
          use_cases: "Brukstilfeller"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blogg",
          case_studies: "Case Studier",
          documentation: "Dokumentasjon",
          security_resources: "Sikkerhetsressurser"
        },
        title: "Ressurser"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Forbedre din cybersikkerhetsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API Referanser",
      api_references_desc: "Omfattende API-dokumentasjon",
      documentation: "Dokumentasjon",
      documentation_desc: "Tekniske guider og referanser",
      github_apps: "GitHub Apper",
      github_apps_desc: "Integrer Plexicus med dine repositorier",
      plexalyzer_action: "Plexalyzer Handling",
      plexalyzer_action_desc: "Automatiser sikkerhet i din CI/CD-pipeline",
      title: "Utviklere"
    },
    get_started: "Kom i Gang",
    languages: "Språk",
    login: "Logg Inn",
    pricing: "Prising",
    product: {
      aspm: "ASPM",
      aspm_desc: "Applikasjonssikkerhetsstyring",
      benefits: "Fordeler",
      benefits_desc: "Se hvordan Plexicus transformerer sikkerhet",
      ciem: "CIEM",
      ciem_desc: "Skyinfrastrukturrettighetsstyring",
      container_security: "Container Sikkerhet",
      container_security_desc: "Container- og Kubernetes-sikkerhet",
      cspm: "CSPM",
      cspm_desc: "Sky Sikkerhetsstyring",
      cwpp: "CWPP",
      cwpp_desc: "Skyarbeidsbelastningsbeskyttelsesplattform",
      explore: "Utforsk vårt produkt",
      platform_overview: "Plattformoversikt",
      platform_overview_desc: "Enhetlig CNAPP-plattform",
      title: "Produkt",
      use_cases: "Brukstilfeller",
      use_cases_desc: "Eksempler på implementering i virkeligheten"
    },
    resources: {
      blog: "Blogg",
      blog_desc: "Siste nytt og sikkerhetsinnsikt",
      branding_assets: "Branding Ressurser",
      branding_assets_desc: "Logoer og merkevareveiledninger",
      changelogs: "Endringslogger",
      changelogs_desc: "Siste produktoppdateringer",
      comparison_overview: "Sammenligningsoversikt",
      comparison_overview_desc: "Se hvordan Plexicus sammenlignes med andre sikkerhetsverktøy",
      explore: "Utforsk våre ressurser",
      feature_requests: "Funksjonsforespørsler",
      feature_requests_desc: "Send inn og stem på nye funksjoner",
      integrations: "Integrasjoner",
      integrations_desc: "Koble dine verktøy og plattformer",
      support: "Støtte",
      support_desc: "Plexicus gir omfattende støtte for å hjelpe deg med å få mest mulig ut av vår plattform.",
      title: "Ressurser",
      youtube_channel: "YouTube Kanal",
      youtube_channel_desc: "Videoveiledninger og webinarer"
    },
    solutions: {
      agencies: "Byråer",
      agencies_desc: "Sikkerhet for digitale og markedsføringsbyråer",
      enterprise: "Bedrift",
      enterprise_desc: "Omfattende sikkerhet for store organisasjoner",
      explore: "Utforsk våre løsninger",
      fintech: "FinTech",
      fintech_desc: "Sikkerhetsløsninger for finansiell teknologi",
      government: "Regjering",
      government_desc: "Sikkerhetsløsninger for offentlige etater",
      group_companies: "Konsernselskaper",
      group_companies_desc: "Løsninger for konserngrupper og holdingselskaper",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatible sikkerhetsløsninger",
      hrtech: "HRTech",
      hrtech_desc: "Sikkerhet for HR-teknologi",
      legal_desc: "Sikkerhet for juridiske selskaper",
      legaltech: "LegalTech",
      manufacturing: "Produksjon",
      manufacturing_desc: "Sikkerhet for industrielle og IoT-systemer",
      mobile_apps: "Mobilapper",
      mobile_apps_desc: "Sikkerhet for iOS- og Android-applikasjoner",
      retailtech: "RetailTech",
      retailtech_desc: "Sikkerhet for e-handel og detaljhandelsplattformer",
      startups: "Oppstartsbedrifter",
      startups_desc: "Skalerbar sikkerhet for voksende selskaper",
      title: "Løsninger"
    }
  }
}, hu = ni.footer, gu = ni.nav;
const mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni,
  footer: hu,
  nav: gu
}, Symbol.toStringTag, { value: "Module" }));
var ii = {
  footer: {
    policies: {
      legal_notice: "Nota prawna",
      management_policy: "Polityka zarządzania",
      privacy_policy: "Polityka prywatności"
    },
    readiness: "Gotowość SOC2 Typ II",
    sections: {
      company: {
        links: {
          about_us: "O nas",
          careers: "Kariera",
          contact: "Kontakt",
          privacy_policy: "Polityka prywatności"
        },
        title: "Firma"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Korzyści",
          ciem: "CIEM",
          container_security: "Bezpieczeństwo kontenerów",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Przegląd platformy",
          pricing: "Cennik",
          use_cases: "Przypadki użycia"
        },
        title: "Produkty"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Studium przypadków",
          documentation: "Dokumentacja",
          security_resources: "Zasoby bezpieczeństwa"
        },
        title: "Zasoby"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Podnieś swoją strategię cyberbezpieczeństwa z Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "Odwołania API",
      api_references_desc: "Kompleksowa dokumentacja API",
      documentation: "Dokumentacja",
      documentation_desc: "Przewodniki techniczne i odniesienia",
      github_apps: "Aplikacje GitHub",
      github_apps_desc: "Integracja Plexicus z Twoimi repozytoriami",
      plexalyzer_action: "Akcja Plexalyzer",
      plexalyzer_action_desc: "Automatyzacja bezpieczeństwa w Twoim pipeline CI/CD",
      title: "Deweloperzy"
    },
    get_started: "Rozpocznij",
    languages: "Języki",
    login: "Zaloguj się",
    pricing: "Cennik",
    product: {
      aspm: "ASPM",
      aspm_desc: "Zarządzanie postawą bezpieczeństwa aplikacji",
      benefits: "Korzyści",
      benefits_desc: "Zobacz, jak Plexicus przekształca bezpieczeństwo",
      ciem: "CIEM",
      ciem_desc: "Zarządzanie uprawnieniami infrastruktury chmurowej",
      container_security: "Bezpieczeństwo kontenerów",
      container_security_desc: "Bezpieczeństwo kontenerów i Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Zarządzanie postawą bezpieczeństwa chmury",
      cwpp: "CWPP",
      cwpp_desc: "Platforma ochrony obciążeń chmurowych",
      explore: "Odkryj nasz produkt",
      platform_overview: "Przegląd platformy",
      platform_overview_desc: "Zunifikowana platforma CNAPP",
      title: "Produkt",
      use_cases: "Przypadki użycia",
      use_cases_desc: "Przykłady wdrożeń w rzeczywistych sytuacjach"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Najnowsze wiadomości i spostrzeżenia dotyczące bezpieczeństwa",
      branding_assets: "Zasoby marki",
      branding_assets_desc: "Logotypy i wytyczne dotyczące marki",
      changelogs: "Dzienniki zmian",
      changelogs_desc: "Najnowsze aktualizacje produktu",
      comparison_overview: "Przegląd porównawczy",
      comparison_overview_desc: "Zobacz, jak Plexicus wypada w porównaniu z innymi narzędziami bezpieczeństwa",
      explore: "Odkryj nasze zasoby",
      feature_requests: "Prośby o funkcje",
      feature_requests_desc: "Zgłaszaj i głosuj na nowe funkcje",
      integrations: "Integracje",
      integrations_desc: "Połącz swoje narzędzia i platformy",
      support: "Wsparcie",
      support_desc: "Plexicus zapewnia kompleksowe wsparcie, aby pomóc Ci w pełni wykorzystać naszą platformę.",
      title: "Zasoby",
      youtube_channel: "Kanał YouTube",
      youtube_channel_desc: "Samouczki wideo i webinaria"
    },
    solutions: {
      agencies: "Agencje",
      agencies_desc: "Bezpieczeństwo dla agencji cyfrowych i marketingowych",
      enterprise: "Przedsiębiorstwa",
      enterprise_desc: "Kompleksowe bezpieczeństwo dla dużych organizacji",
      explore: "Odkryj nasze rozwiązania",
      fintech: "FinTech",
      fintech_desc: "Rozwiązania bezpieczeństwa dla technologii finansowych",
      government: "Rząd",
      government_desc: "Rozwiązania bezpieczeństwa dla agencji rządowych",
      group_companies: "Grupy firm",
      group_companies_desc: "Rozwiązania dla grup korporacyjnych i holdingów",
      healthtech: "HealthTech",
      healthtech_desc: "Rozwiązania bezpieczeństwa zgodne z HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Bezpieczeństwo dla technologii zasobów ludzkich",
      legal_desc: "Bezpieczeństwo dla firm prawniczych",
      legaltech: "LegalTech",
      manufacturing: "Produkcja",
      manufacturing_desc: "Bezpieczeństwo dla systemów przemysłowych i IoT",
      mobile_apps: "Aplikacje mobilne",
      mobile_apps_desc: "Bezpieczeństwo dla aplikacji iOS i Android",
      retailtech: "RetailTech",
      retailtech_desc: "Bezpieczeństwo dla platform e-commerce i detalicznych",
      startups: "Startupy",
      startups_desc: "Skalowalne bezpieczeństwo dla rozwijających się firm",
      title: "Rozwiązania"
    }
  }
}, vu = ii.footer, yu = ii.nav;
const xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii,
  footer: vu,
  nav: yu
}, Symbol.toStringTag, { value: "Module" }));
var si = {
  footer: {
    policies: {
      legal_notice: "Aviso Legal",
      management_policy: "Política de Gestão",
      privacy_policy: "Política de Privacidade"
    },
    readiness: "Prontidão SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Sobre Nós",
          careers: "Carreiras",
          contact: "Contato",
          privacy_policy: "Política de Privacidade"
        },
        title: "Empresa"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Benefícios",
          ciem: "CIEM",
          container_security: "Segurança de Contêiner",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Visão Geral da Plataforma",
          pricing: "Preços",
          use_cases: "Casos de Uso"
        },
        title: "Produtos"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Estudos de Caso",
          documentation: "Documentação",
          security_resources: "Recursos de Segurança"
        },
        title: "Recursos"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleve sua estratégia de cibersegurança com Plexicus"
  },
  nav: {
    contact: "Contato",
    developers: {
      api_references: "Referências de API",
      api_references_desc: "Documentação abrangente de API",
      documentation: "Documentação",
      documentation_desc: "Guias técnicos e referências",
      github_apps: "Aplicativos GitHub",
      github_apps_desc: "Integre o Plexicus com seus repositórios",
      plexalyzer_action: "Ação Plexalyzer",
      plexalyzer_action_desc: "Automatize a segurança em seu pipeline CI/CD",
      title: "Desenvolvedores"
    },
    get_started: "Comece Agora",
    languages: "Idiomas",
    login: "Login",
    pricing: "Preços",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestão de Postura de Segurança de Aplicações",
      benefits: "Benefícios",
      benefits_desc: "Veja como o Plexicus transforma a segurança",
      ciem: "CIEM",
      ciem_desc: "Gestão de Direitos de Infraestrutura em Nuvem",
      container_security: "Segurança de Contêiner",
      container_security_desc: "Segurança de contêiner e Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestão de Postura de Segurança em Nuvem",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Proteção de Carga de Trabalho em Nuvem",
      explore: "Explore nosso produto",
      platform_overview: "Visão Geral da Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      title: "Produto",
      use_cases: "Casos de Uso",
      use_cases_desc: "Exemplos de implementação no mundo real"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Últimas notícias e insights de segurança",
      branding_assets: "Ativos de Marca",
      branding_assets_desc: "Logos e diretrizes de marca",
      changelogs: "Registros de Alterações",
      changelogs_desc: "Últimas atualizações de produtos",
      comparison_overview: "Visão Geral de Comparação",
      comparison_overview_desc: "Veja como o Plexicus se compara a outras ferramentas de segurança",
      explore: "Explore nossos recursos",
      feature_requests: "Solicitações de Recursos",
      feature_requests_desc: "Envie e vote em novos recursos",
      integrations: "Integrações",
      integrations_desc: "Conecte suas ferramentas e plataformas",
      support: "Suporte",
      support_desc: "O Plexicus oferece suporte abrangente para ajudá-lo a aproveitar ao máximo nossa plataforma.",
      title: "Recursos",
      youtube_channel: "Canal do YouTube",
      youtube_channel_desc: "Tutoriais em vídeo e webinars"
    },
    solutions: {
      agencies: "Agências",
      agencies_desc: "Segurança para agências digitais e de marketing",
      enterprise: "Empresa",
      enterprise_desc: "Segurança abrangente para grandes organizações",
      explore: "Explore nossas soluções",
      fintech: "FinTech",
      fintech_desc: "Soluções de segurança para tecnologia financeira",
      government: "Governo",
      government_desc: "Soluções de segurança para agências governamentais",
      group_companies: "Empresas do Grupo",
      group_companies_desc: "Soluções para grupos corporativos e holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Soluções de segurança compatíveis com HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Segurança para tecnologia de recursos humanos",
      legal_desc: "Segurança para empresas jurídicas",
      legaltech: "LegalTech",
      manufacturing: "Manufatura",
      manufacturing_desc: "Segurança para sistemas industriais e IoT",
      mobile_apps: "Aplicativos Móveis",
      mobile_apps_desc: "Segurança para aplicativos iOS e Android",
      retailtech: "RetailTech",
      retailtech_desc: "Segurança para plataformas de e-commerce e varejo",
      startups: "Startups",
      startups_desc: "Segurança escalável para empresas em crescimento",
      title: "Soluções"
    }
  }
}, bu = si.footer, _u = si.nav;
const wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: si,
  footer: bu,
  nav: _u
}, Symbol.toStringTag, { value: "Module" }));
var oi = {
  footer: {
    policies: {
      legal_notice: "Juridiskt meddelande",
      management_policy: "Ledningspolicy",
      privacy_policy: "Integritetspolicy"
    },
    readiness: "SOC2 Typ II Beredskap",
    sections: {
      company: {
        links: {
          about_us: "Om oss",
          careers: "Karriär",
          contact: "Kontakt",
          privacy_policy: "Integritetspolicy"
        },
        title: "Företag"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fördelar",
          ciem: "CIEM",
          container_security: "Containersäkerhet",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformöversikt",
          pricing: "Prissättning",
          use_cases: "Användningsfall"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blogg",
          case_studies: "Fallstudier",
          documentation: "Dokumentation",
          security_resources: "Säkerhetsresurser"
        },
        title: "Resurser"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Höj din cybersäkerhetsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-referenser",
      api_references_desc: "Omfattande API-dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Tekniska guider och referenser",
      github_apps: "GitHub-appar",
      github_apps_desc: "Integrera Plexicus med dina arkiv",
      plexalyzer_action: "Plexalyzer-åtgärd",
      plexalyzer_action_desc: "Automatisera säkerhet i din CI/CD-pipeline",
      title: "Utvecklare"
    },
    get_started: "Kom igång",
    languages: "Språk",
    login: "Logga in",
    pricing: "Prissättning",
    product: {
      aspm: "ASPM",
      aspm_desc: "Hantering av applikationssäkerhetsläge",
      benefits: "Fördelar",
      benefits_desc: "Se hur Plexicus förändrar säkerheten",
      ciem: "CIEM",
      ciem_desc: "Hantering av molninfrastrukturens rättigheter",
      container_security: "Containersäkerhet",
      container_security_desc: "Säkerhet för container och Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Hantering av molnsäkerhetsläge",
      cwpp: "CWPP",
      cwpp_desc: "Plattform för skydd av molnarbetsbelastning",
      explore: "Utforska vår produkt",
      platform_overview: "Plattformöversikt",
      platform_overview_desc: "Enhetlig CNAPP-plattform",
      title: "Produkt",
      use_cases: "Användningsfall",
      use_cases_desc: "Exempel på verklig implementering"
    },
    resources: {
      blog: "Blogg",
      blog_desc: "Senaste nyheterna och säkerhetsinsikter",
      branding_assets: "Varumärkesresurser",
      branding_assets_desc: "Logotyper och varumärkesriktlinjer",
      changelogs: "Ändringsloggar",
      changelogs_desc: "Senaste produktuppdateringarna",
      comparison_overview: "Jämförelseöversikt",
      comparison_overview_desc: "Se hur Plexicus jämförs med andra säkerhetsverktyg",
      explore: "Utforska våra resurser",
      feature_requests: "Funktionsförfrågningar",
      feature_requests_desc: "Skicka in och rösta på nya funktioner",
      integrations: "Integrationer",
      integrations_desc: "Anslut dina verktyg och plattformar",
      support: "Support",
      support_desc: "Plexicus erbjuder omfattande support för att hjälpa dig att få ut det mesta av vår plattform.",
      title: "Resurser",
      youtube_channel: "YouTube-kanal",
      youtube_channel_desc: "Videotutorials och webbseminarier"
    },
    solutions: {
      agencies: "Byråer",
      agencies_desc: "Säkerhet för digitala och marknadsföringsbyråer",
      enterprise: "Företag",
      enterprise_desc: "Omfattande säkerhet för stora organisationer",
      explore: "Utforska våra lösningar",
      fintech: "FinTech",
      fintech_desc: "Säkerhetslösningar för finansiell teknologi",
      government: "Regering",
      government_desc: "Säkerhetslösningar för myndigheter",
      group_companies: "Koncernföretag",
      group_companies_desc: "Lösningar för företagsgrupper och holdingbolag",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatibla säkerhetslösningar",
      hrtech: "HRTech",
      hrtech_desc: "Säkerhet för HR-teknologi",
      legal_desc: "Säkerhet för juridiska företag",
      legaltech: "LegalTech",
      manufacturing: "Tillverkning",
      manufacturing_desc: "Säkerhet för industriella och IoT-system",
      mobile_apps: "Mobilappar",
      mobile_apps_desc: "Säkerhet för iOS- och Android-applikationer",
      retailtech: "RetailTech",
      retailtech_desc: "Säkerhet för e-handels- och detaljhandelsplattformar",
      startups: "Startups",
      startups_desc: "Skalbar säkerhet för växande företag",
      title: "Lösningar"
    }
  }
}, ku = oi.footer, Su = oi.nav;
const Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oi,
  footer: ku,
  nav: Su
}, Symbol.toStringTag, { value: "Module" }));
var ai = {
  footer: {
    policies: {
      legal_notice: "Hukuki Bildirim",
      management_policy: "Yönetim Politikası",
      privacy_policy: "Gizlilik Politikası"
    },
    readiness: "SOC2 Tip II Hazırlığı",
    sections: {
      company: {
        links: {
          about_us: "Hakkımızda",
          careers: "Kariyer",
          contact: "İletişim",
          privacy_policy: "Gizlilik Politikası"
        },
        title: "Şirket"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Faydalar",
          ciem: "CIEM",
          container_security: "Konteyner Güvenliği",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platform Genel Bakış",
          pricing: "Fiyatlandırma",
          use_cases: "Kullanım Senaryoları"
        },
        title: "Ürünler"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Vaka Çalışmaları",
          documentation: "Dokümantasyon",
          security_resources: "Güvenlik Kaynakları"
        },
        title: "Kaynaklar"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Plexicus ile siber güvenlik stratejinizi yükseltin"
  },
  nav: {
    contact: "İletişim",
    developers: {
      api_references: "API Referansları",
      api_references_desc: "Kapsamlı API dokümantasyonu",
      documentation: "Dokümantasyon",
      documentation_desc: "Teknik kılavuzlar ve referanslar",
      github_apps: "GitHub Uygulamaları",
      github_apps_desc: "Plexicus'u depolarınızla entegre edin",
      plexalyzer_action: "Plexalyzer Eylemi",
      plexalyzer_action_desc: "CI/CD hattınızda güvenliği otomatikleştirin",
      title: "Geliştiriciler"
    },
    get_started: "Başlayın",
    languages: "Diller",
    login: "Giriş",
    pricing: "Fiyatlandırma",
    product: {
      aspm: "ASPM",
      aspm_desc: "Uygulama Güvenliği Duruş Yönetimi",
      benefits: "Faydalar",
      benefits_desc: "Plexicus'un güvenliği nasıl dönüştürdüğünü görün",
      ciem: "CIEM",
      ciem_desc: "Bulut Altyapısı Yetki Yönetimi",
      container_security: "Konteyner Güvenliği",
      container_security_desc: "Konteyner ve Kubernetes güvenliği",
      cspm: "CSPM",
      cspm_desc: "Bulut Güvenliği Duruş Yönetimi",
      cwpp: "CWPP",
      cwpp_desc: "Bulut İş Yükü Koruma Platformu",
      explore: "Ürünümüzü keşfedin",
      platform_overview: "Platform Genel Bakış",
      platform_overview_desc: "Birleşik CNAPP platformu",
      title: "Ürün",
      use_cases: "Kullanım Senaryoları",
      use_cases_desc: "Gerçek dünya uygulama örnekleri"
    },
    resources: {
      blog: "Blog",
      blog_desc: "En son haberler ve güvenlik içgörüleri",
      branding_assets: "Marka Varlıkları",
      branding_assets_desc: "Logolar ve marka yönergeleri",
      changelogs: "Değişiklik Günlükleri",
      changelogs_desc: "En son ürün güncellemeleri",
      comparison_overview: "Karşılaştırma Genel Bakış",
      comparison_overview_desc: "Plexicus'un diğer güvenlik araçlarıyla nasıl karşılaştırıldığını görün",
      explore: "Kaynaklarımızı keşfedin",
      feature_requests: "Özellik Talepleri",
      feature_requests_desc: "Yeni özellikler için oy verin ve gönderin",
      integrations: "Entegrasyonlar",
      integrations_desc: "Araçlarınızı ve platformlarınızı bağlayın",
      support: "Destek",
      support_desc: "Plexicus, platformumuzdan en iyi şekilde yararlanmanıza yardımcı olmak için kapsamlı destek sağlar.",
      title: "Kaynaklar",
      youtube_channel: "YouTube Kanalı",
      youtube_channel_desc: "Video eğitimleri ve web seminerleri"
    },
    solutions: {
      agencies: "Ajanslar",
      agencies_desc: "Dijital ve pazarlama ajansları için güvenlik",
      enterprise: "Kurumsal",
      enterprise_desc: "Büyük organizasyonlar için kapsamlı güvenlik",
      explore: "Çözümlerimizi keşfedin",
      fintech: "FinTech",
      fintech_desc: "Finansal teknoloji için güvenlik çözümleri",
      government: "Devlet",
      government_desc: "Devlet kurumları için güvenlik çözümleri",
      group_companies: "Grup Şirketleri",
      group_companies_desc: "Kurumsal gruplar ve holdingler için çözümler",
      healthtech: "Sağlık Teknolojisi",
      healthtech_desc: "HIPAA uyumlu güvenlik çözümleri",
      hrtech: "İnsan Kaynakları Teknolojisi",
      hrtech_desc: "İnsan kaynakları teknolojisi için güvenlik",
      legal_desc: "Hukuk şirketleri için güvenlik",
      legaltech: "Hukuk Teknolojisi",
      manufacturing: "Üretim",
      manufacturing_desc: "Endüstriyel ve IoT sistemleri için güvenlik",
      mobile_apps: "Mobil Uygulamalar",
      mobile_apps_desc: "iOS ve Android uygulamaları için güvenlik",
      retailtech: "Perakende Teknolojisi",
      retailtech_desc: "E-ticaret ve perakende platformları için güvenlik",
      startups: "Girişimler",
      startups_desc: "Büyüyen şirketler için ölçeklenebilir güvenlik",
      title: "Çözümler"
    }
  }
}, ju = ai.footer, Cu = ai.nav;
const Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ai,
  footer: ju,
  nav: Cu
}, Symbol.toStringTag, { value: "Module" }));
var ci = {
  footer: {
    policies: {
      legal_notice: "法律声明",
      management_policy: "管理政策",
      privacy_policy: "隐私政策"
    },
    readiness: "SOC2 Type II 准备",
    sections: {
      company: {
        links: {
          about_us: "关于我们",
          careers: "职业",
          contact: "联系",
          privacy_policy: "隐私政策"
        },
        title: "公司"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "优势",
          ciem: "CIEM",
          container_security: "容器安全",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "平台概览",
          pricing: "定价",
          use_cases: "使用案例"
        },
        title: "产品"
      },
      resources: {
        links: {
          blog: "博客",
          case_studies: "案例研究",
          documentation: "文档",
          security_resources: "安全资源"
        },
        title: "资源"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "提升您的网络安全策略与Plexicus"
  },
  nav: {
    contact: "联系",
    developers: {
      api_references: "API参考",
      api_references_desc: "全面的API文档",
      documentation: "文档",
      documentation_desc: "技术指南和参考",
      github_apps: "GitHub应用",
      github_apps_desc: "将Plexicus与您的存储库集成",
      plexalyzer_action: "Plexalyzer操作",
      plexalyzer_action_desc: "在您的CI/CD管道中自动化安全",
      title: "开发者"
    },
    get_started: "开始使用",
    languages: "语言",
    login: "登录",
    pricing: "定价",
    product: {
      aspm: "ASPM",
      aspm_desc: "应用安全态势管理",
      benefits: "优势",
      benefits_desc: "看看Plexicus如何改变安全性",
      ciem: "CIEM",
      ciem_desc: "云基础设施权限管理",
      container_security: "容器安全",
      container_security_desc: "容器和Kubernetes安全",
      cspm: "CSPM",
      cspm_desc: "云安全态势管理",
      cwpp: "CWPP",
      cwpp_desc: "云工作负载保护平台",
      explore: "探索我们的产品",
      platform_overview: "平台概览",
      platform_overview_desc: "统一的CNAPP平台",
      title: "产品",
      use_cases: "使用案例",
      use_cases_desc: "实际应用示例"
    },
    resources: {
      blog: "博客",
      blog_desc: "最新新闻和安全见解",
      branding_assets: "品牌资产",
      branding_assets_desc: "标志和品牌指南",
      changelogs: "更新日志",
      changelogs_desc: "最新产品更新",
      comparison_overview: "比较概览",
      comparison_overview_desc: "看看Plexicus与其他安全工具的比较",
      explore: "探索我们的资源",
      feature_requests: "功能请求",
      feature_requests_desc: "提交和投票新功能",
      integrations: "集成",
      integrations_desc: "连接您的工具和平台",
      support: "支持",
      support_desc: "Plexicus提供全面支持，帮助您充分利用我们的平台。",
      title: "资源",
      youtube_channel: "YouTube频道",
      youtube_channel_desc: "视频教程和网络研讨会"
    },
    solutions: {
      agencies: "代理机构",
      agencies_desc: "数字和营销代理机构的安全性",
      enterprise: "企业",
      enterprise_desc: "大型组织的全面安全",
      explore: "探索我们的解决方案",
      fintech: "金融科技",
      fintech_desc: "金融科技的安全解决方案",
      government: "政府",
      government_desc: "政府机构的安全解决方案",
      group_companies: "集团公司",
      group_companies_desc: "企业集团和控股公司的解决方案",
      healthtech: "健康科技",
      healthtech_desc: "符合HIPAA的安全解决方案",
      hrtech: "人力资源科技",
      hrtech_desc: "人力资源技术的安全性",
      legal_desc: "法律公司的安全性",
      legaltech: "法律科技",
      manufacturing: "制造业",
      manufacturing_desc: "工业和物联网系统的安全性",
      mobile_apps: "移动应用",
      mobile_apps_desc: "iOS和Android应用的安全性",
      retailtech: "零售科技",
      retailtech_desc: "电子商务和零售平台的安全性",
      startups: "初创公司",
      startups_desc: "为成长型公司的可扩展安全性",
      title: "解决方案"
    }
  }
}, Ou = ci.footer, Iu = ci.nav;
const Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci,
  footer: Ou,
  nav: Iu
}, Symbol.toStringTag, { value: "Module" }));
function Nn(e, t = "") {
  let r = {};
  if (e && typeof e == "object") {
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        const i = n === "default" && !t ? "" : t ? `${t}.${n}` : n, s = e[n];
        Array.isArray(s) ? (r[i] = s, s.forEach((o, a) => {
          typeof o == "object" && o !== null ? r = {
            ...r,
            ...Nn(o, `${i}.${a}`)
          } : r[`${i}.${a}`] = o;
        })) : typeof s == "object" && s !== null ? r = { ...r, ...Nn(s, i) } : r[i] = s;
      }
  }
  return r;
}
const Xe = {}, Qi = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Il, "./cs/translation.yaml": zl, "./da/translation.yaml": Ml, "./de/translation.yaml": Dl, "./en/translation.yaml": Wl, "./es/translation.yaml": Vl, "./fi/translation.yaml": Yl, "./fr/translation.yaml": Xl, "./he/translation.yaml": tu, "./id/translation.yaml": iu, "./it/translation.yaml": au, "./ja/translation.yaml": uu, "./nl/translation.yaml": fu, "./no/translation.yaml": mu, "./pl/translation.yaml": xu, "./pt/translation.yaml": wu, "./sv/translation.yaml": Pu, "./tr/translation.yaml": Eu, "./zh/translation.yaml": Au });
for (const e in Qi) {
  const t = Qi[e], n = e.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (Xe[n] || (Xe[n] = {}), typeof t != "object" || t === null) {
    console.warn(`File ${e} is not a valid object, skipping.`);
    continue;
  }
  Xe[n].translation || (Xe[n].translation = {}), Object.assign(Xe[n].translation, Nn(t));
}
const Nu = Object.keys(Xe);
me.use(nl).init({
  lng: "en",
  supportedLngs: Nu,
  resources: Xe,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const mo = "https://www.plexicus.ai", vo = "https://blog.plexicus.ai", dr = "https://app.plexicus.ai";
function zu(e) {
  const [t, r] = ye(!1);
  return _e(() => {
    const n = window.matchMedia(e), i = () => r(n.matches);
    return i(), n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [e]), t;
}
function Lu({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: fe(
        "file:text-foreground placeholder:text-white/70 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
function yo(e) {
  const { currentLang: t = "en", debounceMs: r = 1e3, minQueryLength: n = 2, blogUrl: i, webUrl: s } = e, [o, a] = ye(""), [u, l] = ye([]), [p, d] = ye(!1), [g, f] = ye(!1), h = At(null);
  _e(() => {
    if (h.current && clearTimeout(h.current), o.trim().length < n) {
      l([]), f(!1);
      return;
    }
    return h.current = setTimeout(async () => {
      await m(o.trim());
    }, r), () => {
      h.current && clearTimeout(h.current);
    };
  }, [o, t, r, n]);
  const m = async (P) => {
    d(!0);
    const w = t === "en" ? "" : "/";
    try {
      const S = [], [z, E] = await Promise.allSettled([
        fetch(`${s}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json()),
        fetch(`${i}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json())
      ]);
      if (z.status === "fulfilled") {
        const T = _(z.value.pages || [], P);
        S.push(...T.map((A) => ({ ...A, lang: t, path: A.path === "/" && t === "en" ? s : `${s}${w}${A.path}`, type: "page" })));
      }
      if (E.status === "fulfilled") {
        const T = _(E.value.pages || [], P);
        S.push(...T.map((A) => ({ ...A, lang: t, path: `${i}/${A.path}`, type: "blog" })));
      }
      if (S.length < 3 && t !== "en") {
        const [T, A] = await Promise.allSettled([
          fetch(`${s}/api/en/pages.json?t=${Date.now()}`).then((V) => V.json()),
          fetch(`${i}/api/en/pages.json?t=${Date.now()}`).then((V) => V.json())
        ]);
        if (T.status === "fulfilled") {
          const V = _(T.value.pages || [], P);
          S.push(...V.map((J) => ({ ...J, lang: "en", path: J.path === "/" ? s : `${s}${w}${J.path}`, type: "page" })));
        }
        if (A.status === "fulfilled") {
          const V = _(A.value.pages || [], P);
          S.push(...V.map((J) => ({ ...J, lang: "en", path: `${i}/${J.path}`, type: "blog" })));
        }
      }
      const C = S.filter((T, A, V) => A === V.findIndex((J) => J.path === T.path)).slice(0, 8);
      l(C), f(C.length > 0);
    } catch (S) {
      console.error("Search error:", S), l([]), f(!1);
    } finally {
      d(!1);
    }
  }, _ = (P, w) => {
    const S = w.toLowerCase();
    return P.filter((z) => {
      var A;
      const E = z.title.toLowerCase().includes(S), C = z.description.toLowerCase().includes(S), T = (A = z.keywords) == null ? void 0 : A.some((V) => V.toLowerCase().includes(S));
      return E || C || T;
    });
  }, j = () => {
    a(""), l([]), f(!1);
  }, y = (P) => {
    window.location.href = `${P.path}`, f(!1);
  };
  return _e(() => {
    m("platform");
  }, []), {
    query: o,
    setQuery: a,
    results: u,
    isLoading: p,
    isOpen: g,
    setIsOpen: f,
    clearSearch: j,
    handleResultClick: y
  };
}
function Tu({ currentLang: e = "en", onClose: t, blogUrl: r, webUrl: n }) {
  const i = At(null), { query: s, setQuery: o, results: a, isLoading: u, clearSearch: l, handleResultClick: p } = yo({ currentLang: e, blogUrl: r, webUrl: n }), { t: d } = Fr(), g = () => {
    l(), t();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "z-50 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ c.jsxs("div", { className: " z-50 h-full bg-background ", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ c.jsx(Js, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ c.jsx(
          Lu,
          {
            ref: i,
            type: "text",
            placeholder: d("search.placeholder"),
            value: s,
            onChange: (f) => o(f.target.value),
            className: "pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
          }
        )
      ] }),
      a.length > 0 && /* @__PURE__ */ c.jsx(Ze, { variant: "ghost", size: "icon", onClick: g, children: /* @__PURE__ */ c.jsx(tc, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "p-4 max-h-[calc(100vh-80px)] overflow-y-auto", children: u ? /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.searching") }) : a.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ c.jsx(Mu, { results: a, onClick: p }) }) : s.trim().length >= 2 ? /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.not_found") }) : /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.start_typing") }) })
  ] }) });
}
function Mu({ results: e, onClick: t }) {
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: e.map((r, n) => /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => t(r),
      className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group",
      children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ c.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: r.title }),
          /* @__PURE__ */ c.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: r.description }),
          r.keywords && r.keywords.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: r.keywords.slice(0, 3).map((i, s) => /* @__PURE__ */ c.jsx(
            "span",
            {
              className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
              children: i
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
          r.lang && /* @__PURE__ */ c.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: r.lang }),
          r.type && /* @__PURE__ */ c.jsx("span", { className: fe("text-xs rounded-sm p-1 uppercase font-mono", r.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: r.type })
        ] })
      ] })
    },
    `${r.path}-${n}`
  )) });
}
var es = 1, $u = 0.9, Ru = 0.8, Du = 0.17, nn = 0.1, sn = 0.999, Bu = 0.9999, Fu = 0.99, Hu = /[\\\/_+.#"@\[\(\{&]/, Wu = /[\\\/_+.#"@\[\(\{&]/g, Ku = /[\s-]/, xo = /[\s-]/g;
function zn(e, t, r, n, i, s, o) {
  if (s === t.length) return i === e.length ? es : Fu;
  var a = `${i},${s}`;
  if (o[a] !== void 0) return o[a];
  for (var u = n.charAt(s), l = r.indexOf(u, i), p = 0, d, g, f, h; l >= 0; ) d = zn(e, t, r, n, l + 1, s + 1, o), d > p && (l === i ? d *= es : Hu.test(e.charAt(l - 1)) ? (d *= Ru, f = e.slice(i, l - 1).match(Wu), f && i > 0 && (d *= Math.pow(sn, f.length))) : Ku.test(e.charAt(l - 1)) ? (d *= $u, h = e.slice(i, l - 1).match(xo), h && i > 0 && (d *= Math.pow(sn, h.length))) : (d *= Du, i > 0 && (d *= Math.pow(sn, l - i))), e.charAt(l) !== t.charAt(s) && (d *= Bu)), (d < nn && r.charAt(l - 1) === n.charAt(s + 1) || n.charAt(s + 1) === n.charAt(s) && r.charAt(l - 1) !== n.charAt(s)) && (g = zn(e, t, r, n, l + 1, s + 2, o), g * nn > d && (d = g * nn)), d > p && (p = d), l = r.indexOf(u, l + 1);
  return o[a] = p, p;
}
function ts(e) {
  return e.toLowerCase().replace(xo, " ");
}
function Gu(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, zn(e, t, ts(e), ts(t), 0, 0, {});
}
function Ve(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function rs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function st(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const s = rs(i, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          typeof s == "function" ? s() : rs(e[i], null);
        }
      };
  };
}
function dt(...e) {
  return x.useCallback(st(...e), e);
}
function Vu(e, t) {
  const r = x.createContext(t), n = (s) => {
    const { children: o, ...a } = s, u = x.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ c.jsx(r.Provider, { value: u, children: o });
  };
  n.displayName = e + "Provider";
  function i(s) {
    const o = x.useContext(r);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, i];
}
function Uu(e, t = []) {
  let r = [];
  function n(s, o) {
    const a = x.createContext(o), u = r.length;
    r = [...r, o];
    const l = (d) => {
      var j;
      const { scope: g, children: f, ...h } = d, m = ((j = g == null ? void 0 : g[e]) == null ? void 0 : j[u]) || a, _ = x.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ c.jsx(m.Provider, { value: _, children: f });
    };
    l.displayName = s + "Provider";
    function p(d, g) {
      var m;
      const f = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[u]) || a, h = x.useContext(f);
      if (h) return h;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [l, p];
  }
  const i = () => {
    const s = r.map((o) => x.createContext(o));
    return function(a) {
      const u = (a == null ? void 0 : a[e]) || s;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return i.scopeName = e, [n, qu(i, ...t)];
}
function qu(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(s) {
      const o = n.reduce((a, { useScope: u, scopeName: l }) => {
        const d = u(s)[`__scope${l}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var er = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Yu = x[" useId ".trim().toString()] || (() => {
}), Ju = 0;
function $e(e) {
  const [t, r] = x.useState(Yu());
  return er(() => {
    r((n) => n ?? String(Ju++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Zu = x[" useInsertionEffect ".trim().toString()] || er;
function Xu({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [i, s, o] = Qu({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, u = a ? e : i;
  {
    const p = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = p.current;
      d !== a && console.warn(
        `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = a;
    }, [a, n]);
  }
  const l = x.useCallback(
    (p) => {
      var d;
      if (a) {
        const g = ed(p) ? p(e) : p;
        g !== e && ((d = o.current) == null || d.call(o, g));
      } else
        s(p);
    },
    [a, e, s, o]
  );
  return [u, l];
}
function Qu({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = x.useState(e), i = x.useRef(r), s = x.useRef(t);
  return Zu(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var o;
    i.current !== r && ((o = s.current) == null || o.call(s, r), i.current = r);
  }, [r, i]), [r, n, s];
}
function ed(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function bo(e) {
  const t = /* @__PURE__ */ td(e), r = x.forwardRef((n, i) => {
    const { children: s, ...o } = n, a = x.Children.toArray(s), u = a.find(nd);
    if (u) {
      const l = u.props.children, p = a.map((d) => d === u ? x.Children.count(l) > 1 ? x.Children.only(null) : x.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ c.jsx(t, { ...o, ref: i, children: x.isValidElement(l) ? x.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...o, ref: i, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function td(e) {
  const t = x.forwardRef((r, n) => {
    const { children: i, ...s } = r;
    if (x.isValidElement(i)) {
      const o = sd(i), a = id(s, i.props);
      return i.type !== x.Fragment && (a.ref = n ? st(n, o) : o), x.cloneElement(i, a);
    }
    return x.Children.count(i) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rd = Symbol("radix.slottable");
function nd(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rd;
}
function id(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? i && s ? r[n] = (...a) => {
      const u = s(...a);
      return i(...a), u;
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...s } : n === "className" && (r[n] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function sd(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var od = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], he = od.reduce((e, t) => {
  const r = /* @__PURE__ */ bo(`Primitive.${t}`), n = x.forwardRef((i, s) => {
    const { asChild: o, ...a } = i, u = o ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(u, { ...a, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function ad(e, t) {
  e && sc.flushSync(() => e.dispatchEvent(t));
}
function tr(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function cd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e);
  x.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var ld = "DismissableLayer", Ln = "dismissableLayer.update", ud = "dismissableLayer.pointerDownOutside", dd = "dismissableLayer.focusOutside", ns, _o = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), wo = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: s,
      onInteractOutside: o,
      onDismiss: a,
      ...u
    } = e, l = x.useContext(_o), [p, d] = x.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = x.useState({}), h = dt(t, (E) => d(E)), m = Array.from(l.layers), [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), j = m.indexOf(_), y = p ? m.indexOf(p) : -1, P = l.layersWithOutsidePointerEventsDisabled.size > 0, w = y >= j, S = hd((E) => {
      const C = E.target, T = [...l.branches].some((A) => A.contains(C));
      !w || T || (i == null || i(E), o == null || o(E), E.defaultPrevented || a == null || a());
    }, g), z = gd((E) => {
      const C = E.target;
      [...l.branches].some((A) => A.contains(C)) || (s == null || s(E), o == null || o(E), E.defaultPrevented || a == null || a());
    }, g);
    return cd((E) => {
      y === l.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, g), x.useEffect(() => {
      if (p)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ns = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(p)), l.layers.add(p), is(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = ns);
        };
    }, [p, g, r, l]), x.useEffect(() => () => {
      p && (l.layers.delete(p), l.layersWithOutsidePointerEventsDisabled.delete(p), is());
    }, [p, l]), x.useEffect(() => {
      const E = () => f({});
      return document.addEventListener(Ln, E), () => document.removeEventListener(Ln, E);
    }, []), /* @__PURE__ */ c.jsx(
      he.div,
      {
        ...u,
        ref: h,
        style: {
          pointerEvents: P ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ve(e.onFocusCapture, z.onFocusCapture),
        onBlurCapture: Ve(e.onBlurCapture, z.onBlurCapture),
        onPointerDownCapture: Ve(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
wo.displayName = ld;
var pd = "DismissableLayerBranch", fd = x.forwardRef((e, t) => {
  const r = x.useContext(_o), n = x.useRef(null), i = dt(t, n);
  return x.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ c.jsx(he.div, { ...e, ref: i });
});
fd.displayName = pd;
function hd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), n = x.useRef(!1), i = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !n.current) {
        let u = function() {
          ko(
            ud,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = u, t.addEventListener("click", i.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", s), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function gd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), n = x.useRef(!1);
  return x.useEffect(() => {
    const i = (s) => {
      s.target && !n.current && ko(dd, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function is() {
  const e = new CustomEvent(Ln);
  document.dispatchEvent(e);
}
function ko(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? ad(i, s) : i.dispatchEvent(s);
}
var on = "focusScope.autoFocusOnMount", an = "focusScope.autoFocusOnUnmount", ss = { bubbles: !1, cancelable: !0 }, md = "FocusScope", So = x.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: s,
    ...o
  } = e, [a, u] = x.useState(null), l = tr(i), p = tr(s), d = x.useRef(null), g = dt(t, (m) => u(m)), f = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (n) {
      let m = function(P) {
        if (f.paused || !a) return;
        const w = P.target;
        a.contains(w) ? d.current = w : He(d.current, { select: !0 });
      }, _ = function(P) {
        if (f.paused || !a) return;
        const w = P.relatedTarget;
        w !== null && (a.contains(w) || He(d.current, { select: !0 }));
      }, j = function(P) {
        if (document.activeElement === document.body)
          for (const S of P)
            S.removedNodes.length > 0 && He(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", _);
      const y = new MutationObserver(j);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", _), y.disconnect();
      };
    }
  }, [n, a, f.paused]), x.useEffect(() => {
    if (a) {
      as.add(f);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const j = new CustomEvent(on, ss);
        a.addEventListener(on, l), a.dispatchEvent(j), j.defaultPrevented || (vd(wd(Po(a)), { select: !0 }), document.activeElement === m && He(a));
      }
      return () => {
        a.removeEventListener(on, l), setTimeout(() => {
          const j = new CustomEvent(an, ss);
          a.addEventListener(an, p), a.dispatchEvent(j), j.defaultPrevented || He(m ?? document.body, { select: !0 }), a.removeEventListener(an, p), as.remove(f);
        }, 0);
      };
    }
  }, [a, l, p, f]);
  const h = x.useCallback(
    (m) => {
      if (!r && !n || f.paused) return;
      const _ = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, j = document.activeElement;
      if (_ && j) {
        const y = m.currentTarget, [P, w] = yd(y);
        P && w ? !m.shiftKey && j === w ? (m.preventDefault(), r && He(P, { select: !0 })) : m.shiftKey && j === P && (m.preventDefault(), r && He(w, { select: !0 })) : j === y && m.preventDefault();
      }
    },
    [r, n, f.paused]
  );
  return /* @__PURE__ */ c.jsx(he.div, { tabIndex: -1, ...o, ref: g, onKeyDown: h });
});
So.displayName = md;
function vd(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (He(n, { select: t }), document.activeElement !== r) return;
}
function yd(e) {
  const t = Po(e), r = os(t, e), n = os(t.reverse(), e);
  return [r, n];
}
function Po(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const i = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || i ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function os(e, t) {
  for (const r of e)
    if (!xd(r, { upTo: t })) return r;
}
function xd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function bd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && bd(e) && t && e.select();
  }
}
var as = _d();
function _d() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = cs(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = cs(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function cs(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function wd(e) {
  return e.filter((t) => t.tagName !== "A");
}
var kd = "Portal", jo = x.forwardRef((e, t) => {
  var a;
  const { container: r, ...n } = e, [i, s] = x.useState(!1);
  er(() => s(!0), []);
  const o = r || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? oc.createPortal(/* @__PURE__ */ c.jsx(he.div, { ...n, ref: t }), o) : null;
});
jo.displayName = kd;
function Sd(e, t) {
  return x.useReducer((r, n) => t[r][n] ?? r, e);
}
var Kr = (e) => {
  const { present: t, children: r } = e, n = Pd(t), i = typeof r == "function" ? r({ present: n.isPresent }) : x.Children.only(r), s = dt(n.ref, jd(i));
  return typeof r == "function" || n.isPresent ? x.cloneElement(i, { ref: s }) : null;
};
Kr.displayName = "Presence";
function Pd(e) {
  const [t, r] = x.useState(), n = x.useRef(null), i = x.useRef(e), s = x.useRef("none"), o = e ? "mounted" : "unmounted", [a, u] = Sd(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return x.useEffect(() => {
    const l = pr(n.current);
    s.current = a === "mounted" ? l : "none";
  }, [a]), er(() => {
    const l = n.current, p = i.current;
    if (p !== e) {
      const g = s.current, f = pr(l);
      e ? u("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(p && g !== f ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, u]), er(() => {
    if (t) {
      let l;
      const p = t.ownerDocument.defaultView ?? window, d = (f) => {
        const m = pr(n.current).includes(CSS.escape(f.animationName));
        if (f.target === t && m && (u("ANIMATION_END"), !i.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, g = (f) => {
        f.target === t && (s.current = pr(n.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        p.clearTimeout(l), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: x.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function pr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function jd(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var cn = 0;
function Cd() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ls()), document.body.insertAdjacentElement("beforeend", e[1] ?? ls()), cn++, () => {
      cn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), cn--;
    };
  }, []);
}
function ls() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function Co(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Ed(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, s; n < i; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pr = "right-scroll-bar-position", jr = "width-before-scroll-bar", Od = "with-scroll-bars-hidden", Id = "--removed-body-scroll-bar-size";
function ln(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ad(e, t) {
  var r = ye(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && (r.value = n, r.callback(n, i));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Nd = typeof window < "u" ? x.useLayoutEffect : x.useEffect, us = /* @__PURE__ */ new WeakMap();
function zd(e, t) {
  var r = Ad(null, function(n) {
    return e.forEach(function(i) {
      return ln(i, n);
    });
  });
  return Nd(function() {
    var n = us.get(r);
    if (n) {
      var i = new Set(n), s = new Set(e), o = r.current;
      i.forEach(function(a) {
        s.has(a) || ln(a, null);
      }), s.forEach(function(a) {
        i.has(a) || ln(a, o);
      });
    }
    us.set(r, e);
  }, [e]), r;
}
function Ld(e) {
  return e;
}
function Td(e, t) {
  t === void 0 && (t = Ld);
  var r = [], n = !1, i = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var o = t(s, n);
      return r.push(o), function() {
        r = r.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var o = r;
        r = [], o.forEach(s);
      }
      r = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var o = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(s), o = r;
      }
      var u = function() {
        var p = o;
        o = [], p.forEach(s);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), r = {
        push: function(p) {
          o.push(p), l();
        },
        filter: function(p) {
          return o = o.filter(p), r;
        }
      };
    }
  };
  return i;
}
function Md(e) {
  e === void 0 && (e = {});
  var t = Td(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var Eo = function(e) {
  var t = e.sideCar, r = Co(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return x.createElement(n, Ie({}, r));
};
Eo.isSideCarExport = !0;
function $d(e, t) {
  return e.useMedium(t), Eo;
}
var Oo = Md(), un = function() {
}, Gr = x.forwardRef(function(e, t) {
  var r = x.useRef(null), n = x.useState({
    onScrollCapture: un,
    onWheelCapture: un,
    onTouchMoveCapture: un
  }), i = n[0], s = n[1], o = e.forwardProps, a = e.children, u = e.className, l = e.removeScrollBar, p = e.enabled, d = e.shards, g = e.sideCar, f = e.noRelative, h = e.noIsolation, m = e.inert, _ = e.allowPinchZoom, j = e.as, y = j === void 0 ? "div" : j, P = e.gapMode, w = Co(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = g, z = zd([r, t]), E = Ie(Ie({}, w), i);
  return x.createElement(
    x.Fragment,
    null,
    p && x.createElement(S, { sideCar: Oo, removeScrollBar: l, shards: d, noRelative: f, noIsolation: h, inert: m, setCallbacks: s, allowPinchZoom: !!_, lockRef: r, gapMode: P }),
    o ? x.cloneElement(x.Children.only(a), Ie(Ie({}, E), { ref: z })) : x.createElement(y, Ie({}, E, { className: u, ref: z }), a)
  );
});
Gr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gr.classNames = {
  fullWidth: jr,
  zeroRight: Pr
};
var Rd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Dd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Rd();
  return t && e.setAttribute("nonce", t), e;
}
function Bd(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Fd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Hd = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Dd()) && (Bd(t, r), Fd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Wd = function() {
  var e = Hd();
  return function(t, r) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Io = function() {
  var e = Wd(), t = function(r) {
    var n = r.styles, i = r.dynamic;
    return e(n, i), null;
  };
  return t;
}, Kd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, dn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Gd = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [dn(r), dn(n), dn(i)];
}, Vd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Kd;
  var t = Gd(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Ud = Io(), Pt = "data-scroll-locked", qd = function(e, t, r, n) {
  var i = e.left, s = e.top, o = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Od, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(Pt, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Pr, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(jr, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Pr, " .").concat(Pr, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(jr, " .").concat(jr, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Pt, `] {
    `).concat(Id, ": ").concat(a, `px;
  }
`);
}, ds = function() {
  var e = parseInt(document.body.getAttribute(Pt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Yd = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Pt, (ds() + 1).toString()), function() {
      var e = ds() - 1;
      e <= 0 ? document.body.removeAttribute(Pt) : document.body.setAttribute(Pt, e.toString());
    };
  }, []);
}, Jd = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, i = n === void 0 ? "margin" : n;
  Yd();
  var s = x.useMemo(function() {
    return Vd(i);
  }, [i]);
  return x.createElement(Ud, { styles: qd(s, !t, i, r ? "" : "!important") });
}, Tn = !1;
if (typeof window < "u")
  try {
    var fr = Object.defineProperty({}, "passive", {
      get: function() {
        return Tn = !0, !0;
      }
    });
    window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
  } catch {
    Tn = !1;
  }
var mt = Tn ? { passive: !1 } : !1, Zd = function(e) {
  return e.tagName === "TEXTAREA";
}, Ao = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Zd(e) && r[t] === "visible")
  );
}, Xd = function(e) {
  return Ao(e, "overflowY");
}, Qd = function(e) {
  return Ao(e, "overflowX");
}, ps = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var i = No(e, n);
    if (i) {
      var s = zo(e, n), o = s[1], a = s[2];
      if (o > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, ep = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, tp = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, No = function(e, t) {
  return e === "v" ? Xd(t) : Qd(t);
}, zo = function(e, t) {
  return e === "v" ? ep(t) : tp(t);
}, rp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, np = function(e, t, r, n, i) {
  var s = rp(e, window.getComputedStyle(t).direction), o = s * n, a = r.target, u = t.contains(a), l = !1, p = o > 0, d = 0, g = 0;
  do {
    if (!a)
      break;
    var f = zo(e, a), h = f[0], m = f[1], _ = f[2], j = m - _ - s * h;
    (h || j) && No(e, a) && (d += j, g += h);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && a !== document.body || // self content
    u && (t.contains(a) || t === a)
  );
  return (p && Math.abs(d) < 1 || !p && Math.abs(g) < 1) && (l = !0), l;
}, hr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fs = function(e) {
  return [e.deltaX, e.deltaY];
}, hs = function(e) {
  return e && "current" in e ? e.current : e;
}, ip = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, op = 0, vt = [];
function ap(e) {
  var t = x.useRef([]), r = x.useRef([0, 0]), n = x.useRef(), i = x.useState(op++)[0], s = x.useState(Io)[0], o = x.useRef(e);
  x.useEffect(function() {
    o.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var m = Ed([e.lockRef.current], (e.shards || []).map(hs), !0).filter(Boolean);
      return m.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), m.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(m, _) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !o.current.allowPinchZoom;
    var j = hr(m), y = r.current, P = "deltaX" in m ? m.deltaX : y[0] - j[0], w = "deltaY" in m ? m.deltaY : y[1] - j[1], S, z = m.target, E = Math.abs(P) > Math.abs(w) ? "h" : "v";
    if ("touches" in m && E === "h" && z.type === "range")
      return !1;
    var C = ps(E, z);
    if (!C)
      return !0;
    if (C ? S = E : (S = E === "v" ? "h" : "v", C = ps(E, z)), !C)
      return !1;
    if (!n.current && "changedTouches" in m && (P || w) && (n.current = S), !S)
      return !0;
    var T = n.current || S;
    return np(T, _, m, T === "h" ? P : w);
  }, []), u = x.useCallback(function(m) {
    var _ = m;
    if (!(!vt.length || vt[vt.length - 1] !== s)) {
      var j = "deltaY" in _ ? fs(_) : hr(_), y = t.current.filter(function(S) {
        return S.name === _.type && (S.target === _.target || _.target === S.shadowParent) && ip(S.delta, j);
      })[0];
      if (y && y.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!y) {
        var P = (o.current.shards || []).map(hs).filter(Boolean).filter(function(S) {
          return S.contains(_.target);
        }), w = P.length > 0 ? a(_, P[0]) : !o.current.noIsolation;
        w && _.cancelable && _.preventDefault();
      }
    }
  }, []), l = x.useCallback(function(m, _, j, y) {
    var P = { name: m, delta: _, target: j, should: y, shadowParent: cp(j) };
    t.current.push(P), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== P;
      });
    }, 1);
  }, []), p = x.useCallback(function(m) {
    r.current = hr(m), n.current = void 0;
  }, []), d = x.useCallback(function(m) {
    l(m.type, fs(m), m.target, a(m, e.lockRef.current));
  }, []), g = x.useCallback(function(m) {
    l(m.type, hr(m), m.target, a(m, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return vt.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", u, mt), document.addEventListener("touchmove", u, mt), document.addEventListener("touchstart", p, mt), function() {
      vt = vt.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", u, mt), document.removeEventListener("touchmove", u, mt), document.removeEventListener("touchstart", p, mt);
    };
  }, []);
  var f = e.removeScrollBar, h = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    h ? x.createElement(s, { styles: sp(i) }) : null,
    f ? x.createElement(Jd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function cp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const lp = $d(Oo, ap);
var Lo = x.forwardRef(function(e, t) {
  return x.createElement(Gr, Ie({}, e, { ref: t, sideCar: lp }));
});
Lo.classNames = Gr.classNames;
var up = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, yt = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), mr = {}, pn = 0, To = function(e) {
  return e && (e.host || To(e.parentNode));
}, dp = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = To(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, pp = function(e, t, r, n) {
  var i = dp(t, Array.isArray(e) ? e : [e]);
  mr[r] || (mr[r] = /* @__PURE__ */ new WeakMap());
  var s = mr[r], o = [], a = /* @__PURE__ */ new Set(), u = new Set(i), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  i.forEach(l);
  var p = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (a.has(g))
        p(g);
      else
        try {
          var f = g.getAttribute(n), h = f !== null && f !== "false", m = (yt.get(g) || 0) + 1, _ = (s.get(g) || 0) + 1;
          yt.set(g, m), s.set(g, _), o.push(g), m === 1 && h && gr.set(g, !0), _ === 1 && g.setAttribute(r, "true"), h || g.setAttribute(n, "true");
        } catch (j) {
          console.error("aria-hidden: cannot operate on ", g, j);
        }
    });
  };
  return p(t), a.clear(), pn++, function() {
    o.forEach(function(d) {
      var g = yt.get(d) - 1, f = s.get(d) - 1;
      yt.set(d, g), s.set(d, f), g || (gr.has(d) || d.removeAttribute(n), gr.delete(d)), f || d.removeAttribute(r);
    }), pn--, pn || (yt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), mr = {});
  };
}, fp = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), i = up(e);
  return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live], script"))), pp(n, i, r, "aria-hidden")) : function() {
    return null;
  };
}, Vr = "Dialog", [Mo, hg] = Uu(Vr), [hp, Ce] = Mo(Vr), $o = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: i,
    onOpenChange: s,
    modal: o = !0
  } = e, a = x.useRef(null), u = x.useRef(null), [l, p] = Xu({
    prop: n,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Vr
  });
  return /* @__PURE__ */ c.jsx(
    hp,
    {
      scope: t,
      triggerRef: a,
      contentRef: u,
      contentId: $e(),
      titleId: $e(),
      descriptionId: $e(),
      open: l,
      onOpenChange: p,
      onOpenToggle: x.useCallback(() => p((d) => !d), [p]),
      modal: o,
      children: r
    }
  );
};
$o.displayName = Vr;
var Ro = "DialogTrigger", gp = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Ce(Ro, r), s = dt(t, i.triggerRef);
    return /* @__PURE__ */ c.jsx(
      he.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": di(i.open),
        ...n,
        ref: s,
        onClick: Ve(e.onClick, i.onOpenToggle)
      }
    );
  }
);
gp.displayName = Ro;
var li = "DialogPortal", [mp, Do] = Mo(li, {
  forceMount: void 0
}), Bo = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: i } = e, s = Ce(li, t);
  return /* @__PURE__ */ c.jsx(mp, { scope: t, forceMount: r, children: x.Children.map(n, (o) => /* @__PURE__ */ c.jsx(Kr, { present: r || s.open, children: /* @__PURE__ */ c.jsx(jo, { asChild: !0, container: i, children: o }) })) });
};
Bo.displayName = li;
var Lr = "DialogOverlay", Fo = x.forwardRef(
  (e, t) => {
    const r = Do(Lr, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, s = Ce(Lr, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ c.jsx(Kr, { present: n || s.open, children: /* @__PURE__ */ c.jsx(yp, { ...i, ref: t }) }) : null;
  }
);
Fo.displayName = Lr;
var vp = /* @__PURE__ */ bo("DialogOverlay.RemoveScroll"), yp = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Ce(Lr, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Lo, { as: vp, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ c.jsx(
        he.div,
        {
          "data-state": di(i.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), ot = "DialogContent", Ho = x.forwardRef(
  (e, t) => {
    const r = Do(ot, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, s = Ce(ot, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Kr, { present: n || s.open, children: s.modal ? /* @__PURE__ */ c.jsx(xp, { ...i, ref: t }) : /* @__PURE__ */ c.jsx(bp, { ...i, ref: t }) });
  }
);
Ho.displayName = ot;
var xp = x.forwardRef(
  (e, t) => {
    const r = Ce(ot, e.__scopeDialog), n = x.useRef(null), i = dt(t, r.contentRef, n);
    return x.useEffect(() => {
      const s = n.current;
      if (s) return fp(s);
    }, []), /* @__PURE__ */ c.jsx(
      Wo,
      {
        ...e,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ve(e.onCloseAutoFocus, (s) => {
          var o;
          s.preventDefault(), (o = r.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: Ve(e.onPointerDownOutside, (s) => {
          const o = s.detail.originalEvent, a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: Ve(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), bp = x.forwardRef(
  (e, t) => {
    const r = Ce(ot, e.__scopeDialog), n = x.useRef(!1), i = x.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Wo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var o, a;
          (o = e.onCloseAutoFocus) == null || o.call(e, s), s.defaultPrevented || (n.current || (a = r.triggerRef.current) == null || a.focus(), s.preventDefault()), n.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          var u, l;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const o = s.target;
          ((l = r.triggerRef.current) == null ? void 0 : l.contains(o)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }
), Wo = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: s, ...o } = e, a = Ce(ot, r), u = x.useRef(null), l = dt(t, u);
    return Cd(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        So,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: i,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ c.jsx(
            wo,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": di(a.open),
              ...o,
              ref: l,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(_p, { titleId: a.titleId }),
        /* @__PURE__ */ c.jsx(kp, { contentRef: u, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), ui = "DialogTitle", Ko = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Ce(ui, r);
    return /* @__PURE__ */ c.jsx(he.h2, { id: i.titleId, ...n, ref: t });
  }
);
Ko.displayName = ui;
var Go = "DialogDescription", Vo = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Ce(Go, r);
    return /* @__PURE__ */ c.jsx(he.p, { id: i.descriptionId, ...n, ref: t });
  }
);
Vo.displayName = Go;
var Uo = "DialogClose", qo = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = Ce(Uo, r);
    return /* @__PURE__ */ c.jsx(
      he.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: Ve(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
qo.displayName = Uo;
function di(e) {
  return e ? "open" : "closed";
}
var Yo = "DialogTitleWarning", [gg, Jo] = Vu(Yo, {
  contentName: ot,
  titleName: ui,
  docsSlug: "dialog"
}), _p = ({ titleId: e }) => {
  const t = Jo(Yo), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, wp = "DialogDescriptionWarning", kp = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Jo(wp).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const i = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Zo = $o, Xo = Bo, Qo = Fo, ea = Ho, Sp = Ko, Pp = Vo, jp = qo, Gt = '[cmdk-group=""]', fn = '[cmdk-group-items=""]', Cp = '[cmdk-group-heading=""]', ta = '[cmdk-item=""]', gs = `${ta}:not([aria-disabled="true"])`, Mn = "cmdk-item-select", xt = "data-value", Ep = (e, t, r) => Gu(e, t, r), ra = x.createContext(void 0), sr = () => x.useContext(ra), na = x.createContext(void 0), pi = () => x.useContext(na), ia = x.createContext(void 0), sa = x.forwardRef((e, t) => {
  let r = bt(() => {
    var b, I;
    return { search: "", value: (I = (b = e.value) != null ? b : e.defaultValue) != null ? I : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = bt(() => /* @__PURE__ */ new Set()), i = bt(() => /* @__PURE__ */ new Map()), s = bt(() => /* @__PURE__ */ new Map()), o = bt(() => /* @__PURE__ */ new Set()), a = oa(e), { label: u, children: l, value: p, onValueChange: d, filter: g, shouldFilter: f, loop: h, disablePointerSelection: m = !1, vimBindings: _ = !0, ...j } = e, y = $e(), P = $e(), w = $e(), S = x.useRef(null), z = Dp();
  at(() => {
    if (p !== void 0) {
      let b = p.trim();
      r.current.value = b, E.emit();
    }
  }, [p]), at(() => {
    z(6, M);
  }, []);
  let E = x.useMemo(() => ({ subscribe: (b) => (o.current.add(b), () => o.current.delete(b)), snapshot: () => r.current, setState: (b, I, L) => {
    var $, B, F, R;
    if (!Object.is(r.current[b], I)) {
      if (r.current[b] = I, b === "search") J(), A(), z(1, V);
      else if (b === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let X = document.getElementById(w);
          X ? X.focus() : ($ = document.getElementById(y)) == null || $.focus();
        }
        if (z(7, () => {
          var X;
          r.current.selectedItemId = (X = H()) == null ? void 0 : X.id, E.emit();
        }), L || z(5, M), ((B = a.current) == null ? void 0 : B.value) !== void 0) {
          let X = I ?? "";
          (R = (F = a.current).onValueChange) == null || R.call(F, X);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    o.current.forEach((b) => b());
  } }), []), C = x.useMemo(() => ({ value: (b, I, L) => {
    var $;
    I !== (($ = s.current.get(b)) == null ? void 0 : $.value) && (s.current.set(b, { value: I, keywords: L }), r.current.filtered.items.set(b, T(I, L)), z(2, () => {
      A(), E.emit();
    }));
  }, item: (b, I) => (n.current.add(b), I && (i.current.has(I) ? i.current.get(I).add(b) : i.current.set(I, /* @__PURE__ */ new Set([b]))), z(3, () => {
    J(), A(), r.current.value || V(), E.emit();
  }), () => {
    s.current.delete(b), n.current.delete(b), r.current.filtered.items.delete(b);
    let L = H();
    z(4, () => {
      J(), (L == null ? void 0 : L.getAttribute("id")) === b && V(), E.emit();
    });
  }), group: (b) => (i.current.has(b) || i.current.set(b, /* @__PURE__ */ new Set()), () => {
    s.current.delete(b), i.current.delete(b);
  }), filter: () => a.current.shouldFilter, label: u || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: y, inputId: w, labelId: P, listInnerRef: S }), []);
  function T(b, I) {
    var L, $;
    let B = ($ = (L = a.current) == null ? void 0 : L.filter) != null ? $ : Ep;
    return b ? B(b, r.current.search, I) : 0;
  }
  function A() {
    if (!r.current.search || a.current.shouldFilter === !1) return;
    let b = r.current.filtered.items, I = [];
    r.current.filtered.groups.forEach(($) => {
      let B = i.current.get($), F = 0;
      B.forEach((R) => {
        let X = b.get(R);
        F = Math.max(X, F);
      }), I.push([$, F]);
    });
    let L = S.current;
    D().sort(($, B) => {
      var F, R;
      let X = $.getAttribute("id"), ce = B.getAttribute("id");
      return ((F = b.get(ce)) != null ? F : 0) - ((R = b.get(X)) != null ? R : 0);
    }).forEach(($) => {
      let B = $.closest(fn);
      B ? B.appendChild($.parentElement === B ? $ : $.closest(`${fn} > *`)) : L.appendChild($.parentElement === L ? $ : $.closest(`${fn} > *`));
    }), I.sort(($, B) => B[1] - $[1]).forEach(($) => {
      var B;
      let F = (B = S.current) == null ? void 0 : B.querySelector(`${Gt}[${xt}="${encodeURIComponent($[0])}"]`);
      F == null || F.parentElement.appendChild(F);
    });
  }
  function V() {
    let b = D().find((L) => L.getAttribute("aria-disabled") !== "true"), I = b == null ? void 0 : b.getAttribute(xt);
    E.setState("value", I || void 0);
  }
  function J() {
    var b, I, L, $;
    if (!r.current.search || a.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let B = 0;
    for (let F of n.current) {
      let R = (I = (b = s.current.get(F)) == null ? void 0 : b.value) != null ? I : "", X = ($ = (L = s.current.get(F)) == null ? void 0 : L.keywords) != null ? $ : [], ce = T(R, X);
      r.current.filtered.items.set(F, ce), ce > 0 && B++;
    }
    for (let [F, R] of i.current) for (let X of R) if (r.current.filtered.items.get(X) > 0) {
      r.current.filtered.groups.add(F);
      break;
    }
    r.current.filtered.count = B;
  }
  function M() {
    var b, I, L;
    let $ = H();
    $ && (((b = $.parentElement) == null ? void 0 : b.firstChild) === $ && ((L = (I = $.closest(Gt)) == null ? void 0 : I.querySelector(Cp)) == null || L.scrollIntoView({ block: "nearest" })), $.scrollIntoView({ block: "nearest" }));
  }
  function H() {
    var b;
    return (b = S.current) == null ? void 0 : b.querySelector(`${ta}[aria-selected="true"]`);
  }
  function D() {
    var b;
    return Array.from(((b = S.current) == null ? void 0 : b.querySelectorAll(gs)) || []);
  }
  function Z(b) {
    let I = D()[b];
    I && E.setState("value", I.getAttribute(xt));
  }
  function Y(b) {
    var I;
    let L = H(), $ = D(), B = $.findIndex((R) => R === L), F = $[B + b];
    (I = a.current) != null && I.loop && (F = B + b < 0 ? $[$.length - 1] : B + b === $.length ? $[0] : $[B + b]), F && E.setState("value", F.getAttribute(xt));
  }
  function W(b) {
    let I = H(), L = I == null ? void 0 : I.closest(Gt), $;
    for (; L && !$; ) L = b > 0 ? $p(L, Gt) : Rp(L, Gt), $ = L == null ? void 0 : L.querySelector(gs);
    $ ? E.setState("value", $.getAttribute(xt)) : Y(b);
  }
  let k = () => Z(D().length - 1), v = (b) => {
    b.preventDefault(), b.metaKey ? k() : b.altKey ? W(1) : Y(1);
  }, O = (b) => {
    b.preventDefault(), b.metaKey ? Z(0) : b.altKey ? W(-1) : Y(-1);
  };
  return x.createElement(he.div, { ref: t, tabIndex: -1, ...j, "cmdk-root": "", onKeyDown: (b) => {
    var I;
    (I = j.onKeyDown) == null || I.call(j, b);
    let L = b.nativeEvent.isComposing || b.keyCode === 229;
    if (!(b.defaultPrevented || L)) switch (b.key) {
      case "n":
      case "j": {
        _ && b.ctrlKey && v(b);
        break;
      }
      case "ArrowDown": {
        v(b);
        break;
      }
      case "p":
      case "k": {
        _ && b.ctrlKey && O(b);
        break;
      }
      case "ArrowUp": {
        O(b);
        break;
      }
      case "Home": {
        b.preventDefault(), Z(0);
        break;
      }
      case "End": {
        b.preventDefault(), k();
        break;
      }
      case "Enter": {
        b.preventDefault();
        let $ = H();
        if ($) {
          let B = new Event(Mn);
          $.dispatchEvent(B);
        }
      }
    }
  } }, x.createElement("label", { "cmdk-label": "", htmlFor: C.inputId, id: C.labelId, style: Fp }, u), Ur(e, (b) => x.createElement(na.Provider, { value: E }, x.createElement(ra.Provider, { value: C }, b))));
}), Op = x.forwardRef((e, t) => {
  var r, n;
  let i = $e(), s = x.useRef(null), o = x.useContext(ia), a = sr(), u = oa(e), l = (n = (r = u.current) == null ? void 0 : r.forceMount) != null ? n : o == null ? void 0 : o.forceMount;
  at(() => {
    if (!l) return a.item(i, o == null ? void 0 : o.id);
  }, [l]);
  let p = aa(i, s, [e.value, e.children, s], e.keywords), d = pi(), g = Ye((z) => z.value && z.value === p.current), f = Ye((z) => l || a.filter() === !1 ? !0 : z.search ? z.filtered.items.get(i) > 0 : !0);
  x.useEffect(() => {
    let z = s.current;
    if (!(!z || e.disabled)) return z.addEventListener(Mn, h), () => z.removeEventListener(Mn, h);
  }, [f, e.onSelect, e.disabled]);
  function h() {
    var z, E;
    m(), (E = (z = u.current).onSelect) == null || E.call(z, p.current);
  }
  function m() {
    d.setState("value", p.current, !0);
  }
  if (!f) return null;
  let { disabled: _, value: j, onSelect: y, forceMount: P, keywords: w, ...S } = e;
  return x.createElement(he.div, { ref: st(s, t), ...S, id: i, "cmdk-item": "", role: "option", "aria-disabled": !!_, "aria-selected": !!g, "data-disabled": !!_, "data-selected": !!g, onPointerMove: _ || a.getDisablePointerSelection() ? void 0 : m, onClick: _ ? void 0 : h }, e.children);
}), Ip = x.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: i, ...s } = e, o = $e(), a = x.useRef(null), u = x.useRef(null), l = $e(), p = sr(), d = Ye((f) => i || p.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(o) : !0);
  at(() => p.group(o), []), aa(o, a, [e.value, e.heading, u]);
  let g = x.useMemo(() => ({ id: o, forceMount: i }), [i]);
  return x.createElement(he.div, { ref: st(a, t), ...s, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, r && x.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), Ur(e, (f) => x.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, x.createElement(ia.Provider, { value: g }, f))));
}), Ap = x.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, i = x.useRef(null), s = Ye((o) => !o.search);
  return !r && !s ? null : x.createElement(he.div, { ref: st(i, t), ...n, "cmdk-separator": "", role: "separator" });
}), Np = x.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, i = e.value != null, s = pi(), o = Ye((l) => l.search), a = Ye((l) => l.selectedItemId), u = sr();
  return x.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), x.createElement(he.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": a, id: u.inputId, type: "text", value: i ? e.value : o, onChange: (l) => {
    i || s.setState("search", l.target.value), r == null || r(l.target.value);
  } });
}), zp = x.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...i } = e, s = x.useRef(null), o = x.useRef(null), a = Ye((l) => l.selectedItemId), u = sr();
  return x.useEffect(() => {
    if (o.current && s.current) {
      let l = o.current, p = s.current, d, g = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let f = l.offsetHeight;
          p.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return g.observe(l), () => {
        cancelAnimationFrame(d), g.unobserve(l);
      };
    }
  }, []), x.createElement(he.div, { ref: st(s, t), ...i, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": n, id: u.listId }, Ur(e, (l) => x.createElement("div", { ref: st(o, u.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), Lp = x.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: i, contentClassName: s, container: o, ...a } = e;
  return x.createElement(Zo, { open: r, onOpenChange: n }, x.createElement(Xo, { container: o }, x.createElement(Qo, { "cmdk-overlay": "", className: i }), x.createElement(ea, { "aria-label": e.label, "cmdk-dialog": "", className: s }, x.createElement(sa, { ref: t, ...a }))));
}), Tp = x.forwardRef((e, t) => Ye((r) => r.filtered.count === 0) ? x.createElement(he.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Mp = x.forwardRef((e, t) => {
  let { progress: r, children: n, label: i = "Loading...", ...s } = e;
  return x.createElement(he.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": i }, Ur(e, (o) => x.createElement("div", { "aria-hidden": !0 }, o)));
}), pt = Object.assign(sa, { List: zp, Item: Op, Input: Np, Group: Ip, Separator: Ap, Dialog: Lp, Empty: Tp, Loading: Mp });
function $p(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function Rp(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function oa(e) {
  let t = x.useRef(e);
  return at(() => {
    t.current = e;
  }), t;
}
var at = typeof window > "u" ? x.useEffect : x.useLayoutEffect;
function bt(e) {
  let t = x.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ye(e) {
  let t = pi(), r = () => e(t.snapshot());
  return x.useSyncExternalStore(t.subscribe, r, r);
}
function aa(e, t, r, n = []) {
  let i = x.useRef(), s = sr();
  return at(() => {
    var o;
    let a = (() => {
      var l;
      for (let p of r) {
        if (typeof p == "string") return p.trim();
        if (typeof p == "object" && "current" in p) return p.current ? (l = p.current.textContent) == null ? void 0 : l.trim() : i.current;
      }
    })(), u = n.map((l) => l.trim());
    s.value(e, a, u), (o = t.current) == null || o.setAttribute(xt, a), i.current = a;
  }), i;
}
var Dp = () => {
  let [e, t] = x.useState(), r = bt(() => /* @__PURE__ */ new Map());
  return at(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, i) => {
    r.current.set(n, i), t({});
  };
};
function Bp(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ur({ asChild: e, children: t }, r) {
  return e && x.isValidElement(t) ? x.cloneElement(Bp(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var Fp = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function Hp({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Zo, { "data-slot": "dialog", ...e });
}
function Wp({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Xo, { "data-slot": "dialog-portal", ...e });
}
function ca({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ c.jsx(
    Qo,
    {
      "data-slot": "dialog-overlay",
      className: fe(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  ) });
}
function Kp({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ c.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ c.jsxs(Wp, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ c.jsx(ca, {}),
    /* @__PURE__ */ c.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ c.jsxs(
      ea,
      {
        "data-slot": "dialog-content",
        className: fe(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg md:max-w-xl lg:max-w-4xl",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ c.jsxs(
            jp,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ c.jsx(rc, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function Gp({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: fe("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Vp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Sp,
    {
      "data-slot": "dialog-title",
      className: fe("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Up({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Pp,
    {
      "data-slot": "dialog-description",
      className: fe("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function qp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    pt,
    {
      "data-slot": "command",
      className: fe(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function Yp({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ c.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ c.jsxs(Hp, { ...s, children: [
    /* @__PURE__ */ c.jsx(ca, { className: "backdrop-blur-xs" }),
    /* @__PURE__ */ c.jsxs(Gp, { className: "sr-only ui-lib", children: [
      /* @__PURE__ */ c.jsx(Vp, { children: e }),
      /* @__PURE__ */ c.jsx(Up, { children: t })
    ] }),
    /* @__PURE__ */ c.jsx(
      Kp,
      {
        className: fe("overflow-hidden p-0", n),
        showCloseButton: i,
        children: /* @__PURE__ */ c.jsx(qp, { shouldFilter: !1, className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] }) });
}
function Jp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ c.jsx(nc, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ c.jsx(
          pt.Input,
          {
            "data-slot": "command-input",
            className: fe(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function Zp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    pt.List,
    {
      "data-slot": "command-list",
      className: fe(
        "max-h-[calc(100vh-600px)] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function Xp({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(
    pt.Loading,
    {
      "data-slot": "command-loading",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Qp({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(
    pt.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function ef({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    pt.Group,
    {
      "data-slot": "command-group",
      className: fe(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function tf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    pt.Item,
    {
      "data-slot": "command-item",
      className: fe(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function mg({ currentLang: e = "en", className: t, blogUrl: r, webUrl: n }) {
  const [i, s] = x.useState(!1);
  x.useEffect(() => {
    const f = (h) => {
      h.key === "k" && (h.metaKey || h.ctrlKey) && (h.preventDefault(), s((m) => !m));
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, []);
  const { t: o } = Fr(), {
    query: a,
    setQuery: u,
    results: l,
    isLoading: p,
    handleResultClick: d
  } = yo({ currentLang: e, blogUrl: r, webUrl: n }), g = ({ data: f }) => /* @__PURE__ */ c.jsx(ef, { children: f.map((h) => /* @__PURE__ */ c.jsx(pe, { href: h.path, children: /* @__PURE__ */ c.jsx(tf, { onSelect: () => d(h), className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-start justify-between gap-2 w-full", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ c.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: h.title }),
      /* @__PURE__ */ c.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: h.description }),
      h.keywords && h.keywords.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: h.keywords.slice(0, 3).map((m, _) => /* @__PURE__ */ c.jsx(
        "span",
        {
          className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
          children: m
        },
        _
      )) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
      h.lang && /* @__PURE__ */ c.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: h.lang }),
      h.type && /* @__PURE__ */ c.jsx("span", { className: fe("text-xs rounded-sm p-1 uppercase font-mono", h.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: h.type })
    ] })
  ] }) }, h.title) })) });
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx("div", { className: fe("ui-lib", t), children: /* @__PURE__ */ c.jsxs(Yp, { open: i, onOpenChange: s, className: "top-[50%] sm:top-80 lg:top-100 dark", children: [
    /* @__PURE__ */ c.jsx(Jp, { placeholder: o("search.placeholder"), value: a, onValueChange: (f) => u(f) }),
    /* @__PURE__ */ c.jsx(Zp, { children: p ? /* @__PURE__ */ c.jsx(Xp, { children: "Hang on…" }) : l.length ? /* @__PURE__ */ c.jsx(g, { data: l }) : /* @__PURE__ */ c.jsx(Qp, { children: o("search.not_found") }) })
  ] }) }) });
}
const rf = () => {
  const e = () => {
    const t = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: !0,
      bubbles: !0,
      // Allow the event to bubble up the DOM tree
      cancelable: !0
    });
    document.dispatchEvent(t);
  };
  return /* @__PURE__ */ c.jsxs(
    "button",
    {
      onClick: e,
      className: "flex items-center space-x-2 px-4 py-1 bg-transparent text-gray-200 rounded-xl border border-white/50 hover:bg-violet-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
      children: [
        /* @__PURE__ */ c.jsx(Js, { className: "w-4 h-4" }),
        /* @__PURE__ */ c.jsxs("kbd", { className: "inline-flex h-5 items-center gap-1 rounded border border-gray-600 bg-violet-800 px-1.5 font-mono text-[10px] font-medium opacity-100", children: [
          /* @__PURE__ */ c.jsx("span", { className: "text-xs", children: "⌘" }),
          "K"
        ] })
      ]
    }
  );
}, vg = ({
  lang: e,
  fullSiteUrl: t = "http://localhost:8000",
  fullBlogUrl: r = "http://localhost:9000"
}) => {
  const [n, i] = ye("/"), [s, o] = ye(!1), [a, u] = ye(null), [l, p] = ye([]), d = At(null), g = (M) => {
    p((H) => H.includes(M) ? H.filter((D) => D !== M) : [M]);
  }, [f, h] = ye(!1), [m, _] = ye(!1), j = zu("(max-width: 1279px)"), { t: y, i18n: P } = Fr();
  _e(() => {
    h(!0);
  }, []), _e(() => {
    P.changeLanguage(e), i(e !== "en" ? `/${e}/` : "/");
  }, []);
  const [w, S] = ye(!1);
  _e(() => {
    const M = () => {
      const H = window.scrollY;
      S(H > 50);
    };
    return window.addEventListener("scroll", M), M(), () => {
      window.removeEventListener("scroll", M);
    };
  }, []);
  const z = Sr((M) => {
    d.current && (clearTimeout(d.current), d.current = null), u(M);
  }, []), E = At([]), C = Sr(() => {
    const M = setTimeout(() => {
      u(null);
    }, 150);
    d.current = M, E.current.push(M);
  }, []);
  _e(() => () => {
    d.current && clearTimeout(d.current), E.current.forEach(clearTimeout), E.current = [];
  }, []);
  const T = Sr(
    (M) => {
      u(a === M ? null : M);
    },
    [a]
  ), A = Ir(t, mo), V = Ir(r, vo), J = {
    products: {
      title: y("nav.product.title"),
      shortTitle: y("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: y("nav.product.platform_overview"),
          description: y("nav.product.platform_overview_desc"),
          href: `${A}${n}products/cnapp-platform`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: y("nav.product.benefits"),
          description: y("nav.product.benefits_desc"),
          href: `${A}${n}products/benefits`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: y("nav.product.use_cases"),
          description: y("nav.product.use_cases_desc"),
          href: `${A}${n}products/use-cases`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ c.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: y("nav.product.aspm"),
          description: y("nav.product.aspm_desc"),
          href: `${A}${n}products/aspm`,
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: y("nav.product.cspm"),
          description: y("nav.product.cspm_desc"),
          href: `${A}${n}products/cspm`,
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: y("nav.product.container_security"),
          description: y("nav.product.container_security_desc"),
          href: `${A}${n}products/container`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ c.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ c.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: y("nav.product.cwpp"),
          description: y("nav.product.cwpp_desc"),
          href: `${A}${n}products/cwpp`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ c.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: y("nav.product.ciem"),
          description: y("nav.product.ciem_desc"),
          href: `${A}${n}products/ciem`,
          icon: /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ c.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ c.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ c.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ c.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ c.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ c.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ c.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ c.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ c.jsx("path", { d: "m9.228 18.148-.923.383" })
          ] })
        }
      ]
    },
    solutions: {
      title: y("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: y("nav.solutions.fintech"),
          description: y("nav.solutions.fintech_desc"),
          href: `${A}${n}solutions/fintech`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ c.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.healthtech"),
          description: y("nav.solutions.healthtech_desc"),
          href: `${A}${n}solutions/healthtech`,
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: y("nav.solutions.hrtech"),
          description: y("nav.solutions.hrtech_desc"),
          href: `${A}${n}solutions/hrtech`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ c.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.group_companies"),
          description: y("nav.solutions.group_companies_desc"),
          href: `${A}${n}solutions/group-companies`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ c.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.agencies"),
          description: y("nav.solutions.agencies_desc"),
          href: `${A}${n}solutions/agencies`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.startups"),
          description: y("nav.solutions.startups_desc"),
          href: `${A}${n}solutions/startups`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ c.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.enterprise"),
          description: y("nav.solutions.enterprise_desc"),
          href: `${A}${n}solutions/enterprise`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ c.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ c.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ c.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ c.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ c.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.mobile_apps"),
          description: y("nav.solutions.mobile_apps_desc"),
          href: `${A}${n}solutions/mobile-apps`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ c.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.manufacturing"),
          description: y("nav.solutions.manufacturing_desc"),
          href: `${A}${n}solutions/manufacturing`,
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: y("nav.solutions.government"),
          description: y("nav.solutions.government_desc"),
          href: `${A}${n}solutions/government`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ c.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ c.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ c.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.retailtech"),
          description: y("nav.solutions.retailtech_desc"),
          href: `${A}${n}solutions/retailtech`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ c.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.legaltech"),
          description: y("nav.solutions.legal_desc"),
          href: `${A}${n}solutions/legaltech`,
          icon: /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-gavel-icon lucide-gavel", children: [
            /* @__PURE__ */ c.jsx("path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }),
            /* @__PURE__ */ c.jsx("path", { d: "m16 16 6-6" }),
            /* @__PURE__ */ c.jsx("path", { d: "m21.5 10.5-8-8" }),
            /* @__PURE__ */ c.jsx("path", { d: "m8 8 6-6" }),
            /* @__PURE__ */ c.jsx("path", { d: "m8.5 7.5 8 8" })
          ] })
        }
      ]
    },
    developers: {
      title: y("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: y("nav.developers.documentation"),
          description: y("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ c.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ c.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.api_references"),
          description: y("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ c.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ c.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.github_apps"),
          description: y("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.plexalyzer_action"),
          description: y("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: y("nav.resources.title"),
      shortTitle: y("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: y("nav.resources.blog"),
          description: y("nav.resources.blog_desc"),
          href: `${V}${n}`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.youtube_channel"),
          description: y("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ c.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.branding_assets"),
          description: y("nav.resources.branding_assets_desc"),
          href: `${A}${n}branding-assets`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ c.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ c.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ c.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ c.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ c.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ c.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.changelogs"),
          description: y("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ c.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.feature_requests"),
          description: y("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ c.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: y("nav.resources.integrations"),
          description: y("nav.resources.integrations_desc"),
          href: `${A}${n}integrations`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ c.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.comparison_overview"),
          description: y("nav.resources.comparison_overview_desc"),
          href: `${A}${n}comparison/overview`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.support"),
          description: y("nav.resources.support_desc"),
          href: `${A}${n}support`,
          icon: /* @__PURE__ */ c.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              className: "text-primary",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ c.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ c.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ c.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: w ? "#8220ff" : "transparent",
        boxShadow: w ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ c.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ c.jsx(
            pe,
            {
              href: `${A}${n}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ c.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ c.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: fe("object-contain max-h-full max-w-none w-28", w ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ c.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(J).filter(([M]) => M === "products").map(([M, H]) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => z(M),
                onMouseLeave: C,
                children: /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": a === M,
                    "aria-haspopup": "true",
                    onClick: () => T(M),
                    children: [
                      /* @__PURE__ */ c.jsx("span", { className: "hidden xl:inline", children: H.title }),
                      /* @__PURE__ */ c.jsx("span", { className: "xl:hidden", children: H.shortTitle }),
                      /* @__PURE__ */ c.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${a === M ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              M
            )),
            /* @__PURE__ */ c.jsx(
              pe,
              {
                href: `${A}${n}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: y("nav.pricing")
              }
            ),
            Object.entries(J).filter(([M]) => M === "solutions" || M === "developers" || M === "resources").map(([M, H]) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => z(M),
                onMouseLeave: C,
                children: /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": a === M,
                    "aria-haspopup": "true",
                    onClick: () => T(M),
                    children: [
                      /* @__PURE__ */ c.jsx("span", { className: "hidden xl:inline", children: H.title }),
                      /* @__PURE__ */ c.jsx("span", { className: "xl:hidden", children: H.shortTitle }),
                      /* @__PURE__ */ c.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${a === M ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              M
            )),
            /* @__PURE__ */ c.jsx(
              pe,
              {
                href: `${A}${n}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: y("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-end items-center justify-center ml-4", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "hidden xl:flex  items-center gap-4", children: [
              /* @__PURE__ */ c.jsx(rf, {}),
              /* @__PURE__ */ c.jsxs("div", { className: fe("flex items-center gap-4 transition-all transition-discrete delay-0"), children: [
                /* @__PURE__ */ c.jsx(
                  pe,
                  {
                    href: `${dr}/login`,
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                    children: y("nav.login")
                  }
                ),
                /* @__PURE__ */ c.jsx(pe, { href: `${dr}/register`, children: /* @__PURE__ */ c.jsx(Ze, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.get_started") }) })
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => o(!s),
                "aria-label": s ? "Close menu" : "Open menu",
                "aria-expanded": s,
                children: s ? /* @__PURE__ */ c.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ c.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ c.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ c.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ c.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ c.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ c.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => u(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => z(a),
              onMouseLeave: C,
              role: "menu",
              "aria-labelledby": `menu-button-${a}`,
              children: /* @__PURE__ */ c.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ c.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    a === "products" && /* @__PURE__ */ c.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ c.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ c.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ c.jsx(
                            "rect",
                            {
                              x: "40",
                              y: "30",
                              width: "320",
                              height: "240",
                              rx: "12",
                              fill: "white",
                              filter: "url(#shadowEffect)"
                            }
                          ),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ c.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ c.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ c.jsx(
                            "circle",
                            {
                              cx: "293",
                              cy: "220",
                              r: "30",
                              fill: "transparent",
                              stroke: "#8220ff",
                              strokeWidth: "8",
                              strokeDasharray: "120 180"
                            }
                          ),
                          /* @__PURE__ */ c.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ c.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsxs(
                            "filter",
                            {
                              id: "shadowEffect",
                              x: "0",
                              y: "0",
                              width: "400",
                              height: "300",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                /* @__PURE__ */ c.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ c.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ c.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ c.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ c.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ c.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ c.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    a === "solutions" && /* @__PURE__ */ c.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ c.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ c.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ c.jsx(
                            "circle",
                            {
                              cx: "200",
                              cy: "150",
                              r: "40",
                              fill: "#8220ff",
                              fillOpacity: "0.1",
                              stroke: "#8220ff",
                              strokeWidth: "2"
                            }
                          ),
                          /* @__PURE__ */ c.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ c.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    a === "resources" && /* @__PURE__ */ c.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ c.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ c.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ c.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ c.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ c.jsx(
                              "rect",
                              {
                                x: "140",
                                y: "80",
                                width: "120",
                                height: "140",
                                rx: "4",
                                stroke: "#8220ff",
                                strokeWidth: "2",
                                fill: "none"
                              }
                            ),
                            /* @__PURE__ */ c.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ c.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ c.jsx(
                                "rect",
                                {
                                  x: "80",
                                  y: "120",
                                  width: "80",
                                  height: "100",
                                  rx: "4",
                                  fill: "white",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ c.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ c.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ c.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ c.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ c.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ c.jsx(
                                "rect",
                                {
                                  x: "240",
                                  y: "120",
                                  width: "80",
                                  height: "60",
                                  rx: "4",
                                  fill: "#f0f0f5",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ c.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ c.jsx(
                                "rect",
                                {
                                  x: "245",
                                  y: "125",
                                  width: "70",
                                  height: "50",
                                  rx: "2",
                                  stroke: "#8220ff",
                                  strokeWidth: "1",
                                  fill: "none"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ c.jsxs("defs", { children: [
                            /* @__PURE__ */ c.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ c.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ c.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ c.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ c.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    a === "developers" && /* @__PURE__ */ c.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ c.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ c.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ c.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ c.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ c.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ c.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ c.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ c.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ c.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ c.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ c.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ c.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ c.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: J[a].title }),
                    /* @__PURE__ */ c.jsx("p", { className: "text-gray-700", children: y(a === "products" ? "nav.product.explore" : a === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ c.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: J[a].items.filter((M) => a !== "resources" || !M.title.startsWith("vs ")).map((M, H) => /* @__PURE__ */ c.jsxs(
                  pe,
                  {
                    href: M.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => u(null),
                    children: [
                      /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: kn.cloneElement(M.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ c.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ c.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: M.title }),
                        /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-600 mt-1", children: M.description })
                      ] })
                    ]
                  },
                  H
                )) }) })
              ] }) })
            }
          )
        ] }),
        f && j && s && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => o(!1) }),
        f && j && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300  delay-500 ease-in-out ${s ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ c.jsxs("div", { className: "overflow-y-auto h-full p-4 pb-20", children: [
              /* @__PURE__ */ c.jsx(
                Tu,
                {
                  currentLang: e,
                  webUrl: A,
                  blogUrl: V,
                  isOpen: m,
                  onClose: () => _(!1)
                }
              ),
              /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
                Object.entries(J).map(([M, H]) => {
                  const D = l.includes(M);
                  return /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 bg-[#8220ff]/10 px-2 rounded-md", children: [
                    /* @__PURE__ */ c.jsxs(
                      "button",
                      {
                        onClick: () => g(M),
                        className: "flex items-center justify-between w-full py-2",
                        children: [
                          /* @__PURE__ */ c.jsx("h3", { className: "font-semibold", children: H.title }),
                          /* @__PURE__ */ c.jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: `transition-transform duration-200 ${D ? "transform rotate-180" : ""}`,
                              children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    D && /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 gap-2 py-2", children: H.items.map((Z, Y) => /* @__PURE__ */ c.jsxs(
                      pe,
                      {
                        href: Z.href,
                        className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                        onClick: () => o(!1),
                        children: [
                          /* @__PURE__ */ c.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: kn.cloneElement(Z.icon, { width: 16, height: 16 }) }),
                          /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: Z.title })
                        ]
                      },
                      Y
                    )) })
                  ] }, M);
                }),
                /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ c.jsx(pe, { href: `${dr}/register`, className: "flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Ze, { className: "text-white w-full bg-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.get_started") }) }),
                  /* @__PURE__ */ c.jsx(
                    pe,
                    {
                      href: `${dr}/login`,
                      className: "text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center",
                      children: /* @__PURE__ */ c.jsx(Ze, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.login") })
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    pe,
                    {
                      href: `${A}${n}pricing`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ c.jsx(Ze, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.pricing") })
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    pe,
                    {
                      href: `${A}${n}contact`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ c.jsx(Ze, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.contact") })
                    }
                  )
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}, nf = "English", sf = "German", of = "French", af = "Japanese", cf = "Italian", lf = "Dutch", uf = "Swedish", df = "Spanish", pf = "Norwegian", ff = "Danish", hf = "Finnish", gf = "Portuguese", mf = "Chinese (Simplified)", vf = "Arabic", yf = "Hebrew", xf = "Turkish", bf = "Polish", _f = "Czech", wf = "Indonesian", kf = {
  en: nf,
  de: sf,
  fr: of,
  ja: af,
  it: cf,
  nl: lf,
  sv: uf,
  es: df,
  no: pf,
  da: ff,
  fi: hf,
  pt: gf,
  zh: mf,
  ar: vf,
  he: yf,
  tr: xf,
  pl: bf,
  cs: _f,
  id: wf
};
function Sf() {
  var r;
  const e = (n) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const i = window.location.pathname;
    let o = i.match(/^\/([a-z]{2})\//) ? i.replace(/^\/[a-z]{2}\//, `/${n}/`) : `/${n}${i}`;
    o = o.startsWith("/en/") ? o.replace(/^\/en/, "") : o, window.location.href = o;
  };
  _e(() => {
    const n = localStorage.getItem("scrollPosition");
    n && (window.scrollTo(0, parseInt(n)), localStorage.removeItem("scrollPosition"));
  }, []);
  const t = ((r = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : r[1]) || "en";
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ c.jsx(ic, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        defaultValue: t,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (n) => e(n.target.value),
        children: Object.entries(kf).map(([n, i]) => /* @__PURE__ */ c.jsx("option", { value: n, children: i }, n))
      }
    ),
    /* @__PURE__ */ c.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
/*!
* CookieConsent 3.1.0
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const la = "opt-in", Vt = "opt-out", ua = "show--consent", da = "show--preferences", ms = "disable--interaction", Tr = "data-category", se = "div", ke = "button", Se = "aria-hidden", Yt = "btn-group", ge = "click", jt = "data-role", fi = "consentModal", hi = "preferencesModal";
class Pf {
  constructor() {
    this.t = { mode: la, revision: 0, autoShow: !0, lazyHtmlGeneration: !0, autoClearCookies: !0, manageScriptTags: !0, hideFromBots: !0, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", secure: !0, sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: !1, h: null, C: null, S: null, M: "", D: !0, T: !1, k: !1, A: !1, N: !1, H: [], V: !1, I: !0, L: [], j: !1, F: "", P: !1, O: [], R: [], B: [], $: [], G: !1, J: !1, U: !1, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
  }
}
const N = new Pf(), pa = (e, t) => e.indexOf(t), oe = (e, t) => pa(e, t) !== -1, qr = (e) => Array.isArray(e), $t = (e) => typeof e == "string", $n = (e) => !!e && typeof e == "object" && !qr(e), Oe = (e) => typeof e == "function", tt = (e) => Object.keys(e), fa = (e) => Array.from(new Set(e)), Mr = () => document.activeElement, wt = (e) => e.preventDefault(), gi = (e, t) => e.querySelectorAll(t), G = (e) => {
  const t = document.createElement(e);
  return e === ke && (t.type = e), t;
}, re = (e, t, r) => e.setAttribute(t, r), hn = (e, t, r) => {
  e.removeAttribute(r ? "data-" + t : t);
}, Cr = (e, t, r) => e.getAttribute(r ? "data-" + t : t), K = (e, t) => e.appendChild(t), ae = (e, t) => e.classList.add(t), ve = (e, t) => ae(e, "cm__" + t), ie = (e, t) => ae(e, "pm__" + t), Ue = (e, t) => e.classList.remove(t), Ge = (e) => {
  if (typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  let t = Array.isArray(e) ? [] : {};
  for (let r in e) {
    let n = e[r];
    t[r] = Ge(n);
  }
  return t;
}, vs = (e, t) => dispatchEvent(new CustomEvent(e, { detail: t })), le = (e, t, r, n) => {
  e.addEventListener(t, r), n && N.o.m.push({ pe: e, ge: t, me: r });
}, jf = () => {
  const e = N.t.cookie.expiresAfterDays;
  return Oe(e) ? e(N.o.F) : e;
}, gn = (e, t) => {
  const r = e || [], n = t || [];
  return r.filter(((i) => !oe(n, i))).concat(n.filter(((i) => !oe(r, i))));
}, ha = (e) => {
  N.o.R = fa(e), N.o.F = (() => {
    let t = "custom";
    const { R: r, O: n, B: i } = N.o, s = r.length;
    return s === n.length ? t = "all" : s === i.length && (t = "necessary"), t;
  })();
}, ga = (e, t, r, n) => {
  const i = "accept-", { show: s, showPreferences: o, hide: a, hidePreferences: u, acceptCategory: l } = t, p = e || document, d = (P) => gi(p, `[data-cc="${P}"]`), g = (P, w) => {
    wt(P), l(w), u(), a();
  }, f = d("show-preferencesModal"), h = d("show-consentModal"), m = d(i + "all"), _ = d(i + "necessary"), j = d(i + "custom"), y = N.t.lazyHtmlGeneration;
  for (const P of f) re(P, "aria-haspopup", "dialog"), le(P, ge, ((w) => {
    wt(w), o();
  })), y && (le(P, "mouseenter", ((w) => {
    wt(w), N.o.N || r(t, n);
  }), !0), le(P, "focus", (() => {
    N.o.N || r(t, n);
  })));
  for (let P of h) re(P, "aria-haspopup", "dialog"), le(P, ge, ((w) => {
    wt(w), s(!0);
  }), !0);
  for (let P of m) le(P, ge, ((w) => {
    g(w, "all");
  }), !0);
  for (let P of j) le(P, ge, ((w) => {
    g(w);
  }), !0);
  for (let P of _) le(P, ge, ((w) => {
    g(w, []);
  }), !0);
}, ze = (e, t) => {
  e && (t && (e.tabIndex = -1), e.focus(), t && e.removeAttribute("tabindex"));
}, ma = (e, t) => {
  const r = (n) => {
    n.target.removeEventListener("transitionend", r), n.propertyName === "opacity" && getComputedStyle(e).opacity === "1" && ze(((i) => i === 1 ? N.ne.be : N.ne.ve)(t));
  };
  le(e, "transitionend", r);
};
let ys;
const va = (e) => {
  clearTimeout(ys), e ? ae(N.ne.ye, ms) : ys = setTimeout((() => {
    Ue(N.ne.ye, ms);
  }), 500);
}, Cf = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "], rr = (e = 0, t = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Cf[e]}"/></svg>`, ya = (e) => {
  const t = N.ne, r = N.o;
  ((n) => {
    const i = n === t.he, s = r.i.disablePageInteraction ? t.ye : i ? t.Ce : t.ye;
    le(s, "keydown", ((o) => {
      if (o.key !== "Tab" || !(i ? r.k && !r.A : r.A)) return;
      const a = Mr(), u = i ? r.q : r.K;
      u.length !== 0 && (o.shiftKey ? a !== u[0] && n.contains(a) || (wt(o), ze(u[1])) : a !== u[1] && n.contains(a) || (wt(o), ze(u[0])));
    }), !0);
  })(e);
}, Ef = ["[href]", ke, "input", "details", "[tabindex]"].map(((e) => e + ':not([tabindex="-1"])')).join(","), xa = (e) => {
  const { o: t, ne: r } = N, n = (i, s) => {
    const o = gi(i, Ef);
    s[0] = o[0], s[1] = o[o.length - 1];
  };
  e === 1 && t.T && n(r.he, t.q), e === 2 && t.N && n(r.we, t.K);
}, Le = (e, t, r) => {
  const { de: n, le: i, ie: s, _e: o, ue: a, fe: u } = N.ce, l = N.re;
  if (t) {
    const d = { modalName: t };
    return e === l.fe ? Oe(u) && u(d) : e === l._e ? Oe(o) && o(d) : (d.modal = r, Oe(a) && a(d)), vs(e, d);
  }
  const p = { cookie: N.o.p };
  e === l.ie ? Oe(s) && s(Ge(p)) : e === l.le ? Oe(i) && i(Ge(p)) : (p.changedCategories = N.o.L, p.changedServices = N.o.ee, Oe(n) && n(Ge(p))), vs(e, Ge(p));
}, $r = (e, t) => {
  try {
    return e();
  } catch (r) {
    return !t && console.warn("CookieConsent:", r), !1;
  }
}, Rn = (e) => {
  const { Y: t, ee: r, O: n, X: i, oe: s, p: o, L: a } = N.o;
  for (const d of n) {
    const g = r[d] || t[d] || [];
    for (const f of g) {
      const h = i[d][f];
      if (!h) continue;
      const { onAccept: m, onReject: _ } = h;
      !h.Se && oe(t[d], f) ? (h.Se = !0, Oe(m) && m()) : h.Se && !oe(t[d], f) && (h.Se = !1, Oe(_) && _());
    }
  }
  if (!N.t.manageScriptTags) return;
  const u = s, l = e || o.categories || [], p = (d, g) => {
    if (g >= d.length) return;
    const f = s[g];
    if (f.xe) return p(d, g + 1);
    const h = f.Me, m = f.De, _ = f.Te, j = oe(l, m), y = !!_ && oe(t[m], _);
    if (!_ && !f.ke && j || !_ && f.ke && !j && oe(a, m) || _ && !f.ke && y || _ && f.ke && !y && oe(r[m] || [], _)) {
      f.xe = !0;
      const P = Cr(h, "type", !0);
      hn(h, "type", !!P), hn(h, Tr);
      let w = Cr(h, "src", !0);
      w && hn(h, "src", !0);
      const S = G("script");
      S.textContent = h.innerHTML;
      for (const { nodeName: E } of h.attributes) re(S, E, h[E] || Cr(h, E));
      P && (S.type = P), w ? S.src = w : w = h.src;
      const z = !!w && (!P || ["text/javascript", "module"].includes(P));
      if (z && (S.onload = S.onerror = () => {
        p(d, ++g);
      }), h.replaceWith(S), z) return;
    }
    p(d, ++g);
  };
  p(u, 0);
}, Er = "bottom", Dn = "left", ba = "center", mi = "right", mn = "inline", _a = "wide", wa = "pm--", vn = ["middle", "top", Er], xs = [Dn, ba, mi], Of = { box: { Ee: [_a, mn], Ae: vn, Ne: xs, He: Er, Ve: mi }, cloud: { Ee: [mn], Ae: vn, Ne: xs, He: Er, Ve: ba }, bar: { Ee: [mn], Ae: vn.slice(1), Ne: [], He: Er, Ve: "" } }, If = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [_a], Ae: [], Ne: [Dn, mi], He: "", Ve: Dn } }, ka = (e) => {
  const t = N.o.i.guiOptions, r = t && t.consentModal, n = t && t.preferencesModal;
  e === 0 && bs(N.ne.he, Of, r, "cm--", "box", "cm"), e === 1 && bs(N.ne.we, If, n, wa, "box", "pm");
}, bs = (e, t, r, n, i, s) => {
  e.className = s;
  const o = r && r.layout, a = r && r.position, u = r && r.flipButtons, l = !r || r.equalWeightButtons !== !1, p = o && o.split(" ") || [], d = p[0], g = p[1], f = d in t ? d : i, h = t[f], m = oe(h.Ee, g) && g, _ = a && a.split(" ") || [], j = _[0], y = n === wa ? _[0] : _[1], P = oe(h.Ae, j) ? j : h.He, w = oe(h.Ne, y) ? y : h.Ve, S = (E) => {
    E && ae(e, n + E);
  };
  S(f), S(m), S(P), S(w), u && S("flip");
  const z = s + "__btn--secondary";
  if (s === "cm") {
    const { Ie: E, Le: C } = N.ne;
    E && (l ? Ue(E, z) : ae(E, z)), C && (l ? Ue(C, z) : ae(C, z));
  } else {
    const { je: E } = N.ne;
    E && (l ? Ue(E, z) : ae(E, z));
  }
}, nr = (e, t) => {
  const r = N.o, n = N.ne, { hide: i, hidePreferences: s, acceptCategory: o } = e, a = (w) => {
    o(w), s(), i();
  }, u = r.u && r.u.preferencesModal;
  if (!u) return;
  const l = u.title, p = u.closeIconLabel, d = u.acceptAllBtn, g = u.acceptNecessaryBtn, f = u.savePreferencesBtn, h = u.sections || [], m = d || g || f;
  if (n.Fe) n.Pe = G(se), ie(n.Pe, "body");
  else {
    n.Fe = G(se), ae(n.Fe, "pm-wrapper");
    const w = G("div");
    ae(w, "pm-overlay"), K(n.Fe, w), le(w, ge, s), n.we = G(se), ae(n.we, "pm"), re(n.we, "role", "dialog"), re(n.we, Se, !0), re(n.we, "aria-modal", !0), re(n.we, "aria-labelledby", "pm__title"), le(n.ye, "keydown", ((S) => {
      S.keyCode === 27 && s();
    }), !0), n.Oe = G(se), ie(n.Oe, "header"), n.Re = G("h2"), ie(n.Re, "title"), n.Re.id = "pm__title", n.Be = G(ke), ie(n.Be, "close-btn"), re(n.Be, "aria-label", u.closeIconLabel || ""), le(n.Be, ge, s), n.$e = G("span"), n.$e.innerHTML = rr(), K(n.Be, n.$e), n.Ge = G(se), ie(n.Ge, "body"), n.Je = G(se), ie(n.Je, "footer");
    var _ = G(se);
    ae(_, "btns");
    var j = G(se), y = G(se);
    ie(j, Yt), ie(y, Yt), K(n.Je, j), K(n.Je, y), K(n.Oe, n.Re), K(n.Oe, n.Be), n.ve = G(se), re(n.ve, "tabIndex", -1), K(n.we, n.ve), K(n.we, n.Oe), K(n.we, n.Ge), m && K(n.we, n.Je), K(n.Fe, n.we);
  }
  let P;
  l && (n.Re.innerHTML = l, p && re(n.Be, "aria-label", p)), h.forEach(((w, S) => {
    const z = w.title, E = w.description, C = w.linkedCategory, T = C && r.P[C], A = w.cookieTable, V = A && A.body, J = A && A.caption, M = V && V.length > 0, H = !!T, D = H && r.X[C], Z = $n(D) && tt(D) || [], Y = H && (!!E || !!M || tt(D).length > 0);
    var W = G(se);
    if (ie(W, "section"), Y || E) {
      var k = G(se);
      ie(k, "section-desc-wrapper");
    }
    let v = Z.length;
    if (Y && v > 0) {
      const B = G(se);
      ie(B, "section-services");
      for (const F of Z) {
        const R = D[F], X = R && R.label || F, ce = G(se), de = G(se), be = G(se), Ee = G(se);
        ie(ce, "service"), ie(Ee, "service-title"), ie(de, "service-header"), ie(be, "service-icon");
        const we = _s(X, F, T, !0, C);
        Ee.innerHTML = X, K(de, be), K(de, Ee), K(ce, de), K(ce, we), K(B, ce);
      }
      K(k, B);
    }
    if (z) {
      var O = G(se), b = G(H ? ke : se);
      if (ie(O, "section-title-wrapper"), ie(b, "section-title"), b.innerHTML = z, K(O, b), H) {
        const B = G("span");
        B.innerHTML = rr(2, 3.5), ie(B, "section-arrow"), K(O, B), W.className += "--toggle";
        const F = _s(z, C, T);
        let R = u.serviceCounterLabel;
        if (v > 0 && $t(R)) {
          let X = G("span");
          ie(X, "badge"), ie(X, "service-counter"), re(X, Se, !0), re(X, "data-servicecounter", v), R && (R = R.split("|"), R = R.length > 1 && v > 1 ? R[1] : R[0], re(X, "data-counterlabel", R)), X.innerHTML = v + (R ? " " + R : ""), K(b, X);
        }
        if (Y) {
          ie(W, "section--expandable");
          var I = C + "-desc";
          re(b, "aria-expanded", !1), re(b, "aria-controls", I);
        }
        K(O, F);
      } else re(b, "role", "heading"), re(b, "aria-level", "3");
      K(W, O);
    }
    if (E) {
      var L = G("p");
      ie(L, "section-desc"), L.innerHTML = E, K(k, L);
    }
    if (Y && (re(k, Se, "true"), k.id = I, ((B, F, R) => {
      le(b, ge, (() => {
        F.classList.contains("is-expanded") ? (Ue(F, "is-expanded"), re(R, "aria-expanded", "false"), re(B, Se, "true")) : (ae(F, "is-expanded"), re(R, "aria-expanded", "true"), re(B, Se, "false"));
      }));
    })(k, W, b), M)) {
      const B = G("table"), F = G("thead"), R = G("tbody");
      if (J) {
        const we = G("caption");
        ie(we, "table-caption"), we.innerHTML = J, B.appendChild(we);
      }
      ie(B, "section-table"), ie(F, "table-head"), ie(R, "table-body");
      const X = A.headers, ce = tt(X), de = n.Ue.createDocumentFragment(), be = G("tr");
      for (const we of ce) {
        const ft = X[we], Be = G("th");
        Be.id = "cc__row-" + ft + S, re(Be, "scope", "col"), ie(Be, "table-th"), Be.innerHTML = ft, K(de, Be);
      }
      K(be, de), K(F, be);
      const Ee = n.Ue.createDocumentFragment();
      for (const we of V) {
        const ft = G("tr");
        ie(ft, "table-tr");
        for (const Be of ce) {
          const ji = X[Be], Xa = we[Be], Bt = G("td"), Ci = G(se);
          ie(Bt, "table-td"), re(Bt, "data-column", ji), re(Bt, "headers", "cc__row-" + ji + S), Ci.insertAdjacentHTML("beforeend", Xa), K(Bt, Ci), K(ft, Bt);
        }
        K(Ee, ft);
      }
      K(R, Ee), K(B, F), K(B, R), K(k, B);
    }
    (Y || E) && K(W, k);
    const $ = n.Pe || n.Ge;
    H ? (P || (P = G(se), ie(P, "section-toggles")), P.appendChild(W)) : P = null, K($, P || W);
  })), d && (n.ze || (n.ze = G(ke), ie(n.ze, "btn"), re(n.ze, jt, "all"), K(j, n.ze), le(n.ze, ge, (() => a("all")))), n.ze.innerHTML = d), g && (n.je || (n.je = G(ke), ie(n.je, "btn"), re(n.je, jt, "necessary"), K(j, n.je), le(n.je, ge, (() => a([])))), n.je.innerHTML = g), f && (n.qe || (n.qe = G(ke), ie(n.qe, "btn"), ie(n.qe, "btn--secondary"), re(n.qe, jt, "save"), K(y, n.qe), le(n.qe, ge, (() => a()))), n.qe.innerHTML = f), n.Pe && (n.we.replaceChild(n.Pe, n.Ge), n.Ge = n.Pe), ka(1), r.N || (r.N = !0, Le(N.re.ue, hi, n.we), t(e), K(n.Ce, n.Fe), ya(n.we), setTimeout((() => ae(n.Fe, "cc--anim")), 100)), xa(2);
};
function _s(e, t, r, n, i) {
  const s = N.o, o = N.ne, a = G("label"), u = G("input"), l = G("span"), p = G("span"), d = G("span"), g = G("span"), f = G("span");
  if (g.innerHTML = rr(1, 3), f.innerHTML = rr(0, 3), u.type = "checkbox", ae(a, "section__toggle-wrapper"), ae(u, "section__toggle"), ae(g, "toggle__icon-on"), ae(f, "toggle__icon-off"), ae(l, "toggle__icon"), ae(p, "toggle__icon-circle"), ae(d, "toggle__label"), re(l, Se, "true"), n ? (ae(a, "toggle-service"), re(u, Tr, i), o.se[i][t] = u) : o.ae[t] = u, n ? ((h) => {
    le(u, "change", (() => {
      const m = o.se[h], _ = o.ae[h];
      s.Z[h] = [];
      for (let j in m) {
        const y = m[j];
        y.checked && s.Z[h].push(y.value);
      }
      _.checked = s.Z[h].length > 0;
    }));
  })(i) : ((h) => {
    le(u, ge, (() => {
      const m = o.se[h], _ = u.checked;
      s.Z[h] = [];
      for (let j in m) m[j].checked = _, _ && s.Z[h].push(j);
    }));
  })(t), u.value = t, d.textContent = e.replace(/<.*>.*<\/.*>/gm, ""), K(p, f), K(p, g), K(l, p), s.D) (r.readOnly || r.enabled) && (u.checked = !0);
  else if (n) {
    const h = s.Y[i];
    u.checked = r.readOnly || oe(h, t);
  } else oe(s.R, t) && (u.checked = !0);
  return r.readOnly && (u.disabled = !0), K(a, u), K(a, l), K(a, d), a;
}
const yn = () => {
  const e = G("span");
  return N.ne.Ke || (N.ne.Ke = e), e;
}, Sa = (e, t) => {
  const r = N.o, n = N.ne, { hide: i, showPreferences: s, acceptCategory: o } = e, a = r.u && r.u.consentModal;
  if (!a) return;
  const u = a.acceptAllBtn, l = a.acceptNecessaryBtn, p = a.showPreferencesBtn, d = a.closeIconLabel, g = a.footer, f = a.label, h = a.title, m = (j) => {
    i(), o(j);
  };
  if (!n.Qe) {
    n.Qe = G(se), n.he = G(se), n.We = G(se), n.Xe = G(se), n.Ye = G(se), ae(n.Qe, "cm-wrapper"), ae(n.he, "cm"), ve(n.We, "body"), ve(n.Xe, "texts"), ve(n.Ye, "btns"), re(n.he, "role", "dialog"), re(n.he, "aria-modal", "true"), re(n.he, Se, "false"), re(n.he, "aria-describedby", "cm__desc"), f ? re(n.he, "aria-label", f) : h && re(n.he, "aria-labelledby", "cm__title");
    const j = "box", y = r.i.guiOptions, P = y && y.consentModal, w = (P && P.layout || j).split(" ")[0] === j;
    h && d && w && (n.Le || (n.Le = G(ke), n.Le.innerHTML = rr(), ve(n.Le, "btn"), ve(n.Le, "btn--close"), le(n.Le, ge, (() => {
      m([]);
    })), K(n.We, n.Le)), re(n.Le, "aria-label", d)), K(n.We, n.Xe), (u || l || p) && K(n.We, n.Ye), n.be = G(se), re(n.be, "tabIndex", -1), K(n.he, n.be), K(n.he, n.We), K(n.Qe, n.he);
  }
  h && (n.Ze || (n.Ze = G("h2"), n.Ze.className = n.Ze.id = "cm__title", K(n.Xe, n.Ze)), n.Ze.innerHTML = h);
  let _ = a.description;
  if (_ && (r.V && (_ = _.replace("{{revisionMessage}}", r.I ? "" : a.revisionMessage || "")), n.et || (n.et = G("p"), n.et.className = n.et.id = "cm__desc", K(n.Xe, n.et)), n.et.innerHTML = _), u && (n.tt || (n.tt = G(ke), K(n.tt, yn()), ve(n.tt, "btn"), re(n.tt, jt, "all"), le(n.tt, ge, (() => {
    m("all");
  }))), n.tt.firstElementChild.innerHTML = u), l && (n.Ie || (n.Ie = G(ke), K(n.Ie, yn()), ve(n.Ie, "btn"), re(n.Ie, jt, "necessary"), le(n.Ie, ge, (() => {
    m([]);
  }))), n.Ie.firstElementChild.innerHTML = l), p && (n.ot || (n.ot = G(ke), K(n.ot, yn()), ve(n.ot, "btn"), ve(n.ot, "btn--secondary"), re(n.ot, jt, "show"), le(n.ot, "mouseenter", (() => {
    r.N || nr(e, t);
  })), le(n.ot, ge, s)), n.ot.firstElementChild.innerHTML = p), n.nt || (n.nt = G(se), ve(n.nt, Yt), u && K(n.nt, n.tt), l && K(n.nt, n.Ie), (u || l) && K(n.We, n.nt), K(n.Ye, n.nt)), n.ot && !n.st && (n.st = G(se), n.Ie && n.tt ? (ve(n.st, Yt), K(n.st, n.ot), K(n.Ye, n.st)) : (K(n.nt, n.ot), ve(n.nt, Yt + "--uneven"))), g) {
    if (!n.ct) {
      let j = G(se), y = G(se);
      n.ct = G(se), ve(j, "footer"), ve(y, "links"), ve(n.ct, "link-group"), K(y, n.ct), K(j, y), K(n.he, j);
    }
    n.ct.innerHTML = g;
  }
  ka(0), r.T || (r.T = !0, Le(N.re.ue, fi, n.he), t(e), K(n.Ce, n.Qe), ya(n.he), setTimeout((() => ae(n.Qe, "cc--anim")), 100)), xa(1), ga(n.We, e, nr, t);
}, Pa = (e) => {
  if (!$t(e)) return null;
  if (e in N.o._) return e;
  let t = e.slice(0, 2);
  return t in N.o._ ? t : null;
}, ja = () => N.o.l || N.o.i.language.default, Ca = (e) => {
  e && (N.o.l = e);
}, Af = async (e) => {
  const t = N.o;
  let r = Pa(e) ? e : ja(), n = t._[r];
  if ($t(n) ? n = await (async (i) => {
    try {
      return await (await fetch(i)).json();
    } catch (s) {
      return console.error(s), !1;
    }
  })(n) : Oe(n) && (n = await n()), !n) throw `Could not load translation for the '${r}' language`;
  return t.u = n, Ca(r), !0;
}, Nf = () => {
  let e = N.o.i.language.rtl, t = N.ne.Ce;
  e && t && (qr(e) || (e = [e]), oe(e, N.o.l) ? ae(t, "cc--rtl") : Ue(t, "cc--rtl"));
}, Jt = () => {
  const e = N.ne;
  if (e.Ce) return;
  e.Ce = G(se), e.Ce.id = "cc-main", e.Ce.setAttribute("data-nosnippet", ""), Nf();
  let t = N.o.i.root;
  t && $t(t) && (t = document.querySelector(t)), (t || e.Ue.body).appendChild(e.Ce);
}, zf = (e) => $r((() => localStorage.removeItem(e))), ws = (e, t) => {
  if (t instanceof RegExp) return e.filter(((r) => t.test(r)));
  {
    const r = pa(e, t);
    return r > -1 ? [e[r]] : [];
  }
}, Lf = (e) => {
  const { hostname: t, protocol: r } = location, { name: n, path: i, domain: s, sameSite: o, useLocalStorage: a, secure: u } = N.t.cookie, l = 864e5 * jf(), p = /* @__PURE__ */ new Date();
  p.setTime(p.getTime() + l), N.o.p.expirationTime = p.getTime();
  const d = JSON.stringify(N.o.p);
  let g = n + "=" + encodeURIComponent(d) + (l !== 0 ? "; expires=" + p.toUTCString() : "") + "; Path=" + i + "; SameSite=" + o;
  oe(t, ".") && (g += "; Domain=" + s), u && r === "https:" && (g += "; Secure"), a ? ((f, h) => {
    $r((() => localStorage.setItem(f, h)));
  })(n, d) : document.cookie = g, N.o.p;
}, ks = (e, t, r) => {
  if (e.length === 0) return;
  const n = r || N.t.cookie.domain, i = t || N.t.cookie.path, s = n.slice(0, 4) === "www.", o = s && n.substring(4), a = (u, l) => {
    l && l.slice(0, 1) !== "." && (l = "." + l), document.cookie = u + "=; path=" + i + (l ? "; domain=" + l : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
  for (const u of e) a(u, r), r || a(u, n), s && a(u, o);
}, Tf = (e) => {
  const t = N.t.cookie.name, r = N.t.cookie.useLocalStorage;
  return ((i, s) => {
    let o;
    return o = $r((() => JSON.parse(s ? i : decodeURIComponent(i))), !0) || {}, o;
  })(r ? (n = t, $r((() => localStorage.getItem(n))) || "") : Mf(t), r);
  var n;
}, Mf = (e, t) => {
  const r = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
  return r ? r.pop() : "";
}, $f = (e) => {
  const t = document.cookie.split(/;\s*/), r = [];
  for (const n of t) {
    let i = n.split("=")[0];
    r.push(i);
  }
  return r;
}, Rf = (e, t = []) => {
  ((r, n) => {
    const { O: i, R: s, B: o, N: a, Z: u, $: l, X: p } = N.o;
    let d = [];
    if (r) {
      qr(r) ? d.push(...r) : $t(r) && (d = r === "all" ? i : [r]);
      for (const g of i) u[g] = oe(d, g) ? tt(p[g]) : [];
    } else d = [...s, ...l], a && (d = (() => {
      const g = N.ne.ae;
      if (!g) return [];
      let f = [];
      for (let h in g) g[h].checked && f.push(h);
      return f;
    })());
    d = d.filter(((g) => !oe(i, g) || !oe(n, g))), d.push(...o), ha(d);
  })(e, t), (() => {
    const r = N.o, { Z: n, B: i, Y: s, X: o, O: a } = r, u = a;
    r.te = Ge(s);
    for (const l of u) {
      const p = o[l], d = tt(p), g = n[l] && n[l].length > 0, f = oe(i, l);
      if (d.length !== 0) {
        if (s[l] = [], f) s[l].push(...d);
        else if (g) {
          const h = n[l];
          s[l].push(...h);
        } else s[l] = r.Z[l];
        s[l] = fa(s[l]);
      }
    }
  })(), (() => {
    const r = N.o;
    r.L = N.t.mode === Vt && r.D ? gn(r.$, r.R) : gn(r.R, r.p.categories);
    let n = r.L.length > 0, i = !1;
    for (const u of r.O) r.ee[u] = gn(r.Y[u], r.te[u]), r.ee[u].length > 0 && (i = !0);
    const s = N.ne.ae;
    for (const u in s) s[u].checked = oe(r.R, u);
    for (const u of r.O) {
      const l = N.ne.se[u], p = r.Y[u];
      for (const d in l) l[d].checked = oe(p, d);
    }
    r.C || (r.C = /* @__PURE__ */ new Date()), r.M || (r.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, ((u) => (u ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> u / 4).toString(16)))), r.p = { categories: Ge(r.R), revision: N.t.revision, data: r.h, consentTimestamp: r.C.toISOString(), consentId: r.M, services: Ge(r.Y), languageCode: N.o.l }, r.S && (r.p.lastConsentTimestamp = r.S.toISOString());
    let o = !1;
    const a = n || i;
    (r.D || a) && (r.D && (r.D = !1, o = !0), r.S = r.S ? /* @__PURE__ */ new Date() : r.C, r.p.lastConsentTimestamp = r.S.toISOString(), Lf(), N.t.autoClearCookies && (o || a) && ((u) => {
      const l = N.o, p = $f(), d = ((g) => {
        const f = N.o;
        return (g ? f.O : f.L).filter(((h) => {
          const m = f.P[h];
          return !!m && !m.readOnly && !!m.autoClear;
        }));
      })(u);
      for (const g in l.ee) for (const f of l.ee[g]) {
        const h = l.X[g][f].cookies;
        if (!oe(l.Y[g], f) && h) for (const m of h) {
          const _ = ws(p, m.name);
          ks(_, m.path, m.domain);
        }
      }
      for (const g of d) {
        const f = l.P[g].autoClear, h = f && f.cookies || [], m = oe(l.L, g), _ = !oe(l.R, g), j = m && _;
        if (u ? _ : j) {
          f.reloadPage && j && (l.j = !0);
          for (const y of h) {
            const P = ws(p, y.name);
            ks(P, y.path, y.domain);
          }
        }
      }
    })(o), Rn()), o && (Le(N.re.ie), Le(N.re.le), N.t.mode === la) || (a && Le(N.re.de), r.j && (r.j = !1, location.reload()));
  })();
}, Df = (e) => {
  const t = N.o.D ? [] : N.o.R;
  return oe(t, e);
}, Bf = (e, t) => {
  const r = N.o.D ? [] : N.o.Y[t] || [];
  return oe(r, e);
}, Ea = (e) => {
  const { ne: t, o: r } = N;
  if (!r.k) {
    if (!r.T) {
      if (!e) return;
      Sa(vi, Jt);
    }
    r.k = !0, r.J = Mr(), r.v && va(!0), ma(t.he, 1), ae(t.ye, ua), re(t.he, Se, "false"), setTimeout((() => {
      ze(N.ne.be);
    }), 100), Le(N.re.fe, fi);
  }
}, Ff = () => {
  const { ne: e, o: t, re: r } = N;
  t.k && (t.k = !1, t.v && va(), ze(e.Ke, !0), Ue(e.ye, ua), re(e.he, Se, "true"), ze(t.J), t.J = null, Le(r._e, fi));
}, Oa = () => {
  const e = N.o;
  e.A || (e.N || nr(vi, Jt), e.A = !0, e.k ? e.U = Mr() : e.J = Mr(), ma(N.ne.we, 2), ae(N.ne.ye, da), re(N.ne.we, Se, "false"), setTimeout((() => {
    ze(N.ne.ve);
  }), 100), Le(N.re.fe, hi));
}, Hf = () => {
  const e = N.o;
  e.A && (e.A = !1, (() => {
    const t = Ia(), r = N.o.P, n = N.ne.ae, i = N.ne.se, s = (o) => oe(N.o.$, o);
    for (const o in n) {
      const a = !!r[o].readOnly;
      n[o].checked = a || (t ? Df(o) : s(o));
      for (const u in i[o]) i[o][u].checked = a || (t ? Bf(u, o) : s(o));
    }
  })(), ze(N.ne.$e, !0), Ue(N.ne.ye, da), re(N.ne.we, Se, "true"), e.k ? (ze(e.U), e.U = null) : (ze(e.J), e.J = null), Le(N.re._e, hi));
};
var vi = { show: Ea, hide: Ff, showPreferences: Oa, hidePreferences: Hf, acceptCategory: Rf };
const Ia = () => !N.o.D, Wf = async (e) => {
  const { o: t, t: r, re: n } = N, i = window;
  if (!i._ccRun) {
    if (i._ccRun = !0, ((a) => {
      const { ne: u, t: l, o: p } = N, d = l, g = p, { cookie: f } = d, h = N.ce, m = a.cookie, _ = a.categories, j = tt(_) || [], y = navigator, P = document;
      u.Ue = P, u.ye = P.documentElement, f.domain = location.hostname, g.i = a, g.P = _, g.O = j, g._ = a.language.translations, g.v = !!a.disablePageInteraction, h.ie = a.onFirstConsent, h.le = a.onConsent, h.de = a.onChange, h._e = a.onModalHide, h.fe = a.onModalShow, h.ue = a.onModalReady;
      const { mode: w, autoShow: S, lazyHtmlGeneration: z, autoClearCookies: E, revision: C, manageScriptTags: T, hideFromBots: A } = a;
      w === Vt && (d.mode = w), typeof E == "boolean" && (d.autoClearCookies = E), typeof T == "boolean" && (d.manageScriptTags = T), typeof C == "number" && C >= 0 && (d.revision = C, g.V = !0), typeof S == "boolean" && (d.autoShow = S), typeof z == "boolean" && (d.lazyHtmlGeneration = z), A === !1 && (d.hideFromBots = !1), d.hideFromBots === !0 && y && (g.G = y.userAgent && /bot|crawl|spider|slurp|teoma/i.test(y.userAgent) || y.webdriver), $n(m) && (d.cookie = { ...f, ...m }), d.autoClearCookies, g.V, d.manageScriptTags, ((V) => {
        const { P: J, X: M, Y: H, Z: D, B: Z } = N.o;
        for (let Y of V) {
          const W = J[Y], k = W.services || {}, v = $n(k) && tt(k) || [];
          M[Y] = {}, H[Y] = [], D[Y] = [], W.readOnly && (Z.push(Y), H[Y] = v), N.ne.se[Y] = {};
          for (let O of v) {
            const b = k[O];
            b.Se = !1, M[Y][O] = b;
          }
        }
      })(j), (() => {
        if (!N.t.manageScriptTags) return;
        const V = N.o, J = gi(document, "script[" + Tr + "]");
        for (const M of J) {
          let H = Cr(M, Tr), D = M.dataset.service || "", Z = !1;
          if (H && H.charAt(0) === "!" && (H = H.slice(1), Z = !0), D.charAt(0) === "!" && (D = D.slice(1), Z = !0), oe(V.O, H) && (V.oe.push({ Me: M, xe: !1, ke: Z, De: H, Te: D }), D)) {
            const Y = V.X[H];
            Y[D] || (Y[D] = { Se: !1 });
          }
        }
      })(), Ca((() => {
        const V = N.o.i.language.autoDetect;
        if (V) {
          const J = { browser: navigator.language, document: document.documentElement.lang }, M = Pa(J[V]);
          if (M) return M;
        }
        return ja();
      })());
    })(e), t.G) return;
    (() => {
      const a = N.o, u = N.t, l = Tf(), { categories: p, services: d, consentId: g, consentTimestamp: f, lastConsentTimestamp: h, data: m, revision: _ } = l, j = qr(p);
      a.p = l, a.M = g;
      const y = !!g && $t(g);
      a.C = f, a.C && (a.C = new Date(f)), a.S = h, a.S && (a.S = new Date(h)), a.h = m !== void 0 ? m : null, a.V && y && _ !== u.revision && (a.I = !1), a.D = !(y && a.I && a.C && a.S && j), u.cookie.useLocalStorage && !a.D && (a.D = (/* @__PURE__ */ new Date()).getTime() > (l.expirationTime || 0), a.D && zf(u.cookie.name)), a.D, (() => {
        const P = N.o;
        for (const w of P.O) {
          const S = P.P[w];
          if (S.readOnly || S.enabled) {
            P.$.push(w);
            const z = P.X[w] || {};
            for (let E in z) P.Z[w].push(E), P.i.mode === Vt && P.Y[w].push(E);
          }
        }
      })(), a.D ? u.mode === Vt && (a.R = [...a.$]) : (a.Y = { ...a.Y, ...d }, a.Z = { ...a.Y }, ha([...a.B, ...p]));
    })();
    const o = Ia();
    if (!await Af()) return !1;
    if (ga(null, s = vi, nr, Jt), N.o.D && Sa(s, Jt), N.t.lazyHtmlGeneration || nr(s, Jt), r.autoShow && !o && Ea(!0), o) return Rn(), Le(n.le);
    r.mode === Vt && Rn(t.$);
  }
  var s;
};
function Ss(e, t, r, n, i) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : i;
  return e === i ? r : e;
}
var Kf = "function", Gf = "string", Pe = "undefined", Vf = "boolean", Rr = "object", Uf = "array", qf = "number", Yf = "symbol", Jf = "null", Aa = "any", Na = "*", ct = "__", Zf = "form", Xf = "input", Qf = "button", eh = "select", Dr = typeof process !== Pe ? process : {};
Dr.env && Dr.env.NODE_ENV;
var je = typeof document !== Pe;
Dr.versions != null && Dr.versions.node != null;
typeof Deno !== Pe && Deno.core;
je && window.name === "nodejs" || typeof navigator !== Pe && typeof navigator.userAgent !== Pe && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
function za(e, t) {
  return t.charAt(0)[e]() + t.slice(1);
}
var th = za.bind(null, "toUpperCase"), rh = za.bind(null, "toLowerCase");
function nh(e) {
  return La(e) ? th(Jf) : typeof e === Rr ? ch(e) : Object.prototype.toString.call(e).slice(8, -1);
}
function Br(e, t) {
  t === void 0 && (t = !0);
  var r = nh(e);
  return t ? rh(r) : r;
}
function or(e, t) {
  return typeof t === e;
}
var Ne = or.bind(null, Kf), Ct = or.bind(null, Gf), kt = or.bind(null, Pe), ih = or.bind(null, Vf);
or.bind(null, Yf);
function La(e) {
  return e === null;
}
function sh(e) {
  return Br(e) === qf && !isNaN(e);
}
function oh(e) {
  return Br(e) === Uf;
}
function xe(e) {
  if (!ah(e)) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ah(e) {
  return e && (typeof e === Rr || e !== null);
}
function ch(e) {
  return Ne(e.constructor) ? e.constructor.name : null;
}
function lh(e) {
  return e instanceof Error || Ct(e.message) && e.constructor && sh(e.constructor.stackTraceLimit);
}
function Ta(e, t) {
  if (typeof t != "object" || La(t)) return !1;
  if (t instanceof e) return !0;
  var r = Br(new e(""));
  if (lh(t)) for (; t; ) {
    if (Br(t) === r) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
Ta.bind(null, TypeError);
Ta.bind(null, SyntaxError);
function Yr(e, t) {
  var r = e instanceof Element || e instanceof HTMLDocument;
  return r && t ? uh(e, t) : r;
}
function uh(e, t) {
  return t === void 0 && (t = ""), e && e.nodeName === t.toUpperCase();
}
function Jr(e) {
  var t = [].slice.call(arguments, 1);
  return function() {
    return e.apply(void 0, [].slice.call(arguments).concat(t));
  };
}
Jr(Yr, Zf);
Jr(Yr, Qf);
Jr(Yr, Xf);
Jr(Yr, eh);
function Ps(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function dh() {
  if (je) {
    var e = navigator, t = e.languages;
    return e.userLanguage || (t && t.length ? t[0] : e.language);
  }
}
function ph() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function fh(e) {
  return (function(t) {
    for (var r, n = /* @__PURE__ */ Object.create(null), i = /([^&=]+)=?([^&]*)/g; r = i.exec(t); ) {
      var s = Ps(r[1]), o = Ps(r[2]);
      if (s) if (s.substring(s.length - 2) === "[]") {
        var a = n[s = s.substring(0, s.length - 2)] || (n[s] = []);
        n[s] = Array.isArray(a) ? a : [], n[s].push(o);
      } else n[s] = o === "" || o;
    }
    for (var u in n) {
      var l = u.split("[");
      l.length > 1 && (hh(n, l.map(function(p) {
        return p.replace(/[?[\]\\ ]/g, "");
      }), n[u]), delete n[u]);
    }
    return n;
  })((function(t) {
    return je && window.location.search.substring(1);
  })());
}
function hh(e, t, r) {
  for (var n = t.length - 1, i = 0; i < n; ++i) {
    var s = t[i];
    if (s === "__proto__" || s === "constructor") break;
    s in e || (e[s] = {}), e = e[s];
  }
  e[t[n]] = r;
}
function Zr() {
  for (var e = "", t = 0, r = 4294967295 * Math.random() | 0; t++ < 36; ) {
    var n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t - 1], i = 15 & r;
    e += n == "-" || n == "4" ? n : (n == "x" ? i : 3 & i | 8).toString(16), r = t % 8 == 0 ? 4294967295 * Math.random() | 0 : r >> 4;
  }
  return e;
}
var rt = "global", Nt = ct + rt + ct, zt = typeof self === Rr && self.self === self && self || typeof global === Rr && global[rt] === global && global || void 0;
function lt(e) {
  return zt[Nt][e];
}
function ut(e, t) {
  return zt[Nt][e] = t;
}
function Rt(e) {
  delete zt[Nt][e];
}
function Dt(e, t, r) {
  var n;
  try {
    if (yi(e)) {
      var i = window[e];
      n = i[t].bind(i);
    }
  } catch {
  }
  return n || r;
}
zt[Nt] || (zt[Nt] = {});
var vr = {};
function yi(e) {
  if (typeof vr[e] !== Pe) return vr[e];
  try {
    var t = window[e];
    t.setItem(Pe, Pe), t.removeItem(Pe);
  } catch {
    return vr[e] = !1;
  }
  return vr[e] = !0;
}
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ee.apply(null, arguments);
}
var Ke = "function", Me = "undefined", Zt = "reducer", Ma = "@@redux/", Bn = Ma + "INIT", gh = Ma + Math.random().toString(36), js = /* @__PURE__ */ (function() {
  return typeof Symbol === Ke && Symbol.observable || "@@observable";
})(), yr = " != " + Ke;
function $a(e, t, r) {
  var n;
  if (typeof t === Ke && typeof r === Me && (r = t, t = void 0), typeof r !== Me) {
    if (typeof r !== Ke) throw new Error("enhancer" + yr);
    return r($a)(e, t);
  }
  if (typeof e !== Ke) throw new Error(Zt + yr);
  var i = e, s = t, o = [], a = o, u = !1;
  function l() {
    a === o && (a = o.slice());
  }
  function p() {
    return s;
  }
  function d(f) {
    if (typeof f !== Ke) throw new Error("Listener" + yr);
    var h = !0;
    return l(), a.push(f), function() {
      if (h) {
        h = !1, l();
        var m = a.indexOf(f);
        a.splice(m, 1);
      }
    };
  }
  function g(f) {
    if (!xe(f)) throw new Error("Act != obj");
    if (typeof f.type === Me) throw new Error("ActType " + Me);
    if (u) throw new Error("Dispatch in " + Zt);
    try {
      u = !0, s = i(s, f);
    } finally {
      u = !1;
    }
    for (var h = o = a, m = 0; m < h.length; m++) (0, h[m])();
    return f;
  }
  return g({ type: Bn }), (n = { dispatch: g, subscribe: d, getState: p, replaceReducer: function(f) {
    if (typeof f !== Ke) throw new Error("next " + Zt + yr);
    i = f, g({ type: Bn });
  } })[js] = function() {
    var f, h = d;
    return (f = { subscribe: function(m) {
      if (typeof m != "object") throw new TypeError("Observer != obj");
      function _() {
        m.next && m.next(p());
      }
      return _(), { unsubscribe: h(_) };
    } })[js] = function() {
      return this;
    }, f;
  }, n;
}
function mh(e, t) {
  var r = t && t.type;
  return "action " + (r && r.toString() || "?") + Zt + " " + e + " returns " + Me;
}
function Lt() {
  var e = [].slice.call(arguments);
  return e.length === 0 ? function(t) {
    return t;
  } : e.length === 1 ? e[0] : e.reduce(function(t, r) {
    return function() {
      return t(r.apply(void 0, [].slice.call(arguments)));
    };
  });
}
function vh() {
  var e = arguments;
  return function(t) {
    return function(r, n, i) {
      var s, o = t(r, n, i), a = o.dispatch, u = { getState: o.getState, dispatch: function(l) {
        return a(l);
      } };
      return s = [].slice.call(e).map(function(l) {
        return l(u);
      }), ee({}, o, { dispatch: a = Lt.apply(void 0, s)(o.dispatch) });
    };
  };
}
var qe = ct + "anon_id", nt = ct + "user_id", Et = ct + "user_traits", Fn = "analytics", We = "userId", St = "anonymousId", Or = ["bootstrap", "params", "campaign", "initializeStart", "initialize", "initializeEnd", "ready", "resetStart", "reset", "resetEnd", "pageStart", "page", "pageEnd", "pageAborted", "trackStart", "track", "trackEnd", "trackAborted", "identifyStart", "identify", "identifyEnd", "identifyAborted", "userIdChanged", "registerPlugins", "enablePlugin", "disablePlugin", "online", "offline", "setItemStart", "setItem", "setItemEnd", "setItemAborted", "removeItemStart", "removeItem", "removeItemEnd", "removeItemAborted"], Hn = ["name", "EVENTS", "config", "loaded"], Q = Or.reduce(function(e, t) {
  return e[t] = t, e;
}, { registerPluginType: function(e) {
  return "registerPlugin:" + e;
}, pluginReadyType: function(e) {
  return "ready:" + e;
} }), Cs = /^utm_/, Es = /^an_prop_/, Os = /^an_trait_/;
function yh(e) {
  var t = e.storage.setItem;
  return function(r) {
    return function(n) {
      return function(i) {
        if (i.type === Q.bootstrap) {
          var s = i.params, o = i.user, a = i.persistedUser, u = i.initialUser, l = a.userId === o.userId;
          a.anonymousId !== o.anonymousId && t(qe, o.anonymousId), l || t(nt, o.userId), u.traits && t(Et, ee({}, l && a.traits ? a.traits : {}, u.traits));
          var p = Object.keys(i.params);
          if (p.length) {
            var d = s.an_uid, g = s.an_event, f = p.reduce(function(h, m) {
              if (m.match(Cs) || m.match(/^(d|g)clid/)) {
                var _ = m.replace(Cs, "");
                h.campaign[_ === "campaign" ? "name" : _] = s[m];
              }
              return m.match(Es) && (h.props[m.replace(Es, "")] = s[m]), m.match(Os) && (h.traits[m.replace(Os, "")] = s[m]), h;
            }, { campaign: {}, props: {}, traits: {} });
            r.dispatch(ee({ type: Q.params, raw: s }, f, d ? { userId: d } : {})), d && setTimeout(function() {
              return e.identify(d, f.traits);
            }, 0), g && setTimeout(function() {
              return e.track(g, f.props);
            }, 0), Object.keys(f.campaign).length && r.dispatch({ type: Q.campaign, campaign: f.campaign });
          }
        }
        return n(i);
      };
    };
  };
}
function xh(e) {
  return function(t, r) {
    if (t === void 0 && (t = {}), r === void 0 && (r = {}), r.type === Q.setItemEnd) {
      if (r.key === qe) return ee({}, t, { anonymousId: r.value });
      if (r.key === nt) return ee({}, t, { userId: r.value });
    }
    switch (r.type) {
      case Q.identify:
        return Object.assign({}, t, { userId: r.userId, traits: ee({}, t.traits, r.traits) });
      case Q.reset:
        return [nt, qe, Et].forEach(function(n) {
          e.removeItem(n);
        }), Object.assign({}, t, { userId: null, anonymousId: null, traits: {} });
      default:
        return t;
    }
  };
}
function Is(e) {
  return { userId: e.getItem(nt), anonymousId: e.getItem(qe), traits: e.getItem(Et) };
}
var Wn = function(e) {
  return ct + "TEMP" + ct + e;
};
function bh(e) {
  var t = e.storage, r = t.setItem, n = t.removeItem, i = t.getItem;
  return function(s) {
    return function(o) {
      return function(a) {
        var u = a.userId, l = a.traits, p = a.options;
        if (a.type === Q.reset && ([nt, Et, qe].forEach(function(f) {
          n(f);
        }), [We, St, "traits"].forEach(function(f) {
          Rt(Wn(f));
        })), a.type === Q.identify) {
          i(qe) || r(qe, Zr());
          var d = i(nt), g = i(Et) || {};
          d && d !== u && s.dispatch({ type: Q.userIdChanged, old: { userId: d, traits: g }, new: { userId: u, traits: l }, options: p }), u && r(nt, u), l && r(Et, ee({}, g, l));
        }
        return o(a);
      };
    };
  };
}
var Ut = {};
function As(e, t) {
  Ut[e] && Ne(Ut[e]) && (Ut[e](t), delete Ut[e]);
}
function Ra(e, t, r) {
  return new Promise(function(n, i) {
    return t() ? n(e) : r < 1 ? i(ee({}, e, { queue: !0 })) : new Promise(function(s) {
      return setTimeout(s, 10);
    }).then(function(s) {
      return Ra(e, t, r - 10).then(n, i);
    });
  });
}
function _h(e) {
  return { abort: e };
}
function Da(e, t, r) {
  var n = {}, i = t(), s = e.getState(), o = s.plugins, a = s.queue, u = s.user;
  if (!s.context.offline && a && a.actions && a.actions.length) {
    var l = a.actions.reduce(function(d, g, f) {
      return o[g.plugin].loaded ? (d.process.push(g), d.processIndex.push(f)) : (d.requeue.push(g), d.requeueIndex.push(f)), d;
    }, { processIndex: [], process: [], requeue: [], requeueIndex: [] });
    if (l.processIndex && l.processIndex.length) {
      l.processIndex.forEach(function(d) {
        var g = a.actions[d], f = g.plugin, h = g.payload.type, m = i[f][h];
        if (m && Ne(m)) {
          var _, j = (function(w, S) {
            return w === void 0 && (w = {}), S === void 0 && (S = {}), [We, St].reduce(function(z, E) {
              return w.hasOwnProperty(E) && S[E] && S[E] !== w[E] && (z[E] = S[E]), z;
            }, w);
          })(g.payload, u), y = n[j.meta.rid];
          if (!y && (_ = m({ payload: j, config: o[f].config, instance: r, abort: _h })) && xe(_) && _.abort) return void (n[j.meta.rid] = !0);
          if (!y) {
            var P = h + ":" + f;
            e.dispatch(ee({}, j, { type: P, _: { called: P, from: "queueDrain" } }));
          }
        }
      });
      var p = a.actions.filter(function(d, g) {
        return !~l.processIndex.indexOf(g);
      });
      a.actions = p;
    }
  }
}
var xn = function(e) {
  var t = e.data, r = e.action, n = e.instance, i = e.state, s = e.allPlugins, o = e.allMatches, a = e.store, u = e.EVENTS;
  try {
    var l = i.plugins, p = i.context, d = r.type, g = d.match(Ot), f = t.exact.map(function(_) {
      return _.pluginName;
    });
    g && (f = o.during.map(function(_) {
      return _.pluginName;
    }));
    var h = /* @__PURE__ */ (function(_, j) {
      return function(y, P, w) {
        var S = P.config, z = P.name, E = z + "." + y.type;
        w && (E = w.event);
        var C = y.type.match(Ot) ? /* @__PURE__ */ (function(T, A, V, J, M) {
          return function(H, D) {
            var Z = J ? J.name : T, Y = D && ir(D) ? D : V;
            if (J && (!(Y = D && ir(D) ? D : [T]).includes(T) || Y.length !== 1)) throw new Error("Method " + A + " can only abort " + T + " plugin. " + JSON.stringify(Y) + " input valid");
            return ee({}, M, { abort: { reason: H, plugins: Y, caller: A, _: Z } });
          };
        })(z, E, j, w, y) : /* @__PURE__ */ (function(T, A) {
          return function() {
            throw new Error(T.type + " action not cancellable. Remove abort in " + A);
          };
        })(y, E);
        return { payload: wh(y), instance: _, config: S || {}, abort: C };
      };
    })(n, f), m = t.exact.reduce(function(_, j) {
      var y = j.pluginName, P = j.methodName, w = !1;
      return P.match(/^initialize/) || P.match(/^reset/) || (w = !l[y].loaded), p.offline && P.match(/^(page|track|identify)/) && (w = !0), _["" + y] = w, _;
    }, {});
    return Promise.resolve(t.exact.reduce(function(_, j, y) {
      var P = j.pluginName;
      return Promise.resolve(_).then(function(w) {
        function S() {
          return Promise.resolve(w);
        }
        var z = (function() {
          if (t.namespaced && t.namespaced[P]) return Promise.resolve(t.namespaced[P].reduce(function(E, C, T) {
            return Promise.resolve(E).then(function(A) {
              return C.method && Ne(C.method) ? ((function(H, D) {
                var Z = Rs(H);
                if (Z && Z.name === D) {
                  var Y = Rs(Z.method);
                  throw new Error([D + " plugin is calling method " + H, "Plugins cant call self", "Use " + Z.method + " " + (Y ? "or " + Y.method : "") + " in " + D + " plugin insteadof " + H].join(`
`));
                }
              })(C.methodName, C.pluginName), Promise.resolve(C.method({ payload: A, instance: n, abort: (V = A, J = P, M = C.pluginName, function(H, D) {
                return ee({}, V, { abort: { reason: H, plugins: D || [J], caller: d, from: M || J } });
              }), config: Ls(C.pluginName, l, s), plugins: l })).then(function(H) {
                var D = xe(H) ? H : {};
                return Promise.resolve(ee({}, A, D));
              })) : A;
              var V, J, M;
            });
          }, Promise.resolve(r))).then(function(E) {
            w[P] = E;
          });
          w[P] = r;
        })();
        return z && z.then ? z.then(S) : S();
      });
    }, Promise.resolve({}))).then(function(_) {
      return Promise.resolve(t.exact.reduce(function(j, y, P) {
        try {
          var w = t.exact.length === P + 1, S = y.pluginName, z = s[S];
          return Promise.resolve(j).then(function(E) {
            var C = _[S] ? _[S] : {};
            if (g && (C = E), _n(C, S)) return bn({ data: C, method: d, instance: n, pluginName: S, store: a }), Promise.resolve(E);
            if (_n(E, S)) return w && bn({ data: E, method: d, instance: n, store: a }), Promise.resolve(E);
            if (m.hasOwnProperty(S) && m[S] === !0) return a.dispatch({ type: "queue", plugin: S, payload: C, _: { called: "queue", from: "queueMechanism" } }), Promise.resolve(E);
            var T = h(_[S], s[S]);
            return Promise.resolve(z[d]({ abort: T.abort, payload: C, instance: n, config: Ls(S, l, s), plugins: l })).then(function(A) {
              var V = xe(A) ? A : {}, J = ee({}, E, V), M = _[S];
              if (_n(M, S)) bn({ data: M, method: d, instance: n, pluginName: S, store: a });
              else {
                var H = d + ":" + S;
                (H.match(/:/g) || []).length < 2 && !d.match(Ns) && !d.match(zs) && n.dispatch(ee({}, g ? J : C, { type: H, _: { called: H, from: "submethod" } }));
              }
              return Promise.resolve(J);
            });
          });
        } catch (E) {
          return Promise.reject(E);
        }
      }, Promise.resolve(r))).then(function(j) {
        if (!(d.match(Ot) || d.match(/^registerPlugin/) || d.match(zs) || d.match(Ns) || d.match(/^params/) || d.match(/^userIdChanged/))) {
          if (u.plugins.includes(d), j._ && j._.originalAction === d) return j;
          var y = ee({}, j, { _: { originalAction: j.type, called: j.type, from: "engineEnd" } });
          Ba(j, t.exact.length) && !d.match(/End$/) && (y = ee({}, y, { type: j.type + "Aborted" })), a.dispatch(y);
        }
        return j;
      });
    });
  } catch (_) {
    return Promise.reject(_);
  }
}, Ot = /Start$/, Ns = /^bootstrap/, zs = /^ready/;
function bn(e) {
  var t = e.pluginName, r = e.method + "Aborted" + (t ? ":" + t : "");
  e.store.dispatch(ee({}, e.data, { type: r, _: { called: r, from: "abort" } }));
}
function Ls(e, t, r) {
  var n = t[e] || r[e];
  return n && n.config ? n.config : {};
}
function Ts(e, t) {
  return t.reduce(function(r, n) {
    return n[e] ? r.concat({ methodName: e, pluginName: n.name, method: n[e] }) : r;
  }, []);
}
function Ms(e, t) {
  var r = e.replace(Ot, ""), n = t ? ":" + t : "";
  return ["" + e + n, "" + r + n, r + "End" + n];
}
function _n(e, t) {
  var r = e.abort;
  return !!r && (r === !0 || $s(r, t) || r && $s(r.plugins, t));
}
function Ba(e, t) {
  var r = e.abort;
  if (!r) return !1;
  if (r === !0 || Ct(r)) return !0;
  var n = r.plugins;
  return ir(r) && r.length === t || ir(n) && n.length === t;
}
function ir(e) {
  return Array.isArray(e);
}
function $s(e, t) {
  return !(!e || !ir(e)) && e.includes(t);
}
function Rs(e) {
  var t = e.match(/(.*):(.*)/);
  return !!t && { method: t[1], name: t[2] };
}
function wh(e) {
  return Object.keys(e).reduce(function(t, r) {
    return r === "type" || (t[r] = xe(e[r]) ? Object.assign({}, e[r]) : e[r]), t;
  }, {});
}
function kh(e, t, r) {
  var n = {};
  return function(i) {
    return function(s) {
      return function(o) {
        try {
          var a, u = function(w) {
            return a ? w : s(d);
          }, l = o.type, p = o.plugins, d = o;
          if (o.abort) return Promise.resolve(s(o));
          if (l === Q.enablePlugin && i.dispatch({ type: Q.initializeStart, plugins: p, disabled: [], fromEnable: !0, meta: o.meta }), l === Q.disablePlugin && setTimeout(function() {
            return As(o.meta.rid, { payload: o });
          }, 0), l === Q.initializeEnd) {
            var g = t(), f = Object.keys(g), h = f.filter(function(w) {
              return p.includes(w);
            }).map(function(w) {
              return g[w];
            }), m = [], _ = [], j = o.disabled, y = h.map(function(w) {
              var S = w.loaded, z = w.name, E = w.config;
              return Ra(w, function() {
                return S({ config: E });
              }, 1e4).then(function(C) {
                return n[z] || (i.dispatch({ type: Q.pluginReadyType(z), name: z, events: Object.keys(w).filter(function(T) {
                  return !Hn.includes(T);
                }) }), n[z] = !0), m = m.concat(z), w;
              }).catch(function(C) {
                if (C instanceof Error) throw new Error(C);
                return _ = _.concat(C.name), C;
              });
            });
            Promise.all(y).then(function(w) {
              var S = { plugins: m, failed: _, disabled: j };
              setTimeout(function() {
                f.length === y.length + j.length && i.dispatch(ee({}, { type: Q.ready }, S));
              }, 0);
            });
          }
          var P = (function() {
            if (l !== Q.bootstrap) return /^ready:([^:]*)$/.test(l) && setTimeout(function() {
              return Da(i, t, e);
            }, 0), Promise.resolve((function(w, S, z, E, C) {
              try {
                var T = Ne(S) ? S() : S, A = w.type, V = A.replace(Ot, "");
                if (w._ && w._.called) return Promise.resolve(w);
                var J = z.getState(), M = (Z = T, (Y = J.plugins) === void 0 && (Y = {}), (W = w.options) === void 0 && (W = {}), Object.keys(Z).filter(function(k) {
                  var v = W.plugins || {};
                  return ih(v[k]) ? v[k] : v.all !== !1 && (!Y[k] || Y[k].enabled !== !1);
                }).map(function(k) {
                  return Z[k];
                }));
                A === Q.initializeStart && w.fromEnable && (M = Object.keys(J.plugins).filter(function(k) {
                  var v = J.plugins[k];
                  return w.plugins.includes(k) && !v.initialized;
                }).map(function(k) {
                  return T[k];
                }));
                var H = M.map(function(k) {
                  return k.name;
                }), D = (function(k, v) {
                  var O = Ms(k).map(function(b) {
                    return Ts(b, v);
                  });
                  return v.reduce(function(b, I) {
                    var L = I.name, $ = Ms(k, L).map(function(X) {
                      return Ts(X, v);
                    }), B = $[0], F = $[1], R = $[2];
                    return B.length && (b.beforeNS[L] = B), F.length && (b.duringNS[L] = F), R.length && (b.afterNS[L] = R), b;
                  }, { before: O[0], beforeNS: {}, during: O[1], duringNS: {}, after: O[2], afterNS: {} });
                })(A, M);
                return Promise.resolve(xn({ action: w, data: { exact: D.before, namespaced: D.beforeNS }, state: J, allPlugins: T, allMatches: D, instance: z, store: E, EVENTS: C })).then(function(k) {
                  function v() {
                    var I = (function() {
                      if (A.match(Ot)) return Promise.resolve(xn({ action: ee({}, O, { type: V + "End" }), data: { exact: D.after, namespaced: D.afterNS }, state: J, allPlugins: T, allMatches: D, instance: z, store: E, EVENTS: C })).then(function(L) {
                        L.meta && L.meta.hasCallback && As(L.meta.rid, { payload: L });
                      });
                    })();
                    return I && I.then ? I.then(function() {
                      return k;
                    }) : k;
                  }
                  if (Ba(k, H.length)) return k;
                  var O, b = (function() {
                    if (A !== V) return Promise.resolve(xn({ action: ee({}, k, { type: V }), data: { exact: D.during, namespaced: D.duringNS }, state: J, allPlugins: T, allMatches: D, instance: z, store: E, EVENTS: C })).then(function(I) {
                      O = I;
                    });
                    O = k;
                  })();
                  return b && b.then ? b.then(v) : v();
                });
              } catch (k) {
                return Promise.reject(k);
              }
              var Z, Y, W;
            })(o, t, e, i, r)).then(function(w) {
              var S = s(w);
              return a = 1, S;
            });
          })();
          return Promise.resolve(P && P.then ? P.then(u) : u(P));
        } catch (w) {
          return Promise.reject(w);
        }
      };
    };
  };
}
function Sh(e) {
  return function(t) {
    return function(r) {
      return function(n) {
        var i = n.type, s = n.key, o = n.value, a = n.options;
        if (i === Q.setItem || i === Q.removeItem) {
          if (n.abort) return r(n);
          i === Q.setItem ? e.setItem(s, o, a) : e.removeItem(s, a);
        }
        return r(n);
      };
    };
  };
}
var Ph = function() {
  var e = this;
  this.before = [], this.after = [], this.addMiddleware = function(t, r) {
    e[r] = e[r].concat(t);
  }, this.removeMiddleware = function(t, r) {
    var n = e[r].findIndex(function(i) {
      return i === t;
    });
    n !== -1 && (e[r] = [].concat(e[r].slice(0, n), e[r].slice(n + 1)));
  }, this.dynamicMiddlewares = function(t) {
    return function(r) {
      return function(n) {
        return function(i) {
          var s = { getState: r.getState, dispatch: function(a) {
            return r.dispatch(a);
          } }, o = e[t].map(function(a) {
            return a(s);
          });
          return Lt.apply(void 0, o)(n)(i);
        };
      };
    };
  };
};
function jh(e) {
  return function(t, r) {
    t === void 0 && (t = {});
    var n = {};
    if (r.type === "initialize:aborted") return t;
    if (/^registerPlugin:([^:]*)$/.test(r.type)) {
      var i = Ds(r.type, "registerPlugin"), s = e()[i];
      if (!s || !i) return t;
      var o = r.enabled, a = s.config;
      return n[i] = { enabled: o, initialized: !!o && !s.initialize, loaded: !!o && !!s.loaded({ config: a }), config: a }, ee({}, t, n);
    }
    if (/^initialize:([^:]*)$/.test(r.type)) {
      var u = Ds(r.type, Q.initialize), l = e()[u];
      return l && u ? (n[u] = ee({}, t[u], { initialized: !0, loaded: !!l.loaded({ config: l.config }) }), ee({}, t, n)) : t;
    }
    if (/^ready:([^:]*)$/.test(r.type)) return n[r.name] = ee({}, t[r.name], { loaded: !0 }), ee({}, t, n);
    switch (r.type) {
      case Q.disablePlugin:
        return ee({}, t, Bs(r.plugins, !1, t));
      case Q.enablePlugin:
        return ee({}, t, Bs(r.plugins, !0, t));
      default:
        return t;
    }
  };
}
function Ds(e, t) {
  return e.substring(t.length + 1, e.length);
}
function Bs(e, t, r) {
  return e.reduce(function(n, i) {
    return n[i] = ee({}, r[i], { enabled: t }), n;
  }, r);
}
function Fa(e) {
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
  }
  return e;
}
var Ch = { last: {}, history: [] };
function Eh(e, t) {
  e === void 0 && (e = Ch);
  var r = t.options, n = t.meta;
  if (t.type === Q.track) {
    var i = Fa(ee({ event: t.event, properties: t.properties }, Object.keys(r).length && { options: r }, { meta: n }));
    return ee({}, e, { last: i, history: e.history.concat(i) });
  }
  return e;
}
var Oh = { actions: [] };
function Ih(e, t) {
  e === void 0 && (e = Oh);
  var r = t.payload;
  switch (t.type) {
    case "queue":
      var n;
      return n = r && r.type && r.type === Q.identify ? [t].concat(e.actions) : e.actions.concat(t), ee({}, e, { actions: n });
    case "dequeue":
      return [];
    default:
      return e;
  }
}
var Ha = /#.*$/;
function Ah(e) {
  var t = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);
  return "/" + (t && t[3] ? t[3].split("?")[0].replace(Ha, "") : "");
}
var Wa, Ka, Ga, Va, Nh = function(e) {
  if (e === void 0 && (e = {}), !je) return e;
  var t = document, r = t.title, n = t.referrer, i = window, s = i.location, o = i.innerWidth, a = i.innerHeight, u = s.hash, l = s.search, p = (function(g) {
    var f = (function() {
      if (je) {
        for (var h, m = document.getElementsByTagName("link"), _ = 0; h = m[_]; _++) if (h.getAttribute("rel") === "canonical") return h.getAttribute("href");
      }
    })();
    return f ? f.match(/\?/) ? f : f + g : window.location.href.replace(Ha, "");
  })(l), d = { title: r, url: p, path: Ah(p), hash: u, search: l, width: o, height: a };
  return n && n !== "" && (d.referrer = n), ee({}, d, e);
}, zh = { last: {}, history: [] };
function Lh(e, t) {
  e === void 0 && (e = zh);
  var r = t.options;
  if (t.type === Q.page) {
    var n = Fa(ee({ properties: t.properties, meta: t.meta }, Object.keys(r).length && { options: r }));
    return ee({}, e, { last: n, history: e.history.concat(n) });
  }
  return e;
}
Wa = (function() {
  if (!je) return !1;
  var e = navigator.appVersion;
  return ~e.indexOf("Win") ? "Windows" : ~e.indexOf("Mac") ? "MacOS" : ~e.indexOf("X11") ? "UNIX" : ~e.indexOf("Linux") ? "Linux" : "Unknown OS";
})(), Ka = je ? document.referrer : null, Ga = dh(), Va = ph();
var Fs = { initialized: !1, sessionId: Zr(), app: null, version: null, debug: !1, offline: !!je && !navigator.onLine, os: { name: Wa }, userAgent: je ? navigator.userAgent : "node", library: { name: Fn, version: "0.13.1" }, timezone: Va, locale: Ga, campaign: {}, referrer: Ka };
function Th(e, t) {
  e === void 0 && (e = Fs);
  var r = e.initialized, n = t.campaign;
  switch (t.type) {
    case Q.campaign:
      return ee({}, e, { campaign: n });
    case Q.offline:
      return ee({}, e, { offline: !0 });
    case Q.online:
      return ee({}, e, { offline: !1 });
    default:
      return r ? e : ee({}, Fs, e, { initialized: !0 });
  }
}
var Mh = ["plugins", "reducers", "storage"];
function $h(e, t, r) {
  if (je) {
    var n = window[(r ? "add" : "remove") + "EventListener"];
    e.split(" ").forEach(function(i) {
      n(i, t);
    });
  }
}
function Rh(e) {
  var t = $h.bind(null, "online offline", function(r) {
    return Promise.resolve(!navigator.onLine).then(e);
  });
  return t(!0), function(r) {
    return t(!1);
  };
}
function Ua() {
  return ut(Fn, []), function(e) {
    return function(t, r, n) {
      var i = e(t, r, n), s = i.dispatch;
      return Object.assign(i, { dispatch: function(o) {
        return zt[Nt][Fn].push(o.action || o), s(o);
      } });
    };
  };
}
function Hs(e) {
  return function() {
    return Lt(Lt.apply(null, arguments), Ua());
  };
}
function wn(e) {
  return e ? oh(e) ? e : [e] : [];
}
function Ws(e, t, r) {
  e === void 0 && (e = {});
  var n, i, s = Zr();
  return t && (Ut[s] = (n = t, i = (function(o) {
    for (var a, u = o || Array.prototype.slice.call(arguments), l = 0; l < u.length; l++) if (Ne(u[l])) {
      a = u[l];
      break;
    }
    return a;
  })(r), function(o) {
    i && i(o), n(o);
  })), ee({}, e, { rid: s, ts: (/* @__PURE__ */ new Date()).getTime() }, t ? { hasCallback: !0 } : {});
}
function Dh(e) {
  e === void 0 && (e = {});
  var t = e.reducers || {}, r = e.initialUser || {}, n = (e.plugins || []).reduce(function(k, v) {
    if (Ne(v)) return k.middlewares = k.middlewares.concat(v), k;
    if (v.NAMESPACE && (v.name = v.NAMESPACE), !v.name) throw new Error("https://lytics.dev/errors/1");
    v.config || (v.config = {});
    var O = v.EVENTS ? Object.keys(v.EVENTS).map(function(L) {
      return v.EVENTS[L];
    }) : [];
    k.pluginEnabled[v.name] = !(v.enabled === !1 || v.config.enabled === !1), delete v.enabled, v.methods && (k.methods[v.name] = Object.keys(v.methods).reduce(function(L, $) {
      var B;
      return L[$] = (B = v.methods[$], function() {
        for (var F = Array.prototype.slice.call(arguments), R = new Array(B.length), X = 0; X < F.length; X++) R[X] = F[X];
        return R[R.length] = S, B.apply({ instance: S }, R);
      }), L;
    }, {}), delete v.methods);
    var b = Object.keys(v).concat(O), I = new Set(k.events.concat(b));
    if (k.events = Array.from(I), k.pluginsArray = k.pluginsArray.concat(v), k.plugins[v.name]) throw new Error(v.name + "AlreadyLoaded");
    return k.plugins[v.name] = v, k.plugins[v.name].loaded || (k.plugins[v.name].loaded = function() {
      return !0;
    }), k;
  }, { plugins: {}, pluginEnabled: {}, methods: {}, pluginsArray: [], middlewares: [], events: [] }), i = e.storage ? e.storage : { getItem: lt, setItem: ut, removeItem: Rt }, s = /* @__PURE__ */ (function(k) {
    return function(v, O, b) {
      return O.getState("user")[v] || (b && xe(b) && b[v] ? b[v] : Is(k)[v] || lt(Wn(v)) || null);
    };
  })(i), o = n.plugins, a = n.events.filter(function(k) {
    return !Hn.includes(k);
  }).sort(), u = new Set(a.concat(Or).filter(function(k) {
    return !Hn.includes(k);
  })), l = Array.from(u).sort(), p = function() {
    return o;
  }, d = new Ph(), g = d.addMiddleware, f = d.removeMiddleware, h = d.dynamicMiddlewares, m = function() {
    throw new Error("Abort disabled inListener");
  }, _ = fh(), j = Is(i), y = ee({}, j, r, _.an_uid ? { userId: _.an_uid } : {}, _.an_aid ? { anonymousId: _.an_aid } : {});
  y.anonymousId || (y.anonymousId = Zr());
  var P = ee({ enable: function(k, v) {
    return new Promise(function(O) {
      D.dispatch({ type: Q.enablePlugin, plugins: wn(k), _: { originalAction: Q.enablePlugin } }, O, [v]);
    });
  }, disable: function(k, v) {
    return new Promise(function(O) {
      D.dispatch({ type: Q.disablePlugin, plugins: wn(k), _: { originalAction: Q.disablePlugin } }, O, [v]);
    });
  } }, n.methods), w = !1, S = { identify: function(k, v, O, b) {
    try {
      var I = Ct(k) ? k : null, L = xe(k) ? k : v, $ = O || {}, B = S.user();
      ut(Wn(We), I);
      var F = I || L.userId || s(We, S, L);
      return Promise.resolve(new Promise(function(R) {
        D.dispatch(ee({ type: Q.identifyStart, userId: F, traits: L || {}, options: $, anonymousId: B.anonymousId }, B.id && B.id !== I && { previousId: B.id }), R, [v, O, b]);
      }));
    } catch (R) {
      return Promise.reject(R);
    }
  }, track: function(k, v, O, b) {
    try {
      var I = xe(k) ? k.event : k;
      if (!I || !Ct(I)) throw new Error("EventMissing");
      var L = xe(k) ? k : v || {}, $ = xe(O) ? O : {};
      return Promise.resolve(new Promise(function(B) {
        D.dispatch({ type: Q.trackStart, event: I, properties: L, options: $, userId: s(We, S, v), anonymousId: s(St, S, v) }, B, [v, O, b]);
      }));
    } catch (B) {
      return Promise.reject(B);
    }
  }, page: function(k, v, O) {
    try {
      var b = xe(k) ? k : {}, I = xe(v) ? v : {};
      return Promise.resolve(new Promise(function(L) {
        D.dispatch({ type: Q.pageStart, properties: Nh(b), options: I, userId: s(We, S, b), anonymousId: s(St, S, b) }, L, [k, v, O]);
      }));
    } catch (L) {
      return Promise.reject(L);
    }
  }, user: function(k) {
    if (k === We || k === "id") return s(We, S);
    if (k === St || k === "anonId") return s(St, S);
    var v = S.getState("user");
    return k ? Ss(v, k) : v;
  }, reset: function(k) {
    return new Promise(function(v) {
      D.dispatch({ type: Q.resetStart }, v, k);
    });
  }, ready: function(k) {
    return w && k({ plugins: P, instance: S }), S.on(Q.ready, function(v) {
      k && k(v), w = !0;
    });
  }, on: function(k, v) {
    if (!k || !Ne(v)) return !1;
    if (k === Q.bootstrap) throw new Error(".on disabled for " + k);
    var O = /Start$|Start:/;
    if (k === "*") {
      var b = function(B) {
        return function(F) {
          return function(R) {
            return R.type.match(O) && v({ payload: R, instance: S, plugins: o }), F(R);
          };
        };
      }, I = function(B) {
        return function(F) {
          return function(R) {
            return R.type.match(O) || v({ payload: R, instance: S, plugins: o }), F(R);
          };
        };
      };
      return g(b, xr), g(I, br), function() {
        f(b, xr), f(I, br);
      };
    }
    var L = k.match(O) ? xr : br, $ = function(B) {
      return function(F) {
        return function(R) {
          return R.type === k && v({ payload: R, instance: S, plugins: o, abort: m }), F(R);
        };
      };
    };
    return g($, L), function() {
      return f($, L);
    };
  }, once: function(k, v) {
    if (!k || !Ne(v)) return !1;
    if (k === Q.bootstrap) throw new Error(".once disabled for " + k);
    var O = S.on(k, function(b) {
      v({ payload: b.payload, instance: S, plugins: o, abort: m }), O();
    });
    return O;
  }, getState: function(k) {
    var v = D.getState();
    return k ? Ss(v, k) : Object.assign({}, v);
  }, dispatch: function(k) {
    var v = Ct(k) ? { type: k } : k;
    if (Or.includes(v.type)) throw new Error("reserved action " + v.type);
    var O = ee({}, v, { _: ee({ originalAction: v.type }, k._ || {}) });
    D.dispatch(O);
  }, enablePlugin: P.enable, disablePlugin: P.disable, plugins: P, storage: { getItem: i.getItem, setItem: function(k, v, O) {
    D.dispatch({ type: Q.setItemStart, key: k, value: v, options: O });
  }, removeItem: function(k, v) {
    D.dispatch({ type: Q.removeItemStart, key: k, options: v });
  } }, setAnonymousId: function(k, v) {
    S.storage.setItem(qe, k, v);
  }, events: { core: Or, plugins: a } }, z = n.middlewares.concat([function(k) {
    return function(v) {
      return function(O) {
        return O.meta || (O.meta = Ws()), v(O);
      };
    };
  }, h(xr), kh(S, p, { all: l, plugins: a }), Sh(i), yh(S), bh(S), h(br)]), E = { context: Th, user: xh(i), page: Lh, track: Eh, plugins: jh(p), queue: Ih }, C = Lt, T = Lt;
  if (je && e.debug) {
    var A = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    A && (C = A({ trace: !0, traceLimit: 25 })), T = function() {
      return arguments.length === 0 ? Ua() : xe(typeof arguments[0]) ? Hs() : Hs().apply(null, arguments);
    };
  }
  var V, J = (function(k) {
    return Object.keys(k).reduce(function(v, O) {
      return Mh.includes(O) || (v[O] = k[O]), v;
    }, {});
  })(e), M = n.pluginsArray.reduce(function(k, v) {
    var O = v.name, b = v.config, I = v.loaded, L = n.pluginEnabled[O];
    return k[O] = { enabled: L, initialized: !!L && !v.initialize, loaded: !!I({ config: b }), config: b }, k;
  }, {}), H = { context: J, user: y, plugins: M }, D = $a((function(k) {
    for (var v = Object.keys(k), O = {}, b = 0; b < v.length; b++) {
      var I = v[b];
      typeof k[I] === Ke && (O[I] = k[I]);
    }
    var L, $ = Object.keys(O);
    try {
      (function(B) {
        Object.keys(B).forEach(function(F) {
          var R = B[F];
          if (typeof R(void 0, { type: Bn }) === Me || typeof R(void 0, { type: gh }) === Me) throw new Error(Zt + " " + F + " " + Me);
        });
      })(O);
    } catch (B) {
      L = B;
    }
    return function(B, F) {
      if (B === void 0 && (B = {}), L) throw L;
      for (var R = !1, X = {}, ce = 0; ce < $.length; ce++) {
        var de = $[ce], be = B[de], Ee = (0, O[de])(be, F);
        if (typeof Ee === Me) {
          var we = mh(de, F);
          throw new Error(we);
        }
        X[de] = Ee, R = R || Ee !== be;
      }
      return R ? X : B;
    };
  })(ee({}, E, t)), H, T(C(vh.apply(void 0, z))));
  D.dispatch = (V = D.dispatch, function(k, v, O) {
    var b = ee({}, k, { meta: Ws(k.meta, v, wn(O)) });
    return V.apply(null, [b]);
  });
  var Z = Object.keys(o);
  D.dispatch({ type: Q.bootstrap, plugins: Z, config: J, params: _, user: y, initialUser: r, persistedUser: j });
  var Y = Z.filter(function(k) {
    return n.pluginEnabled[k];
  }), W = Z.filter(function(k) {
    return !n.pluginEnabled[k];
  });
  return D.dispatch({ type: Q.registerPlugins, plugins: Z, enabled: n.pluginEnabled }), n.pluginsArray.map(function(k, v) {
    var O = k.bootstrap, b = k.config, I = k.name;
    O && Ne(O) && O({ instance: S, config: b, payload: k }), D.dispatch({ type: Q.registerPluginType(I), name: I, enabled: n.pluginEnabled[I], plugin: k }), n.pluginsArray.length === v + 1 && D.dispatch({ type: Q.initializeStart, plugins: Y, disabled: W });
  }), Rh(function(k) {
    D.dispatch({ type: k ? Q.offline : Q.online });
  }), (function(k, v, O) {
    setInterval(function() {
      return Da(k, v, O);
    }, 3e3);
  })(D, p, S), S;
}
var xr = "before", br = "after", it = "cookie", Qe = Ja(), qa = Xr, Bh = Xr;
function Ya(e) {
  return Qe ? Xr(e, "", -1) : Rt(e);
}
function Ja() {
  if (Qe !== void 0) return Qe;
  var e = it + it;
  try {
    Xr(e, e), Qe = document.cookie.indexOf(e) !== -1, Ya(e);
  } catch {
    Qe = !1;
  }
  return Qe;
}
function Xr(e, t, r, n, i, s) {
  if (typeof window < "u") {
    var o = arguments.length > 1;
    return Qe === !1 && (o ? ut(e, t) : lt(e)), o ? document.cookie = e + "=" + encodeURIComponent(t) + (r ? "; expires=" + new Date(+/* @__PURE__ */ new Date() + 1e3 * r).toUTCString() + (n ? "; path=" + n : "") + (i ? "; domain=" + i : "") + (s ? "; secure" : "") : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0]);
  }
}
var Re = "localStorage", Fh = yi.bind(null, Re);
Dt(Re, "getItem", lt);
Dt(Re, "setItem", ut);
Dt(Re, "removeItem", Rt);
var De = "sessionStorage", Hh = yi.bind(null, De);
Dt(De, "getItem", lt);
Dt(De, "setItem", ut);
Dt(De, "removeItem", Rt);
function It(e) {
  var t = e;
  try {
    if ((t = JSON.parse(e)) === "true") return !0;
    if (t === "false") return !1;
    if (xe(t)) return t;
    parseFloat(t) === t && (t = parseFloat(t));
  } catch {
  }
  if (t !== null && t !== "") return t;
}
var Wh = Fh(), Kh = Hh(), Gh = Ja();
function Za(e, t) {
  if (e) {
    var r = xi(t), n = !ki(r), i = bi(r) ? It(localStorage.getItem(e)) : void 0;
    if (n && !kt(i)) return i;
    var s = _i(r) ? It(qa(e)) : void 0;
    if (n && s) return s;
    var o = wi(r) ? It(sessionStorage.getItem(e)) : void 0;
    if (n && o) return o;
    var a = lt(e);
    return n ? a : { localStorage: i, sessionStorage: o, cookie: s, global: a };
  }
}
function Vh(e, t, r) {
  if (e && !kt(t)) {
    var n = {}, i = xi(r), s = JSON.stringify(t), o = !ki(i);
    return bi(i) && (n[Re] = _r(Re, t, It(localStorage.getItem(e))), localStorage.setItem(e, s), o) ? n[Re] : _i(i) && (n[it] = _r(it, t, It(qa(e))), Bh(e, s), o) ? n[it] : wi(i) && (n[De] = _r(De, t, It(sessionStorage.getItem(e))), sessionStorage.setItem(e, s), o) ? n[De] : (n[rt] = _r(rt, t, lt(e)), ut(e, t), o ? n[rt] : n);
  }
}
function Uh(e, t) {
  if (e) {
    var r = xi(t), n = Za(e, Na), i = {};
    return !kt(n.localStorage) && bi(r) && (localStorage.removeItem(e), i[Re] = n.localStorage), !kt(n.cookie) && _i(r) && (Ya(e), i[it] = n.cookie), !kt(n.sessionStorage) && wi(r) && (sessionStorage.removeItem(e), i[De] = n.sessionStorage), !kt(n.global) && Qr(r, rt) && (Rt(e), i[rt] = n.global), i;
  }
}
function xi(e) {
  return e ? Ct(e) ? e : e.storage : Aa;
}
function bi(e) {
  return Wh && Qr(e, Re);
}
function _i(e) {
  return Gh && Qr(e, it);
}
function wi(e) {
  return Kh && Qr(e, De);
}
function ki(e) {
  return e === Na || e === "all";
}
function Qr(e, t) {
  return e === Aa || e === t || ki(e);
}
function _r(e, t, r) {
  return { location: e, current: t, previous: r };
}
var qh = { setItem: Vh, getItem: Za, removeItem: Uh };
function Yh(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ks(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ks(Object(r), !0).forEach(function(n) {
      Yh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ks(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    storage: qh
  };
  return Dh(Gs(Gs({}, t), e));
}
function Vs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(r), !0).forEach(function(n) {
      Zh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zh(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Xh = {
  debug: !1,
  containerId: null,
  dataLayerName: "dataLayer",
  dataLayer: void 0,
  preview: void 0,
  auth: void 0,
  execution: "async"
  // assumesPageview: true,
}, kr;
function Qh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = "https://www.googletagmanager.com/gtm.js";
  return {
    name: "google-tag-manager",
    config: wr(wr({}, Xh), e),
    initialize: function(n) {
      var i = n.config, s = i.containerId, o = i.dataLayerName, a = i.customScriptSrc, u = i.preview, l = i.auth, p = i.execution, d = i.nonce;
      if (!s)
        throw new Error("No google tag manager containerId defined");
      if (u && !l)
        throw new Error("When enabling preview mode, both preview and auth parameters must be defined");
      var g = a || t;
      qs(s, g) || ((function(f, h, m, _, j) {
        f[_] = f[_] || [], f[_].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        var y = h.getElementsByTagName(m)[0], P = h.createElement(m), w = _ != "dataLayer" ? "&l=" + _ : "", S = u ? "&gtm_preview=" + u + "&gtm_auth=" + l + "&gtm_cookies_win=x" : "";
        p && (P[p] = !0), P.src = "".concat(g, "?id=") + j + w + S, d && P.setAttribute("nonce", d), y.parentNode.insertBefore(P, y);
      })(window, document, "script", o, s), kr = o, i.dataLayer = window[o]);
    },
    page: function(n) {
      var i = n.payload;
      n.options, n.instance;
      var s = n.config;
      typeof s.dataLayer < "u" && s.dataLayer.push(i.properties);
    },
    track: function(n) {
      var i = n.payload;
      n.options;
      var s = n.config;
      if (typeof s.dataLayer < "u") {
        var o = i.anonymousId, a = i.userId, u = i.properties, l = u;
        a && (l.userId = a), o && (l.anonymousId = o), u.category || (l.category = "All"), s.debug && console.log("dataLayer push", wr({
          event: i.event
        }, l)), s.dataLayer.push(wr({
          event: i.event
        }, l));
      }
    },
    loaded: function() {
      var n = !!kr && !!(window[kr] && Array.prototype.push !== window[kr].push);
      return qs(e.containerId, e.customScriptSrc || t) && n;
    }
  };
}
var Us = {};
function qs(e, t) {
  var r = Us[e];
  if (!r) {
    var n = t.replace(/^https?:\/\//, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = new RegExp(n + ".*[?&]id=" + e), Us[e] = r;
  }
  var i = document.querySelectorAll("script[src]");
  return !!Object.keys(i).filter(function(s) {
    return (i[s].src || "").match(r);
  }).length;
}
var eg = Qh;
const tg = "GTM-KTZG4PZS", rg = ({ containerId: e = tg }) => (console.log({ containerId: e }), Jh({
  app: "awesome-app",
  plugins: [
    eg({
      containerId: e
    })
  ]
}));
var Si = {
  consentModal: {
    title: "We Value Your Privacy",
    description: 'This website uses tracking technologies, such as cookies, to analyze user behavior and improve your experience. Tracking will only be enabled if you explicitly accept. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
    acceptAllBtn: "Accept All",
    acceptNecessaryBtn: "Reject All",
    showPreferencesBtn: "Manage Preferences",
    footer: '<a href="https://www.plexicus.ai/privacy">Privacy Policy</a>'
  },
  preferencesModal: {
    title: "Cookie Preferences",
    acceptAllBtn: "Accept All",
    acceptNecessaryBtn: "Reject All",
    savePreferencesBtn: "Save Preferences",
    closeIconLabel: "Close",
    sections: [
      {
        title: "Cookie Usage",
        description: 'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You have the option to opt in or out of each category at any time. For more details on cookies and other sensitive data, please review our full <a href="https://www.plexicus.ai/privacy">privacy policy</a>.'
      },
      {
        title: "Strictly Necessary Cookies",
        description: "These cookies are essential for the website to function properly and cannot be disabled. They do not store any personally identifiable information.",
        linkedCategory: "necessary"
      },
      {
        title: "Performance and Analytics Cookies",
        description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
        linkedCategory: "analytics",
        cookieTable: {
          headers: {
            name: "Name",
            domain: "Service",
            description: "Description",
            expiration: "Expiration"
          },
          body: [
            {
              name: "_ga",
              domain: "Google Analytics",
              description: 'This cookie is set by <a href="#das">Google Analytics</a>.',
              expiration: "Expires after 12 days"
            },
            {
              name: "_gid",
              domain: "Google Analytics",
              description: 'This cookie is set by <a href="#das">Google Analytics</a>.',
              expiration: "Session"
            }
          ]
        }
      },
      {
        title: "More Information",
        description: 'For any questions regarding our cookie policy or your choices, please <a class="cc__link" href="#yourdomain.com">contact us</a>.'
      }
    ]
  }
}, ng = Si.consentModal, ig = Si.preferencesModal;
const sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: ng,
  default: Si,
  preferencesModal: ig
}, Symbol.toStringTag, { value: "Module" }));
var Pi = {
  consentModal: {
    title: "Kami Menghargai Privasi Anda",
    description: 'Situs web ini menggunakan teknologi pelacakan, seperti cookie, untuk menganalisis perilaku pengguna dan meningkatkan pengalaman Anda. Pelacakan hanya akan diaktifkan jika Anda menerimanya secara eksplisit. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Kelola preferensi</a>',
    acceptAllBtn: "Terima Semua",
    acceptNecessaryBtn: "Tolak Semua",
    showPreferencesBtn: "Kelola Preferensi",
    footer: '<a href="https://www.plexicus.ai/privacy">Kebijakan Privasi</a>'
  },
  preferencesModal: {
    title: "Preferensi Cookie",
    acceptAllBtn: "Terima Semua",
    acceptNecessaryBtn: "Tolak Semua",
    savePreferencesBtn: "Simpan Preferensi",
    closeIconLabel: "Tutup",
    sections: [
      {
        title: "Penggunaan Cookie",
        description: 'Kami menggunakan cookie untuk memastikan fungsionalitas dasar situs web dan untuk meningkatkan pengalaman online Anda. Anda memiliki opsi untuk ikut serta atau keluar dari setiap kategori kapan saja. Untuk perincian lebih lanjut mengenai cookie dan data sensitif lainnya, silakan tinjau <a href="https://www.plexicus.ai/privacy">kebijakan privasi</a> lengkap kami.'
      },
      {
        title: "Cookie yang Sangat Diperlukan",
        description: "Cookie ini penting agar situs web berfungsi dengan baik dan tidak dapat dinonaktifkan. Cookie ini tidak menyimpan informasi identitas pribadi apa pun.",
        linkedCategory: "necessary"
      },
      {
        title: "Cookie Performa dan Analitik",
        description: "Cookie ini memungkinkan kami menghitung kunjungan dan sumber lalu lintas sehingga kami dapat mengukur dan meningkatkan performa situs kami. Cookie ini membantu kami mengetahui halaman mana yang paling dan paling tidak populer serta melihat bagaimana pengunjung bergerak di sekitar situs. Semua informasi yang dikumpulkan oleh cookie ini bersifat agregat dan anonim. Jika Anda tidak mengizinkan cookie ini, kami tidak akan tahu kapan Anda mengunjungi situs kami, dan tidak akan dapat memantau performanya.",
        linkedCategory: "analytics",
        cookieTable: {
          headers: {
            name: "Nama",
            domain: "Layanan",
            description: "Deskripsi",
            expiration: "Kedaluwarsa"
          },
          body: [
            {
              name: "_ga",
              domain: "Google Analytics",
              description: 'Cookie ini ditetapkan oleh <a href="#das">Google Analytics</a>.',
              expiration: "Kedaluwarsa setelah 12 hari"
            },
            {
              name: "_gid",
              domain: "Google Analytics",
              description: 'Cookie ini ditetapkan oleh <a href="#das">Google Analytics</a>.',
              expiration: "Sesi"
            }
          ]
        }
      },
      {
        title: "Informasi Lebih Lanjut",
        description: 'Untuk pertanyaan apa pun mengenai kebijakan cookie atau pilihan Anda, silakan <a class="cc__link" href="#yourdomain.com">hubungi kami</a>.'
      }
    ]
  }
}, og = Pi.consentModal, ag = Pi.preferencesModal;
const cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: og,
  default: Pi,
  preferencesModal: ag
}, Symbol.toStringTag, { value: "Module" })), _t = {}, Ys = /* @__PURE__ */ Object.assign({ "./en/cookie.yaml": sg, "./id/cookie.yaml": cg });
for (const e in Ys) {
  const t = Ys[e], n = e.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (_t[n] || (_t[n] = {}), typeof t != "object" || t === null) {
    console.warn(`File ${e} is not a valid object, skipping.`);
    continue;
  }
  _t[n].cookie || (_t[n].cookie = {}), Object.assign(_t[n], t);
}
const lg = () => ({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: !0,
      flipButtons: !1
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: !0,
      flipButtons: !1
    }
  },
  onFirstConsent: function() {
  },
  onConsent: function(e) {
    e.cookie.categories.includes("analytics") && rg({}).page();
  },
  categories: {
    necessary: {
      readOnly: !0,
      enabled: !0
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/
          }
        ]
      }
    }
  },
  language: {
    default: "en",
    translations: _t
  }
}), ug = ({ webUrl: e, lang: t }) => (_e(() => {
  Wf(lg());
}, []), /* @__PURE__ */ c.jsx("a", { className: "underline hover:text-gray-700 cursor-pointer", onClick: Oa, children: "Show Cookie Preferences" }));
function yg({ lang: e, fullSiteUrl: t = "http://localhost:8000", fullBlogUrl: r = "http://localhost:9000", showLanguageSelector: n = !0 }) {
  const [i, s] = ye("/"), { t: o, i18n: a } = Fr();
  _e(() => {
    a.changeLanguage(e), s(e !== "en" ? `/${e}/` : "/");
  }, []);
  const u = Ir(t, mo), l = Ir(r, vo), p = [
    {
      alt: o("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ c.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ c.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: o("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ c.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ c.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
          clipRule: "evenodd"
        }
      ) })
    },
    {
      alt: o("footer.social_media.github"),
      link: "https://github.com/apps/plexicus",
      icon: /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: o("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], d = [
    {
      title: o("footer.sections.products.title"),
      items: [
        {
          link: `${u}${i}products/cnapp-platform`,
          text: o("footer.sections.products.links.platform_overview")
        },
        {
          link: `${u}${i}products/benefits`,
          text: o("footer.sections.products.links.benefits")
        },
        {
          link: `${u}${i}products/use-cases`,
          text: o("footer.sections.products.links.use_cases")
        },
        {
          link: `${u}${i}products/aspm`,
          text: o("footer.sections.products.links.aspm")
        },
        {
          link: `${u}${i}products/cspm`,
          text: o("footer.sections.products.links.cspm")
        },
        {
          link: `${u}${i}products/container`,
          text: o("footer.sections.products.links.container_security")
        },
        {
          link: `${u}${i}products/cwpp`,
          text: o("footer.sections.products.links.cwpp")
        },
        {
          link: `${u}${i}products/ciem`,
          text: o("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: o("footer.sections.resources.title"),
      items: [
        {
          link: `${l}${i}`,
          text: o("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: o("footer.sections.resources.links.documentation")
        },
        {
          text: o("nav.resources.branding_assets"),
          link: `${u}${i}branding-assets`
        },
        {
          text: o("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog"
        },
        {
          text: o("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus"
        },
        {
          text: o("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests"
        },
        {
          text: o("nav.resources.integrations"),
          link: `${u}${i}integrations`
        },
        {
          text: o("nav.resources.comparison_overview"),
          link: `${u}${i}comparison/overview`
        }
      ]
    },
    {
      title: o("footer.sections.company.title"),
      items: [
        {
          link: `${u}${i}contact`,
          text: o("footer.sections.company.links.contact")
        },
        {
          link: `${u}${i}privacy`,
          text: o("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${u}${i}pricing`,
          text: o("footer.sections.products.links.pricing")
        },
        {
          link: `${u}${i}support`,
          text: o("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ c.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ c.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ c.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ c.jsx(pe, { href: `${u}${i}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ c.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: o("footer.tagline") }),
        /* @__PURE__ */ c.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: p.map(({ link: g, icon: f, alt: h }) => /* @__PURE__ */ c.jsxs(pe, { target: "_blank", href: g, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: h }),
          f
        ] }, g)) }),
        n && /* @__PURE__ */ c.jsx("div", { className: "mt-6", children: /* @__PURE__ */ c.jsx(Sf, {}) })
      ] }),
      d.map(({ title: g, items: f }) => /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: g }),
        /* @__PURE__ */ c.jsx("ul", { className: "space-y-2", children: f.map(({ link: h, text: m }) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx(pe, { href: h, className: "text-gray-600 hover:text-purple-700", children: m }) }, m)) })
      ] }, g))
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ c.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ c.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx(pe, { href: `${u}${i}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: o("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ c.jsx(pe, { href: `${u}${i}management`, className: "underline hover:text-gray-700", children: o("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ c.jsx(pe, { href: `${u}${i}legal`, className: "underline hover:text-gray-700", children: o("footer.policies.legal_notice") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ c.jsx(ug, { webUrl: u, lang: i })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ c.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        o("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
export {
  mg as CommandDialogSearch,
  yg as FooterPlexicus,
  vg as NavbarPlexicus,
  Sf as SelectLanguage,
  rg as analytics
};
