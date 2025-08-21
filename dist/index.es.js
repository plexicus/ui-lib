(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .top-full{top:100%}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-1{right:calc(var(--spacing)*1)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .left-3{left:calc(var(--spacing)*3)}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-2{margin-top:calc(var(--spacing)*2)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-7{height:calc(var(--spacing)*7)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-96{max-height:calc(var(--spacing)*96)}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-\\[calc\\(100vh-80px\\)\\]{max-height:calc(100vh - 80px)}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-7{width:calc(var(--spacing)*7)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-9{width:calc(var(--spacing)*9)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-64{width:calc(var(--spacing)*64)}.ui-lib .w-\\[24px\\]{width:24px}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-\\[200\\%\\]{width:200%}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-\\[90vw\\]{max-width:90vw}.ui-lib .max-w-\\[100px\\]{max-width:100px}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-0{min-width:calc(var(--spacing)*0)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .origin-right{transform-origin:100%}.ui-lib .origin-top{transform-origin:top}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-1{gap:calc(var(--spacing)*1)}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-2{border-style:var(--tw-border-style);border-width:2px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]{background-color:#8220ff}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-\\[\\#8220ff\\]\\/60{background-color:#8220ff99}.ui-lib .bg-background,.ui-lib .bg-background\\/80{background-color:var(--background)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-background\\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-gray-100{background-color:var(--color-gray-100)}.ui-lib .bg-gray-200{background-color:var(--color-gray-200)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-0{padding:calc(var(--spacing)*0)}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-3{padding:calc(var(--spacing)*3)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pr-10{padding-right:calc(var(--spacing)*10)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .pl-10{padding-left:calc(var(--spacing)*10)}.ui-lib .text-center{text-align:center}.ui-lib .text-left{text-align:left}.ui-lib .font-mono{font-family:var(--font-mono)}.ui-lib .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-\\[\\#8220ff\\]\\/80{color:#8220ffcc}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-discrete{transition-behavior:allow-discrete}.ui-lib .delay-0{transition-delay:0s}.ui-lib .delay-500{transition-delay:.5s}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ui-lib .delay-0{--tw-animation-delay:0s;animation-delay:0s}.ui-lib .delay-500{--tw-animation-delay:.5s;animation-delay:.5s}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .paused{animation-play-state:paused}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}}.ui-lib .selection\\:bg-primary ::selection{background-color:var(--primary)}.ui-lib .selection\\:bg-primary::selection{background-color:var(--primary)}.ui-lib .selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.ui-lib .selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.ui-lib .file\\:inline-flex::file-selector-button{display:inline-flex}.ui-lib .file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.ui-lib .file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.ui-lib .file\\:bg-transparent::file-selector-button{background-color:#0000}.ui-lib .file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .file\\:text-foreground::file-selector-button{color:var(--foreground)}.ui-lib .placeholder\\:text-white\\/70::placeholder{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.ui-lib .placeholder\\:text-white\\/70::placeholder{color:color-mix(in oklab,var(--color-white)70%,transparent)}}@media (hover:hover){.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-purple-200:hover{background-color:var(--color-purple-200)}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-\\[\\#8220ff\\]:hover{color:#8220ff}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-\\[\\#8220ff\\]:focus{border-color:#8220ff}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-\\[\\#8220ff\\]\\/20:focus{--tw-ring-color:oklab(54.3459% .11409 -.259125/.2)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible,.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:64rem){.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}')),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as ss from "react";
import As, { createContext as We, useContext as re, useCallback as Ve, useState as te, useRef as le, useEffect as oe, useLayoutEffect as Qa, useId as ai, useInsertionEffect as Yr, useMemo as Fe, Children as el, isValidElement as tl, Fragment as qr, createElement as sl, forwardRef as il, Component as nl } from "react";
import { Search as Ms, X as Xr, Globe as rl } from "lucide-react";
var Ot = { exports: {} }, ut = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function ol() {
  if (ln) return ut;
  ln = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function s(i, n, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), n.key !== void 0 && (r = "" + n.key), "key" in n) {
      o = {};
      for (var a in n)
        a !== "key" && (o[a] = n[a]);
    } else o = n;
    return n = o.ref, {
      $$typeof: t,
      type: i,
      key: r,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return ut.Fragment = e, ut.jsx = s, ut.jsxs = s, ut;
}
var dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function al() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === L ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case y:
          return "Fragment";
        case _:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case T:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case m:
            return "Portal";
          case w:
            return (b.displayName || "Context") + ".Provider";
          case k:
            return (b._context.displayName || "Context") + ".Consumer";
          case g:
            var R = b.render;
            return b = b.displayName, b || (b = R.displayName || R.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case z:
            return R = b.displayName || null, R !== null ? R : t(b.type) || "Memo";
          case x:
            R = b._payload, b = b._init;
            try {
              return t(b(R));
            } catch {
            }
        }
      return null;
    }
    function e(b) {
      return "" + b;
    }
    function s(b) {
      try {
        e(b);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var B = R.error, $ = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return B.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), e(b);
      }
    }
    function i(b) {
      if (b === y) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === x)
        return "<...>";
      try {
        var R = t(b);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var b = V.A;
      return b === null ? null : b.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function r(b) {
      if (N.call(b, "key")) {
        var R = Object.getOwnPropertyDescriptor(b, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, R) {
      function B() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      B.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: B,
        configurable: !0
      });
    }
    function l() {
      var b = t(this.type);
      return C[b] || (C[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, R, B, $, K, ee, He, Y) {
      return B = ee.ref, b = {
        $$typeof: f,
        type: b,
        key: R,
        props: ee,
        _owner: K
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: He
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function d(b, R, B, $, K, ee, He, Y) {
      var J = R.children;
      if (J !== void 0)
        if ($)
          if (q(J)) {
            for ($ = 0; $ < J.length; $++)
              h(J[$]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(J);
      if (N.call(R, "key")) {
        J = t(b);
        var me = Object.keys(R).filter(function(ct) {
          return ct !== "key";
        });
        $ = 0 < me.length ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}", G[J + $] || (me = 0 < me.length ? "{" + me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          J,
          me,
          J
        ), G[J + $] = !0);
      }
      if (J = null, B !== void 0 && (s(B), J = "" + B), r(R) && (s(R.key), J = "" + R.key), "key" in R) {
        B = {};
        for (var je in R)
          je !== "key" && (B[je] = R[je]);
      } else B = R;
      return J && a(
        B,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        J,
        ee,
        K,
        n(),
        B,
        He,
        Y
      );
    }
    function h(b) {
      typeof b == "object" && b !== null && b.$$typeof === f && b._store && (b._store.validated = 1);
    }
    var p = As, f = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), w = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), V = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, q = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var se, C = {}, O = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), S = F(i(o)), G = {};
    dt.Fragment = y, dt.jsx = function(b, R, B, $, K) {
      var ee = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        b,
        R,
        B,
        !1,
        $,
        K,
        ee ? Error("react-stack-top-frame") : O,
        ee ? F(i(b)) : S
      );
    }, dt.jsxs = function(b, R, B, $, K) {
      var ee = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        b,
        R,
        B,
        !0,
        $,
        K,
        ee ? Error("react-stack-top-frame") : O,
        ee ? F(i(b)) : S
      );
    };
  })()), dt;
}
var un;
function ll() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? Ot.exports = ol() : Ot.exports = al()), Ot.exports;
}
var c = ll();
function Zr(t) {
  var e, s, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (e = 0; e < n; e++) t[e] && (s = Zr(t[e])) && (i && (i += " "), i += s);
  } else for (s in t) t[s] && (i && (i += " "), i += s);
  return i;
}
function Jr() {
  for (var t, e, s = 0, i = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (e = Zr(t)) && (i && (i += " "), i += e);
  return i;
}
const dn = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, hn = Jr, cl = (t, e) => (s) => {
  var i;
  if ((e == null ? void 0 : e.variants) == null) return hn(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: o } = e, r = Object.keys(n).map((u) => {
    const d = s == null ? void 0 : s[u], h = o == null ? void 0 : o[u];
    if (d === null) return null;
    const p = dn(d) || dn(h);
    return n[u][p];
  }), a = s && Object.entries(s).reduce((u, d) => {
    let [h, p] = d;
    return p === void 0 || (u[h] = p), u;
  }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, d) => {
    let { class: h, className: p, ...f } = d;
    return Object.entries(f).every((m) => {
      let [y, v] = m;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...a
      }[y]) : {
        ...o,
        ...a
      }[y] === v;
    }) ? [
      ...u,
      h,
      p
    ] : u;
  }, []);
  return hn(t, r, l, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
}, li = "-", ul = (t) => {
  const e = hl(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (r) => {
      const a = r.split(li);
      return a[0] === "" && a.length !== 1 && a.shift(), Qr(a, e) || dl(r);
    },
    getConflictingClassGroupIds: (r, a) => {
      const l = s[r] || [];
      return a && i[r] ? [...l, ...i[r]] : l;
    }
  };
}, Qr = (t, e) => {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const s = t[0], i = e.nextPart.get(s), n = i ? Qr(t.slice(1), i) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const o = t.join(li);
  return (r = e.validators.find(({
    validator: a
  }) => a(o))) == null ? void 0 : r.classGroupId;
}, pn = /^\[(.+)\]$/, dl = (t) => {
  if (pn.test(t)) {
    const e = pn.exec(t)[1], s = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, hl = (t) => {
  const {
    theme: e,
    classGroups: s
  } = t, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in s)
    Ls(s[n], i, n, e);
  return i;
}, Ls = (t, e, s, i) => {
  t.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? e : fn(e, n);
      o.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (pl(n)) {
        Ls(n(i), e, s, i);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([o, r]) => {
      Ls(r, fn(e, o), s, i);
    });
  });
}, fn = (t, e) => {
  let s = t;
  return e.split(li).forEach((i) => {
    s.nextPart.has(i) || s.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(i);
  }), s;
}, pl = (t) => t.isThemeGetter, fl = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const n = (o, r) => {
    s.set(o, r), e++, e > t && (e = 0, i = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let r = s.get(o);
      if (r !== void 0)
        return r;
      if ((r = i.get(o)) !== void 0)
        return n(o, r), r;
    },
    set(o, r) {
      s.has(o) ? s.set(o, r) : n(o, r);
    }
  };
}, zs = "!", Rs = ":", ml = Rs.length, gl = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: s
  } = t;
  let i = (n) => {
    const o = [];
    let r = 0, a = 0, l = 0, u;
    for (let m = 0; m < n.length; m++) {
      let y = n[m];
      if (r === 0 && a === 0) {
        if (y === Rs) {
          o.push(n.slice(l, m)), l = m + ml;
          continue;
        }
        if (y === "/") {
          u = m;
          continue;
        }
      }
      y === "[" ? r++ : y === "]" ? r-- : y === "(" ? a++ : y === ")" && a--;
    }
    const d = o.length === 0 ? n : n.substring(l), h = yl(d), p = h !== d, f = u && u > l ? u - l : void 0;
    return {
      modifiers: o,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: f
    };
  };
  if (e) {
    const n = e + Rs, o = i;
    i = (r) => r.startsWith(n) ? o(r.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: r,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const n = i;
    i = (o) => s({
      className: o,
      parseClassName: n
    });
  }
  return i;
}, yl = (t) => t.endsWith(zs) ? t.substring(0, t.length - 1) : t.startsWith(zs) ? t.substring(1) : t, xl = (t) => {
  const e = Object.fromEntries(t.orderSensitiveModifiers.map((i) => [i, !0]));
  return (i) => {
    if (i.length <= 1)
      return i;
    const n = [];
    let o = [];
    return i.forEach((r) => {
      r[0] === "[" || e[r] ? (n.push(...o.sort(), r), o = []) : o.push(r);
    }), n.push(...o.sort()), n;
  };
}, vl = (t) => ({
  cache: fl(t.cacheSize),
  parseClassName: gl(t),
  sortModifiers: xl(t),
  ...ul(t)
}), bl = /\s+/, _l = (t, e) => {
  const {
    parseClassName: s,
    getClassGroupId: i,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = e, r = [], a = t.trim().split(bl);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: h,
      modifiers: p,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: y
    } = s(d);
    if (h) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!y, _ = i(v ? m.substring(0, y) : m);
    if (!_) {
      if (!v) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (_ = i(m), !_) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const k = o(p).join(":"), w = f ? k + zs : k, g = w + _;
    if (r.includes(g))
      continue;
    r.push(g);
    const P = n(_, v);
    for (let T = 0; T < P.length; ++T) {
      const z = P[T];
      r.push(w + z);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function wl() {
  let t = 0, e, s, i = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (s = eo(e)) && (i && (i += " "), i += s);
  return i;
}
const eo = (t) => {
  if (typeof t == "string")
    return t;
  let e, s = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (e = eo(t[i])) && (s && (s += " "), s += e);
  return s;
};
function kl(t, ...e) {
  let s, i, n, o = r;
  function r(l) {
    const u = e.reduce((d, h) => h(d), t());
    return s = vl(u), i = s.cache.get, n = s.cache.set, o = a, a(l);
  }
  function a(l) {
    const u = i(l);
    if (u)
      return u;
    const d = _l(l, s);
    return n(l, d), d;
  }
  return function() {
    return o(wl.apply(null, arguments));
  };
}
const Q = (t) => {
  const e = (s) => s[t] || [];
  return e.isThemeGetter = !0, e;
}, to = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, so = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pl = /^\d+\/\d+$/, Sl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Tl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Al = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (t) => Pl.test(t), D = (t) => !!t && !Number.isNaN(Number(t)), Ce = (t) => !!t && Number.isInteger(Number(t)), us = (t) => t.endsWith("%") && D(t.slice(0, -1)), _e = (t) => Sl.test(t), Ml = () => !0, Ll = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jl.test(t) && !Cl.test(t)
), io = () => !1, zl = (t) => Tl.test(t), Rl = (t) => Al.test(t), Ol = (t) => !A(t) && !M(t), El = (t) => it(t, oo, io), A = (t) => to.test(t), ze = (t) => it(t, ao, Ll), ds = (t) => it(t, $l, D), mn = (t) => it(t, no, io), Il = (t) => it(t, ro, Rl), Et = (t) => it(t, lo, zl), M = (t) => so.test(t), ht = (t) => nt(t, ao), Nl = (t) => nt(t, Bl), gn = (t) => nt(t, no), Vl = (t) => nt(t, oo), Dl = (t) => nt(t, ro), It = (t) => nt(t, lo, !0), it = (t, e, s) => {
  const i = to.exec(t);
  return i ? i[1] ? e(i[1]) : s(i[2]) : !1;
}, nt = (t, e, s = !1) => {
  const i = so.exec(t);
  return i ? i[1] ? e(i[1]) : s : !1;
}, no = (t) => t === "position" || t === "percentage", ro = (t) => t === "image" || t === "url", oo = (t) => t === "length" || t === "size" || t === "bg-size", ao = (t) => t === "length", $l = (t) => t === "number", Bl = (t) => t === "family-name", lo = (t) => t === "shadow", Fl = () => {
  const t = Q("color"), e = Q("font"), s = Q("text"), i = Q("font-weight"), n = Q("tracking"), o = Q("leading"), r = Q("breakpoint"), a = Q("container"), l = Q("spacing"), u = Q("radius"), d = Q("shadow"), h = Q("inset-shadow"), p = Q("text-shadow"), f = Q("drop-shadow"), m = Q("blur"), y = Q("perspective"), v = Q("aspect"), _ = Q("ease"), k = Q("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], g = () => [
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
  ], P = () => [...g(), M, A], T = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], x = () => [M, A, l], j = () => [Ue, "full", "auto", ...x()], L = () => [Ce, "none", "subgrid", M, A], V = () => ["auto", {
    span: ["full", Ce, M, A]
  }, Ce, M, A], N = () => [Ce, "auto", M, A], q = () => ["auto", "min", "max", "fr", M, A], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...x()], O = () => [Ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], S = () => [t, M, A], G = () => [...g(), gn, mn, {
    position: [M, A]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", Vl, El, {
    size: [M, A]
  }], B = () => [us, ht, ze], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    M,
    A
  ], K = () => ["", D, ht, ze], ee = () => ["solid", "dashed", "dotted", "double"], He = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [D, us, gn, mn], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    M,
    A
  ], me = () => ["none", D, M, A], je = () => ["none", D, M, A], ct = () => [D, M, A], Rt = () => [Ue, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_e],
      breakpoint: [_e],
      color: [Ml],
      container: [_e],
      "drop-shadow": [_e],
      ease: ["in", "out", "in-out"],
      font: [Ol],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_e],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_e],
      shadow: [_e],
      spacing: ["px", D],
      text: [_e],
      "text-shadow": [_e],
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
        aspect: ["auto", "square", Ue, A, M, v]
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
        columns: [D, A, M, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [Ce, "auto", M, A]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ue, "full", "auto", a, ...x()]
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
        flex: [D, Ue, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", D, M, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", D, M, A]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ce, "first", "last", "none", M, A]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": L()
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
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": L()
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
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...se(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...se()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...se(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...se()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: C()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: C()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: C()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: C()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: C()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: C()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: C()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: C()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: C()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...O()]
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
          ...O()
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
            screen: [r]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, ht, ze]
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
        font: [i, M, ds]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", us, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nl, A, e]
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
        tracking: [n, M, A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [D, "none", M, ds]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M, A]
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
        list: ["disc", "decimal", "none", M, A]
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
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [D, "from-font", "auto", M, ze]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [D, "auto", M, A]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M, A]
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
        content: ["none", M, A]
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
        bg: G()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ce, M, A],
          radial: ["", M, A],
          conic: [Ce, M, A]
        }, Dl, Il]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: B()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: B()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: B()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: $()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": $()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": $()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": $()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": $()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": $()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": $()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": $()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": $()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": $()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": $()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": $()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": $()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": $()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": $()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: K()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": K()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": K()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": K()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": K()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": K()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": K()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": K()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": K()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": K()
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
        "divide-y": K()
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
        border: [...ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ee(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [D, M, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", D, ht, ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: S()
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
          d,
          It,
          Et
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, It, Et]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: K()
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
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [D, ze]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": K()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, It, Et]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [D, M, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...He(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": He()
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
        "mask-linear": [D]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Y()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": S()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Y()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": S()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Y()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": S()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Y()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": S()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Y()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": S()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Y()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": S()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Y()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": S()
      }],
      "mask-image-radial": [{
        "mask-radial": [M, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Y()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": S()
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
        "mask-radial-at": g()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [D]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Y()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": S()
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
        mask: G()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: R()
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
        mask: ["none", M, A]
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
          M,
          A
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: J()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [D, M, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [D, M, A]
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
          It,
          Et
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": S()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", D, M, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [D, M, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", D, M, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [D, M, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", D, M, A]
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
          M,
          A
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": J()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [D, M, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [D, M, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", D, M, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [D, M, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", D, M, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [D, M, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [D, M, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", D, M, A]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", M, A]
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
        duration: [D, "initial", M, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, M, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [D, M, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, M, A]
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
        perspective: [y, M, A]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: me()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": me()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": me()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": me()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: je()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": je()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": je()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": je()
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
        skew: ct()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ct()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ct()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [M, A, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: P()
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
        translate: Rt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Rt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Rt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Rt()
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
        accent: S()
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
        caret: S()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M, A]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", M, A]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [D, ht, ze, ds]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
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
}, Kl = /* @__PURE__ */ kl(Fl);
function Ke(...t) {
  return Kl(Jr(t));
}
function Gt(t, e) {
  if (t) {
    const s = t.split(":");
    if (s.length >= 3 && s[0] && s[2] !== "443")
      return t;
  }
  return e;
}
const Wl = cl(
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
), we = ss.forwardRef(
  ({ className: t, variant: e, size: s, ...i }, n) => /* @__PURE__ */ c.jsx("button", { className: Ke(Wl({ variant: e, size: s, className: t })), ref: n, ...i })
);
we.displayName = "Button";
const ie = ({ href: t, children: e, className: s = "", target: i = "_self", rel: n = "noopener noreferrer", onClick: o }) => {
  const r = (a) => {
    i !== "_blank" && (a.preventDefault(), window.location.href = t), o && o(a);
  };
  return /* @__PURE__ */ c.jsx(
    "a",
    {
      href: t,
      className: s,
      target: i,
      rel: n,
      onClick: r,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Hl = (t, e, s, i) => {
  var o, r, a, l;
  const n = [s, {
    code: e,
    ...i || {}
  }];
  if ((r = (o = t == null ? void 0 : t.services) == null ? void 0 : o.logger) != null && r.forward)
    return t.services.logger.forward(n, "warn", "react-i18next::", !0);
  De(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), (l = (a = t == null ? void 0 : t.services) == null ? void 0 : a.logger) != null && l.warn ? t.services.logger.warn(...n) : console != null && console.warn && console.warn(...n);
}, yn = {}, Os = (t, e, s, i) => {
  De(s) && yn[s] || (De(s) && (yn[s] = /* @__PURE__ */ new Date()), Hl(t, e, s, i));
}, co = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const s = () => {
      setTimeout(() => {
        t.off("initialized", s);
      }, 0), e();
    };
    t.on("initialized", s);
  }
}, Es = (t, e, s) => {
  t.loadNamespaces(e, co(t, s));
}, xn = (t, e, s, i) => {
  if (De(s) && (s = [s]), t.options.preload && t.options.preload.indexOf(e) > -1) return Es(t, s, i);
  s.forEach((n) => {
    t.options.ns.indexOf(n) < 0 && t.options.ns.push(n);
  }), t.loadLanguages(e, co(t, i));
}, Ul = (t, e, s = {}) => !e.languages || !e.languages.length ? (Os(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(t, {
  lng: s.lng,
  precheck: (i, n) => {
    if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !n(i.isLanguageChangingTo, t)) return !1;
  }
}), De = (t) => typeof t == "string", Gl = (t) => typeof t == "object" && t !== null, Yl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ql = {
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
}, Xl = (t) => ql[t], Zl = (t) => t.replace(Yl, Xl);
let Is = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Zl
};
const Jl = (t = {}) => {
  Is = {
    ...Is,
    ...t
  };
}, Ql = () => Is;
let uo;
const ec = (t) => {
  uo = t;
}, tc = () => uo, sc = {
  type: "3rdParty",
  init(t) {
    Jl(t.options.react), ec(t);
  }
}, ic = We();
class nc {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const rc = (t, e) => {
  const s = le();
  return oe(() => {
    s.current = t;
  }, [t, e]), s.current;
}, ho = (t, e, s, i) => t.getFixedT(e, s, i), oc = (t, e, s, i) => Ve(ho(t, e, s, i), [t, e, s, i]), is = (t, e = {}) => {
  var g, P, T, z;
  const {
    i18n: s
  } = e, {
    i18n: i,
    defaultNS: n
  } = re(ic) || {}, o = s || i || tc();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new nc()), !o) {
    Os(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = (L, V) => De(V) ? V : Gl(V) && De(V.defaultValue) ? V.defaultValue : Array.isArray(L) ? L[L.length - 1] : L, j = [x, {}, !1];
    return j.t = x, j.i18n = {}, j.ready = !1, j;
  }
  (g = o.options.react) != null && g.wait && Os(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const r = {
    ...Ql(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = r;
  let u = n || ((P = o.options) == null ? void 0 : P.defaultNS);
  u = De(u) ? [u] : u || ["translation"], (z = (T = o.reportNamespaces).addUsedNamespaces) == null || z.call(T, u);
  const d = (o.isInitialized || o.initializedStoreOnce) && u.every((x) => Ul(x, o, r)), h = oc(o, e.lng || null, r.nsMode === "fallback" ? u : u[0], l), p = () => h, f = () => ho(o, e.lng || null, r.nsMode === "fallback" ? u : u[0], l), [m, y] = te(p);
  let v = u.join();
  e.lng && (v = `${e.lng}${v}`);
  const _ = rc(v), k = le(!0);
  oe(() => {
    const {
      bindI18n: x,
      bindI18nStore: j
    } = r;
    k.current = !0, !d && !a && (e.lng ? xn(o, e.lng, u, () => {
      k.current && y(f);
    }) : Es(o, u, () => {
      k.current && y(f);
    })), d && _ && _ !== v && k.current && y(f);
    const L = () => {
      k.current && y(f);
    };
    return x && (o == null || o.on(x, L)), j && (o == null || o.store.on(j, L)), () => {
      k.current = !1, o && x && (x == null || x.split(" ").forEach((V) => o.off(V, L))), j && o && j.split(" ").forEach((V) => o.store.off(V, L));
    };
  }, [o, v]), oe(() => {
    k.current && d && y(p);
  }, [o, l, d]);
  const w = [m, o, d];
  if (w.t = m, w.i18n = o, w.ready = d, d || !d && !a) return w;
  throw new Promise((x) => {
    e.lng ? xn(o, e.lng, u, () => x()) : Es(o, u, () => x());
  });
}, I = (t) => typeof t == "string", pt = () => {
  let t, e;
  const s = new Promise((i, n) => {
    t = i, e = n;
  });
  return s.resolve = t, s.reject = e, s;
}, vn = (t) => t == null ? "" : "" + t, ac = (t, e, s) => {
  t.forEach((i) => {
    e[i] && (s[i] = e[i]);
  });
}, lc = /###/g, bn = (t) => t && t.indexOf("###") > -1 ? t.replace(lc, ".") : t, _n = (t) => !t || I(t), gt = (t, e, s) => {
  const i = I(e) ? e.split(".") : e;
  let n = 0;
  for (; n < i.length - 1; ) {
    if (_n(t)) return {};
    const o = bn(i[n]);
    !t[o] && s && (t[o] = new s()), Object.prototype.hasOwnProperty.call(t, o) ? t = t[o] : t = {}, ++n;
  }
  return _n(t) ? {} : {
    obj: t,
    k: bn(i[n])
  };
}, wn = (t, e, s) => {
  const {
    obj: i,
    k: n
  } = gt(t, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[n] = s;
    return;
  }
  let o = e[e.length - 1], r = e.slice(0, e.length - 1), a = gt(t, r, Object);
  for (; a.obj === void 0 && r.length; )
    o = `${r[r.length - 1]}.${o}`, r = r.slice(0, r.length - 1), a = gt(t, r, Object), a != null && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = s;
}, cc = (t, e, s, i) => {
  const {
    obj: n,
    k: o
  } = gt(t, e, Object);
  n[o] = n[o] || [], n[o].push(s);
}, Yt = (t, e) => {
  const {
    obj: s,
    k: i
  } = gt(t, e);
  if (s && Object.prototype.hasOwnProperty.call(s, i))
    return s[i];
}, uc = (t, e, s) => {
  const i = Yt(t, s);
  return i !== void 0 ? i : Yt(e, s);
}, po = (t, e, s) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in t ? I(t[i]) || t[i] instanceof String || I(e[i]) || e[i] instanceof String ? s && (t[i] = e[i]) : po(t[i], e[i], s) : t[i] = e[i]);
  return t;
}, Ge = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var dc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const hc = (t) => I(t) ? t.replace(/[&<>"'\/]/g, (e) => dc[e]) : t;
class pc {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const s = this.regExpMap.get(e);
    if (s !== void 0)
      return s;
    const i = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i;
  }
}
const fc = [" ", ",", "?", "!", ";"], mc = new pc(20), gc = (t, e, s) => {
  e = e || "", s = s || "";
  const i = fc.filter((r) => e.indexOf(r) < 0 && s.indexOf(r) < 0);
  if (i.length === 0) return !0;
  const n = mc.getRegExp(`(${i.map((r) => r === "?" ? "\\?" : r).join("|")})`);
  let o = !n.test(t);
  if (!o) {
    const r = t.indexOf(s);
    r > 0 && !n.test(t.substring(0, r)) && (o = !0);
  }
  return o;
}, Ns = (t, e, s = ".") => {
  if (!t) return;
  if (t[e])
    return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
  const i = e.split(s);
  let n = t;
  for (let o = 0; o < i.length; ) {
    if (!n || typeof n != "object")
      return;
    let r, a = "";
    for (let l = o; l < i.length; ++l)
      if (l !== o && (a += s), a += i[l], r = n[a], r !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof r) > -1 && l < i.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    n = r;
  }
  return n;
}, _t = (t) => t == null ? void 0 : t.replace("_", "-"), yc = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    var s, i;
    (i = (s = console == null ? void 0 : console[t]) == null ? void 0 : s.apply) == null || i.call(s, console, e);
  }
};
class qt {
  constructor(e, s = {}) {
    this.init(e, s);
  }
  init(e, s = {}) {
    this.prefix = s.prefix || "i18next:", this.logger = e || yc, this.options = s, this.debug = s.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, s, i, n) {
    return n && !this.debug ? null : (I(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[s](e));
  }
  create(e) {
    return new qt(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new qt(this.logger, e);
  }
}
var xe = new qt();
class ns {
  constructor() {
    this.observers = {};
  }
  on(e, s) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const n = this.observers[i].get(s) || 0;
      this.observers[i].set(s, n + 1);
    }), this;
  }
  off(e, s) {
    if (this.observers[e]) {
      if (!s) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(s);
    }
  }
  emit(e, ...s) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([n, o]) => {
      for (let r = 0; r < o; r++)
        n(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, o]) => {
      for (let r = 0; r < o; r++)
        n.apply(n, [e, ...s]);
    });
  }
}
class kn extends ns {
  constructor(e, s = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const s = this.options.ns.indexOf(e);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(e, s, i, n = {}) {
    var u, d;
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, r = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, s], i && (Array.isArray(i) ? a.push(...i) : I(i) && o ? a.push(...i.split(o)) : a.push(i)));
    const l = Yt(this.data, a);
    return !l && !s && !i && e.indexOf(".") > -1 && (e = a[0], s = a[1], i = a.slice(2).join(".")), l || !r || !I(i) ? l : Ns((d = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : d[s], i, o);
  }
  addResource(e, s, i, n, o = {
    silent: !1
  }) {
    const r = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [e, s];
    i && (a = a.concat(r ? i.split(r) : i)), e.indexOf(".") > -1 && (a = e.split("."), n = s, s = a[1]), this.addNamespaces(s), wn(this.data, a, n), o.silent || this.emit("added", e, s, i, n);
  }
  addResources(e, s, i, n = {
    silent: !1
  }) {
    for (const o in i)
      (I(i[o]) || Array.isArray(i[o])) && this.addResource(e, s, o, i[o], {
        silent: !0
      });
    n.silent || this.emit("added", e, s, i);
  }
  addResourceBundle(e, s, i, n, o, r = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [e, s];
    e.indexOf(".") > -1 && (a = e.split("."), n = i, i = s, s = a[1]), this.addNamespaces(s);
    let l = Yt(this.data, a) || {};
    r.skipCopy || (i = JSON.parse(JSON.stringify(i))), n ? po(l, i, o) : l = {
      ...l,
      ...i
    }, wn(this.data, a, l), r.silent || this.emit("added", e, s, i);
  }
  removeResourceBundle(e, s) {
    this.hasResourceBundle(e, s) && delete this.data[e][s], this.removeNamespaces(s), this.emit("removed", e, s);
  }
  hasResourceBundle(e, s) {
    return this.getResource(e, s) !== void 0;
  }
  getResourceBundle(e, s) {
    return s || (s = this.options.defaultNS), this.getResource(e, s);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const s = this.getDataByLanguage(e);
    return !!(s && Object.keys(s) || []).find((n) => s[n] && Object.keys(s[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var fo = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, s, i, n) {
    return t.forEach((o) => {
      var r;
      e = ((r = this.processors[o]) == null ? void 0 : r.process(e, s, i, n)) ?? e;
    }), e;
  }
};
const mo = Symbol("i18next/PATH_KEY");
function xc() {
  const t = [], e = /* @__PURE__ */ Object.create(null);
  let s;
  return e.get = (i, n) => {
    var o;
    return (o = s == null ? void 0 : s.revoke) == null || o.call(s), n === mo ? t : (t.push(n), s = Proxy.revocable(i, e), s.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function vc(t, e) {
  const {
    [mo]: s
  } = t(xc());
  return s.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const Pn = {}, Sn = (t) => !I(t) && typeof t != "boolean" && typeof t != "number";
class Xt extends ns {
  constructor(e, s = {}) {
    super(), ac(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = xe.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, s = {
    interpolation: {}
  }) {
    const i = {
      ...s
    };
    if (e == null) return !1;
    const n = this.resolve(e, i);
    return (n == null ? void 0 : n.res) !== void 0;
  }
  extractFromKey(e, s) {
    let i = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const n = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let o = s.ns || this.options.defaultNS || [];
    const r = i && e.indexOf(i) > -1, a = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !gc(e, i, n);
    if (r && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: I(o) ? [o] : o
        };
      const u = e.split(i);
      (i !== n || i === n && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), e = u.join(n);
    }
    return {
      key: e,
      namespaces: I(o) ? [o] : o
    };
  }
  translate(e, s, i) {
    let n = typeof s == "object" ? {
      ...s
    } : s;
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (n = {
      ...n
    }), n || (n = {}), e == null) return "";
    typeof e == "function" && (e = vc(e, n)), Array.isArray(e) || (e = [String(e)]);
    const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], n), u = l[l.length - 1];
    let d = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const h = n.lng || this.language, p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return p ? o ? {
        res: `${u}${d}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(n)
      } : `${u}${d}${a}` : o ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(n)
      } : a;
    const f = this.resolve(e, n);
    let m = f == null ? void 0 : f.res;
    const y = (f == null ? void 0 : f.usedKey) || a, v = (f == null ? void 0 : f.exactUsedKey) || a, _ = ["[object Number]", "[object Function]", "[object RegExp]"], k = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject, g = n.count !== void 0 && !I(n.count), P = Xt.hasDefaultValue(n), T = g ? this.pluralResolver.getSuffix(h, n.count, n) : "", z = n.ordinal && g ? this.pluralResolver.getSuffix(h, n.count, {
      ordinal: !1
    }) : "", x = g && !n.ordinal && n.count === 0, j = x && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${T}`] || n[`defaultValue${z}`] || n.defaultValue;
    let L = m;
    w && !m && P && (L = j);
    const V = Sn(L), N = Object.prototype.toString.apply(L);
    if (w && L && V && _.indexOf(N) < 0 && !(I(k) && Array.isArray(L))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const q = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, L, {
          ...n,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (f.res = q, f.usedParams = this.getUsedParamsDetails(n), f) : q;
      }
      if (r) {
        const q = Array.isArray(L), F = q ? [] : {}, se = q ? v : y;
        for (const C in L)
          if (Object.prototype.hasOwnProperty.call(L, C)) {
            const O = `${se}${r}${C}`;
            P && !m ? F[C] = this.translate(O, {
              ...n,
              defaultValue: Sn(j) ? j[C] : void 0,
              joinArrays: !1,
              ns: l
            }) : F[C] = this.translate(O, {
              ...n,
              joinArrays: !1,
              ns: l
            }), F[C] === O && (F[C] = L[C]);
          }
        m = F;
      }
    } else if (w && I(k) && Array.isArray(m))
      m = m.join(k), m && (m = this.extendTranslation(m, e, n, i));
    else {
      let q = !1, F = !1;
      !this.isValidLookup(m) && P && (q = !0, m = j), this.isValidLookup(m) || (F = !0, m = a);
      const C = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && F ? void 0 : m, O = P && j !== m && this.options.updateMissing;
      if (F || q || O) {
        if (this.logger.log(O ? "updateKey" : "missingKey", h, u, a, O ? j : m), r) {
          const R = this.resolve(a, {
            ...n,
            keySeparator: !1
          });
          R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let S = [];
        const G = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && G && G[0])
          for (let R = 0; R < G.length; R++)
            S.push(G[R]);
        else this.options.saveMissingTo === "all" ? S = this.languageUtils.toResolveHierarchy(n.lng || this.language) : S.push(n.lng || this.language);
        const b = (R, B, $) => {
          var ee;
          const K = P && $ !== m ? $ : C;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(R, u, B, K, O, n) : (ee = this.backendConnector) != null && ee.saveMissing && this.backendConnector.saveMissing(R, u, B, K, O, n), this.emit("missingKey", R, u, B, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && g ? S.forEach((R) => {
          const B = this.pluralResolver.getSuffixes(R, n);
          x && n[`defaultValue${this.options.pluralSeparator}zero`] && B.indexOf(`${this.options.pluralSeparator}zero`) < 0 && B.push(`${this.options.pluralSeparator}zero`), B.forEach(($) => {
            b([R], a + $, n[`defaultValue${$}`] || j);
          });
        }) : b(S, a, j));
      }
      m = this.extendTranslation(m, e, n, f, i), F && m === a && this.options.appendNamespaceToMissingKey && (m = `${u}${d}${a}`), (F || q) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${d}${a}` : a, q ? m : void 0, n));
    }
    return o ? (f.res = m, f.usedParams = this.getUsedParamsDetails(n), f) : m;
  }
  extendTranslation(e, s, i, n, o) {
    var l, u;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const d = I(e) && (((u = i == null ? void 0 : i.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (d) {
        const f = e.match(this.interpolator.nestingRegexp);
        h = f && f.length;
      }
      let p = i.replace && !I(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, i.lng || this.language || n.usedLng, i), d) {
        const f = e.match(this.interpolator.nestingRegexp), m = f && f.length;
        h < m && (i.nest = !1);
      }
      !i.lng && n && n.res && (i.lng = this.language || n.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...f) => (o == null ? void 0 : o[0]) === f[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${s[0]}`), null) : this.translate(...f, s), i)), i.interpolation && this.interpolator.reset();
    }
    const r = i.postProcess || this.options.postProcess, a = I(r) ? [r] : r;
    return e != null && (a != null && a.length) && i.applyPostProcessor !== !1 && (e = fo.handle(a, e, s, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e, s = {}) {
    let i, n, o, r, a;
    return I(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(i)) return;
      const u = this.extractFromKey(l, s), d = u.key;
      n = d;
      let h = u.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const p = s.count !== void 0 && !I(s.count), f = p && !s.ordinal && s.count === 0, m = s.context !== void 0 && (I(s.context) || typeof s.context == "number") && s.context !== "", y = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      h.forEach((v) => {
        var _, k;
        this.isValidLookup(i) || (a = v, !Pn[`${y[0]}-${v}`] && ((_ = this.utils) != null && _.hasLoadedNamespace) && !((k = this.utils) != null && k.hasLoadedNamespace(a)) && (Pn[`${y[0]}-${v}`] = !0, this.logger.warn(`key "${n}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((w) => {
          var T;
          if (this.isValidLookup(i)) return;
          r = w;
          const g = [d];
          if ((T = this.i18nFormat) != null && T.addLookupKeys)
            this.i18nFormat.addLookupKeys(g, d, w, v, s);
          else {
            let z;
            p && (z = this.pluralResolver.getSuffix(w, s.count, s));
            const x = `${this.options.pluralSeparator}zero`, j = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (s.ordinal && z.indexOf(j) === 0 && g.push(d + z.replace(j, this.options.pluralSeparator)), g.push(d + z), f && g.push(d + x)), m) {
              const L = `${d}${this.options.contextSeparator || "_"}${s.context}`;
              g.push(L), p && (s.ordinal && z.indexOf(j) === 0 && g.push(L + z.replace(j, this.options.pluralSeparator)), g.push(L + z), f && g.push(L + x));
            }
          }
          let P;
          for (; P = g.pop(); )
            this.isValidLookup(i) || (o = P, i = this.getResource(w, v, P, s));
        }));
      });
    }), {
      res: i,
      usedKey: n,
      exactUsedKey: o,
      usedLng: r,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, s, i, n = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, s, i, n) : this.resourceStore.getResource(e, s, i, n);
  }
  getUsedParamsDetails(e = {}) {
    const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !I(e.replace);
    let n = i ? e.replace : e;
    if (i && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !i) {
      n = {
        ...n
      };
      for (const o of s)
        delete n[o];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const s = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && s === i.substring(0, s.length) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
class jn {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = xe.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = _t(e), !e || e.indexOf("-") < 0) return null;
    const s = e.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = _t(e), !e || e.indexOf("-") < 0) return e;
    const s = e.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(e) {
    if (I(e) && e.indexOf("-") > -1) {
      let s;
      try {
        s = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return s && this.options.lowerCaseLng && (s = s.toLowerCase()), s || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let s;
    return e.forEach((i) => {
      if (s) return;
      const n = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (s = n);
    }), !s && this.options.supportedLngs && e.forEach((i) => {
      if (s) return;
      const n = this.getScriptPartFromCode(i);
      if (this.isSupportedCode(n)) return s = n;
      const o = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(o)) return s = o;
      s = this.options.supportedLngs.find((r) => {
        if (r === o) return r;
        if (!(r.indexOf("-") < 0 && o.indexOf("-") < 0) && (r.indexOf("-") > 0 && o.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === o || r.indexOf(o) === 0 && o.length > 1))
          return r;
      });
    }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s;
  }
  getFallbackCodes(e, s) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(s)), I(e) && (e = [e]), Array.isArray(e)) return e;
    if (!s) return e.default || [];
    let i = e[s];
    return i || (i = e[this.getScriptPartFromCode(s)]), i || (i = e[this.formatLanguageCode(s)]), i || (i = e[this.getLanguagePartFromCode(s)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, s) {
    const i = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], e), n = [], o = (r) => {
      r && (this.isSupportedCode(r) ? n.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return I(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : I(e) && o(this.formatLanguageCode(e)), i.forEach((r) => {
      n.indexOf(r) < 0 && o(this.formatLanguageCode(r));
    }), n;
  }
}
const Cn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Tn = {
  select: (t) => t === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class bc {
  constructor(e, s = {}) {
    this.languageUtils = e, this.options = s, this.logger = xe.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, s) {
    this.rules[e] = s;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, s = {}) {
    const i = _t(e === "dev" ? "en" : e), n = s.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: i,
      type: n
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let r;
    try {
      r = new Intl.PluralRules(i, {
        type: n
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Tn;
      if (!e.match(/-|_/)) return Tn;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(l, s);
    }
    return this.pluralRulesCache[o] = r, r;
  }
  needsPlural(e, s = {}) {
    let i = this.getRule(e, s);
    return i || (i = this.getRule("dev", s)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, s, i = {}) {
    return this.getSuffixes(e, i).map((n) => `${s}${n}`);
  }
  getSuffixes(e, s = {}) {
    let i = this.getRule(e, s);
    return i || (i = this.getRule("dev", s)), i ? i.resolvedOptions().pluralCategories.sort((n, o) => Cn[n] - Cn[o]).map((n) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, s, i = {}) {
    const n = this.getRule(e, i);
    return n ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(s)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", s, i));
  }
}
const An = (t, e, s, i = ".", n = !0) => {
  let o = uc(t, e, s);
  return !o && n && I(s) && (o = Ns(t, s, i), o === void 0 && (o = Ns(e, s, i))), o;
}, hs = (t) => t.replace(/\$/g, "$$$$");
class _c {
  constructor(e = {}) {
    var s;
    this.logger = xe.create("interpolator"), this.options = e, this.format = ((s = e == null ? void 0 : e.interpolation) == null ? void 0 : s.format) || ((i) => i), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: s,
      escapeValue: i,
      useRawValueToEscape: n,
      prefix: o,
      prefixEscaped: r,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: h,
      nestingPrefix: p,
      nestingPrefixEscaped: f,
      nestingSuffix: m,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: v,
      maxReplaces: _,
      alwaysFormat: k
    } = e.interpolation;
    this.escape = s !== void 0 ? s : hc, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = o ? Ge(o) : r || "{{", this.suffix = a ? Ge(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = d ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = p ? Ge(p) : f || Ge("$t("), this.nestingSuffix = m ? Ge(m) : y || Ge(")"), this.nestingOptionsSeparator = v || ",", this.maxReplaces = _ || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (s, i) => (s == null ? void 0 : s.source) === i ? (s.lastIndex = 0, s) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, s, i, n) {
    var f;
    let o, r, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const k = An(s, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, i, {
          ...n,
          ...s,
          interpolationkey: m
        }) : k;
      }
      const y = m.split(this.formatSeparator), v = y.shift().trim(), _ = y.join(this.formatSeparator).trim();
      return this.format(An(s, l, v, this.options.keySeparator, this.options.ignoreJSONStructure), _, i, {
        ...n,
        ...s,
        interpolationkey: v
      });
    };
    this.resetRegExp();
    const d = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((f = n == null ? void 0 : n.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => hs(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? hs(this.escape(m)) : hs(m)
    }].forEach((m) => {
      for (a = 0; o = m.regex.exec(e); ) {
        const y = o[1].trim();
        if (r = u(y), r === void 0)
          if (typeof d == "function") {
            const _ = d(e, o, n);
            r = I(_) ? _ : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, y))
            r = "";
          else if (h) {
            r = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`), r = "";
        else !I(r) && !this.useRawValueToEscape && (r = vn(r));
        const v = m.safeValue(r);
        if (e = e.replace(o[0], v), h ? (m.regex.lastIndex += r.length, m.regex.lastIndex -= o[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, s, i = {}) {
    let n, o, r;
    const a = (l, u) => {
      const d = this.nestingOptionsSeparator;
      if (l.indexOf(d) < 0) return l;
      const h = l.split(new RegExp(`${d}[ ]*{`));
      let p = `{${h[1]}`;
      l = h[0], p = this.interpolate(p, r);
      const f = p.match(/'/g), m = p.match(/"/g);
      (((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        r = JSON.parse(p), u && (r = {
          ...u,
          ...r
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${d}${p}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      r = {
        ...i
      }, r = r.replace && !I(r.replace) ? r.replace : r, r.applyPostProcessor = !1, delete r.defaultValue;
      const u = /{.*}/.test(n[1]) ? n[1].lastIndexOf("}") + 1 : n[1].indexOf(this.formatSeparator);
      if (u !== -1 && (l = n[1].slice(u).split(this.formatSeparator).map((d) => d.trim()).filter(Boolean), n[1] = n[1].slice(0, u)), o = s(a.call(this, n[1].trim(), r), r), o && n[0] === e && !I(o)) return o;
      I(o) || (o = vn(o)), o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), o = ""), l.length && (o = l.reduce((d, h) => this.format(d, h, i.lng, {
        ...i,
        interpolationkey: n[1].trim()
      }), o.trim())), e = e.replace(n[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const wc = (t) => {
  let e = t.toLowerCase().trim();
  const s = {};
  if (t.indexOf("(") > -1) {
    const i = t.split("(");
    e = i[0].toLowerCase().trim();
    const n = i[1].substring(0, i[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? s.currency || (s.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? s.range || (s.range = n.trim()) : n.split(";").forEach((r) => {
      if (r) {
        const [a, ...l] = r.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), d = a.trim();
        s[d] || (s[d] = u), u === "false" && (s[d] = !1), u === "true" && (s[d] = !0), isNaN(u) || (s[d] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: s
  };
}, Mn = (t) => {
  const e = {};
  return (s, i, n) => {
    let o = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (o = {
      ...o,
      [n.interpolationkey]: void 0
    });
    const r = i + JSON.stringify(o);
    let a = e[r];
    return a || (a = t(_t(i), n), e[r] = a), a(s);
  };
}, kc = (t) => (e, s, i) => t(_t(s), i)(e);
class Pc {
  constructor(e = {}) {
    this.logger = xe.create("formatter"), this.options = e, this.init(e);
  }
  init(e, s = {
    interpolation: {}
  }) {
    this.formatSeparator = s.interpolation.formatSeparator || ",";
    const i = s.cacheInBuiltFormats ? Mn : kc;
    this.formats = {
      number: i((n, o) => {
        const r = new Intl.NumberFormat(n, {
          ...o
        });
        return (a) => r.format(a);
      }),
      currency: i((n, o) => {
        const r = new Intl.NumberFormat(n, {
          ...o,
          style: "currency"
        });
        return (a) => r.format(a);
      }),
      datetime: i((n, o) => {
        const r = new Intl.DateTimeFormat(n, {
          ...o
        });
        return (a) => r.format(a);
      }),
      relativetime: i((n, o) => {
        const r = new Intl.RelativeTimeFormat(n, {
          ...o
        });
        return (a) => r.format(a, o.range || "day");
      }),
      list: i((n, o) => {
        const r = new Intl.ListFormat(n, {
          ...o
        });
        return (a) => r.format(a);
      })
    };
  }
  add(e, s) {
    this.formats[e.toLowerCase().trim()] = s;
  }
  addCached(e, s) {
    this.formats[e.toLowerCase().trim()] = Mn(s);
  }
  format(e, s, i, n = {}) {
    const o = s.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
      const a = o.findIndex((l) => l.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, l) => {
      var h;
      const {
        formatName: u,
        formatOptions: d
      } = wc(l);
      if (this.formats[u]) {
        let p = a;
        try {
          const f = ((h = n == null ? void 0 : n.formatParams) == null ? void 0 : h[n.interpolationkey]) || {}, m = f.locale || f.lng || n.locale || n.lng || i;
          p = this.formats[u](a, m, {
            ...d,
            ...n,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const Sc = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class jc extends ns {
  constructor(e, s, i, n = {}) {
    var o, r;
    super(), this.backend = e, this.store = s, this.services = i, this.languageUtils = i.languageUtils, this.options = n, this.logger = xe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (r = (o = this.backend) == null ? void 0 : o.init) == null || r.call(o, i, n.backend, n);
  }
  queueLoad(e, s, i, n) {
    const o = {}, r = {}, a = {}, l = {};
    return e.forEach((u) => {
      let d = !0;
      s.forEach((h) => {
        const p = `${u}|${h}`;
        !i.reload && this.store.hasResourceBundle(u, h) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? r[p] === void 0 && (r[p] = !0) : (this.state[p] = 1, d = !1, r[p] === void 0 && (r[p] = !0), o[p] === void 0 && (o[p] = !0), l[h] === void 0 && (l[h] = !0)));
      }), d || (a[u] = !0);
    }), (Object.keys(o).length || Object.keys(r).length) && this.queue.push({
      pending: r,
      pendingCount: Object.keys(r).length,
      loaded: {},
      errors: [],
      callback: n
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(r),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, s, i) {
    const n = e.split("|"), o = n[0], r = n[1];
    s && this.emit("failedLoading", o, r, s), !s && i && this.store.addResourceBundle(o, r, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = s ? -1 : 2, s && i && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      cc(l.loaded, [o], r), Sc(l, e), s && l.errors.push(s), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const d = l.loaded[u];
        d.length && d.forEach((h) => {
          a[u][h] === void 0 && (a[u][h] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, s, i, n = 0, o = this.retryTimeout, r) {
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: s,
        fcName: i,
        tried: n,
        wait: o,
        callback: r
      });
      return;
    }
    this.readingCalls++;
    const a = (u, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (u && d && n < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, s, i, n + 1, o * 2, r);
        }, o);
        return;
      }
      r(u, d);
    }, l = this.backend[i].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, s);
        u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, s, a);
  }
  prepareLoading(e, s, i = {}, n) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    I(e) && (e = this.languageUtils.toResolveHierarchy(e)), I(s) && (s = [s]);
    const o = this.queueLoad(e, s, i, n);
    if (!o.toLoad.length)
      return o.pending.length || n(), null;
    o.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, s, i) {
    this.prepareLoading(e, s, {}, i);
  }
  reload(e, s, i) {
    this.prepareLoading(e, s, {
      reload: !0
    }, i);
  }
  loadOne(e, s = "") {
    const i = e.split("|"), n = i[0], o = i[1];
    this.read(n, o, "read", void 0, void 0, (r, a) => {
      r && this.logger.warn(`${s}loading namespace ${o} for language ${n} failed`, r), !r && a && this.logger.log(`${s}loaded namespace ${o} for language ${n}`, a), this.loaded(e, r, a);
    });
  }
  saveMissing(e, s, i, n, o, r = {}, a = () => {
  }) {
    var l, u, d, h, p;
    if ((u = (l = this.services) == null ? void 0 : l.utils) != null && u.hasLoadedNamespace && !((h = (d = this.services) == null ? void 0 : d.utils) != null && h.hasLoadedNamespace(s))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((p = this.backend) != null && p.create) {
        const f = {
          ...r,
          isUpdate: o
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let y;
            m.length === 5 ? y = m(e, s, i, n, f) : y = m(e, s, i, n), y && typeof y.then == "function" ? y.then((v) => a(null, v)).catch(a) : a(null, y);
          } catch (y) {
            a(y);
          }
        else
          m(e, s, i, n, a, f);
      }
      !e || !e[0] || this.store.addResource(e[0], s, i, n);
    }
  }
}
const Ln = () => ({
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
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), I(t[1]) && (e.defaultValue = t[1]), I(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const s = t[3] || t[2];
      Object.keys(s).forEach((i) => {
        e[i] = s[i];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
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
}), zn = (t) => {
  var e, s;
  return I(t.ns) && (t.ns = [t.ns]), I(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), I(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), ((s = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : s.call(e, "cimode")) < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate), t;
}, Nt = () => {
}, Cc = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((s) => {
    typeof t[s] == "function" && (t[s] = t[s].bind(t));
  });
};
class wt extends ns {
  constructor(e = {}, s) {
    if (super(), this.options = zn(e), this.services = {}, this.logger = xe, this.modules = {
      external: []
    }, Cc(this), s && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, s), this;
      setTimeout(() => {
        this.init(e, s);
      }, 0);
    }
  }
  init(e = {}, s) {
    this.isInitializing = !0, typeof e == "function" && (s = e, e = {}), e.defaultNS == null && e.ns && (I(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const i = Ln();
    this.options = {
      ...i,
      ...this.options,
      ...zn(e)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const n = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? xe.init(n(this.modules.logger), this.options) : xe.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Pc;
      const d = new jn(this.options);
      this.store = new kn(this.options.resources, this.options);
      const h = this.services;
      h.logger = xe, h.resourceStore = this.store, h.languageUtils = d, h.pluralResolver = new bc(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== i.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (h.formatter = n(u), h.formatter.init && h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new _c(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new jc(n(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (f, ...m) => {
        this.emit(f, ...m);
      }), this.modules.languageDetector && (h.languageDetector = n(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = n(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Xt(this.services, this.options), this.translator.on("*", (f, ...m) => {
        this.emit(f, ...m);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = Nt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...d) => this.store[u](...d);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...d) => (this.store[u](...d), this);
    });
    const a = pt(), l = () => {
      const u = (d, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(h), s(d, h);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(e, s = Nt) {
    var o, r;
    let i = s;
    const n = I(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const a = [], l = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((h) => {
          h !== "cimode" && a.indexOf(h) < 0 && a.push(h);
        });
      };
      n ? l(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => l(d)), (r = (o = this.options.preload) == null ? void 0 : o.forEach) == null || r.call(o, (u) => l(u)), this.services.backendConnector.load(a, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(u);
      });
    } else
      i(null);
  }
  reloadResources(e, s, i) {
    const n = pt();
    return typeof e == "function" && (i = e, e = void 0), typeof s == "function" && (i = s, s = void 0), e || (e = this.languages), s || (s = this.options.ns), i || (i = Nt), this.services.backendConnector.reload(e, s, (o) => {
      n.resolve(), i(o);
    }), n;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && fo.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let s = 0; s < this.languages.length; s++) {
        const i = this.languages[s];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, s) {
    this.isLanguageChangingTo = e;
    const i = pt();
    this.emit("languageChanging", e);
    const n = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, o = (a, l) => {
      l ? this.isLanguageChangingTo === e && (n(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve((...u) => this.t(...u)), s && s(a, (...u) => this.t(...u));
    }, r = (a) => {
      var d, h;
      !e && !a && this.services.languageDetector && (a = []);
      const l = I(a) ? a : a && a[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(I(a) ? [a] : a);
      u && (this.language || n(u), this.translator.language || this.translator.changeLanguage(u), (h = (d = this.services.languageDetector) == null ? void 0 : d.cacheUserLanguage) == null || h.call(d, u)), this.loadResources(u, (p) => {
        o(p, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? r(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(r) : this.services.languageDetector.detect(r) : r(e), i;
  }
  getFixedT(e, s, i) {
    const n = (o, r, ...a) => {
      let l;
      typeof r != "object" ? l = this.options.overloadTranslationOptionHandler([o, r].concat(a)) : l = {
        ...r
      }, l.lng = l.lng || n.lng, l.lngs = l.lngs || n.lngs, l.ns = l.ns || n.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || i || n.keyPrefix);
      const u = this.options.keySeparator || ".";
      let d;
      return l.keyPrefix && Array.isArray(o) ? d = o.map((h) => `${l.keyPrefix}${u}${h}`) : d = l.keyPrefix ? `${l.keyPrefix}${u}${o}` : o, this.t(d, l);
    };
    return I(e) ? n.lng = e : n.lngs = e, n.ns = s, n.keyPrefix = i, n;
  }
  t(...e) {
    var s;
    return (s = this.translator) == null ? void 0 : s.translate(...e);
  }
  exists(...e) {
    var s;
    return (s = this.translator) == null ? void 0 : s.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, s = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = s.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const r = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (s.precheck) {
      const a = s.precheck(this, r);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(i, e) && (!n || r(o, e)));
  }
  loadNamespaces(e, s) {
    const i = pt();
    return this.options.ns ? (I(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      i.resolve(), s && s(n);
    }), i) : (s && s(), Promise.resolve());
  }
  loadLanguages(e, s) {
    const i = pt();
    I(e) && (e = [e]);
    const n = this.options.preload || [], o = e.filter((r) => n.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return o.length ? (this.options.preload = n.concat(o), this.loadResources((r) => {
      i.resolve(), s && s(r);
    }), i) : (s && s(), Promise.resolve());
  }
  dir(e) {
    var n, o;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const r = new Intl.Locale(e);
      if (r && r.getTextInfo) {
        const a = r.getTextInfo();
        if (a && a.direction) return a.direction;
      }
    } catch {
    }
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((o = this.services) == null ? void 0 : o.languageUtils) || new jn(Ln());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : s.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, s) {
    return new wt(e, s);
  }
  cloneInstance(e = {}, s = Nt) {
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new wt(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, i) {
      const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, l[u] = Object.keys(l[u]).reduce((d, h) => (d[h] = {
        ...l[u][h]
      }, d), l[u]), l), {});
      o.store = new kn(a, n), o.services.resourceStore = o.store;
    }
    return o.translator = new Xt(o.services, n), o.translator.on("*", (a, ...l) => {
      o.emit(a, ...l);
    }), o.init(n, s), o.translator.options = n, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
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
const ce = wt.createInstance();
ce.createInstance = wt.createInstance;
ce.createInstance;
ce.dir;
ce.init;
ce.loadResources;
ce.reloadResources;
ce.use;
ce.changeLanguage;
ce.getFixedT;
ce.t;
ce.exists;
ce.setDefaultNamespace;
ce.hasLoadedNamespace;
ce.loadNamespaces;
ce.loadLanguages;
var ci = {
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
}, Tc = ci.footer, Ac = ci.nav;
const Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci,
  footer: Tc,
  nav: Ac
}, Symbol.toStringTag, { value: "Module" }));
var ui = {
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
}, Lc = ui.footer, zc = ui.nav;
const Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ui,
  footer: Lc,
  nav: zc
}, Symbol.toStringTag, { value: "Module" }));
var di = {
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
}, Oc = di.footer, Ec = di.nav;
const Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: di,
  footer: Oc,
  nav: Ec
}, Symbol.toStringTag, { value: "Module" }));
var hi = {
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
}, Nc = hi.footer, Vc = hi.nav;
const Dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hi,
  footer: Nc,
  nav: Vc
}, Symbol.toStringTag, { value: "Module" }));
var rs = {
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
}, $c = rs.footer, Bc = rs.nav, Fc = rs.search;
const Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs,
  footer: $c,
  nav: Bc,
  search: Fc
}, Symbol.toStringTag, { value: "Module" }));
var pi = {
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
}, Wc = pi.footer, Hc = pi.nav;
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi,
  footer: Wc,
  nav: Hc
}, Symbol.toStringTag, { value: "Module" }));
var fi = {
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
}, Gc = fi.footer, Yc = fi.nav;
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fi,
  footer: Gc,
  nav: Yc
}, Symbol.toStringTag, { value: "Module" }));
var mi = {
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
}, Xc = mi.footer, Zc = mi.nav;
const Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mi,
  footer: Xc,
  nav: Zc
}, Symbol.toStringTag, { value: "Module" }));
var gi = {
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
}, Qc = gi.footer, eu = gi.nav;
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gi,
  footer: Qc,
  nav: eu
}, Symbol.toStringTag, { value: "Module" }));
var yi = {
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
}, su = yi.footer, iu = yi.nav;
const nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yi,
  footer: su,
  nav: iu
}, Symbol.toStringTag, { value: "Module" }));
var xi = {
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
}, ru = xi.footer, ou = xi.nav;
const au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xi,
  footer: ru,
  nav: ou
}, Symbol.toStringTag, { value: "Module" }));
var vi = {
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
}, lu = vi.footer, cu = vi.nav;
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi,
  footer: lu,
  nav: cu
}, Symbol.toStringTag, { value: "Module" }));
var bi = {
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
}, du = bi.footer, hu = bi.nav;
const pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi,
  footer: du,
  nav: hu
}, Symbol.toStringTag, { value: "Module" }));
var _i = {
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
}, fu = _i.footer, mu = _i.nav;
const gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i,
  footer: fu,
  nav: mu
}, Symbol.toStringTag, { value: "Module" }));
var wi = {
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
}, yu = wi.footer, xu = wi.nav;
const vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wi,
  footer: yu,
  nav: xu
}, Symbol.toStringTag, { value: "Module" }));
var ki = {
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
}, bu = ki.footer, _u = ki.nav;
const wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki,
  footer: bu,
  nav: _u
}, Symbol.toStringTag, { value: "Module" }));
var Pi = {
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
}, ku = Pi.footer, Pu = Pi.nav;
const Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi,
  footer: ku,
  nav: Pu
}, Symbol.toStringTag, { value: "Module" }));
var Si = {
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
}, ju = Si.footer, Cu = Si.nav;
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si,
  footer: ju,
  nav: Cu
}, Symbol.toStringTag, { value: "Module" }));
var ji = {
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
}, Au = ji.footer, Mu = ji.nav;
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ji,
  footer: Au,
  nav: Mu
}, Symbol.toStringTag, { value: "Module" }));
function Vs(t, e = "") {
  let s = {};
  if (t && typeof t == "object") {
    for (const i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        const n = i === "default" && !e ? "" : e ? `${e}.${i}` : i, o = t[i];
        Array.isArray(o) ? (s[n] = o, o.forEach((r, a) => {
          typeof r == "object" && r !== null ? s = {
            ...s,
            ...Vs(r, `${n}.${a}`)
          } : s[`${n}.${a}`] = r;
        })) : typeof o == "object" && o !== null ? s = { ...s, ...Vs(o, n) } : s[n] = o;
      }
  }
  return s;
}
const Ee = {}, Rn = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Mc, "./cs/translation.yaml": Rc, "./da/translation.yaml": Ic, "./de/translation.yaml": Dc, "./en/translation.yaml": Kc, "./es/translation.yaml": Uc, "./fi/translation.yaml": qc, "./fr/translation.yaml": Jc, "./he/translation.yaml": tu, "./id/translation.yaml": nu, "./it/translation.yaml": au, "./ja/translation.yaml": uu, "./nl/translation.yaml": pu, "./no/translation.yaml": gu, "./pl/translation.yaml": vu, "./pt/translation.yaml": wu, "./sv/translation.yaml": Su, "./tr/translation.yaml": Tu, "./zh/translation.yaml": Lu });
for (const t in Rn) {
  const e = Rn[t], i = t.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (Ee[i] || (Ee[i] = {}), typeof e != "object" || e === null) {
    console.warn(`File ${t} is not a valid object, skipping.`);
    continue;
  }
  Ee[i].translation || (Ee[i].translation = {}), Object.assign(Ee[i].translation, Vs(e));
}
const zu = Object.keys(Ee);
ce.use(sc).init({
  lng: "en",
  supportedLngs: zu,
  resources: Ee,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const go = "https://www.plexicus.ai", yo = "https://blog.plexicus.ai", Vt = "https://app.plexicus.ai";
function Ru(t) {
  const [e, s] = te(!1);
  return oe(() => {
    const i = window.matchMedia(t), n = () => s(i.matches);
    return n(), i.addEventListener("change", n), () => i.removeEventListener("change", n);
  }, [t]), e;
}
function xo({ className: t, type: e, ...s }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: e,
      "data-slot": "input",
      className: Ke(
        "file:text-foreground placeholder:text-white/70 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...s
    }
  );
}
const Ci = We({});
function Ti(t) {
  const e = le(null);
  return e.current === null && (e.current = t()), e.current;
}
const Ai = typeof window < "u", vo = Ai ? Qa : oe, os = /* @__PURE__ */ We(null);
function Mi(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Li(t, e) {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}
const ke = (t, e, s) => s > e ? e : s < t ? t : s;
function Ds(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let rt = () => {
}, Pe = () => {
};
process.env.NODE_ENV !== "production" && (rt = (t, e, s) => {
  !t && typeof console < "u" && console.warn(Ds(e, s));
}, Pe = (t, e, s) => {
  if (!t)
    throw new Error(Ds(e, s));
});
const Se = {}, bo = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function _o(t) {
  return typeof t == "object" && t !== null;
}
const wo = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function zi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const fe = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Ou = (t, e) => (s) => e(t(s)), At = (...t) => t.reduce(Ou), kt = /* @__NO_SIDE_EFFECTS__ */ (t, e, s) => {
  const i = e - t;
  return i === 0 ? 1 : (s - t) / i;
};
class Ri {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Mi(this.subscriptions, e), () => Li(this.subscriptions, e);
  }
  notify(e, s, i) {
    const n = this.subscriptions.length;
    if (n)
      if (n === 1)
        this.subscriptions[0](e, s, i);
      else
        for (let o = 0; o < n; o++) {
          const r = this.subscriptions[o];
          r && r(e, s, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ye = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ve = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function ko(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const On = /* @__PURE__ */ new Set();
function Oi(t, e, s) {
  t || On.has(e) || (console.warn(Ds(e, s)), On.add(e));
}
const Po = (t, e, s) => (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t, Eu = 1e-7, Iu = 12;
function Nu(t, e, s, i, n) {
  let o, r, a = 0;
  do
    r = e + (s - e) / 2, o = Po(r, i, n) - t, o > 0 ? s = r : e = r;
  while (Math.abs(o) > Eu && ++a < Iu);
  return r;
}
function Mt(t, e, s, i) {
  if (t === e && s === i)
    return fe;
  const n = (o) => Nu(o, 0, 1, t, s);
  return (o) => o === 0 || o === 1 ? o : Po(n(o), e, i);
}
const So = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, jo = (t) => (e) => 1 - t(1 - e), Co = /* @__PURE__ */ Mt(0.33, 1.53, 0.69, 0.99), Ei = /* @__PURE__ */ jo(Co), To = /* @__PURE__ */ So(Ei), Ao = (t) => (t *= 2) < 1 ? 0.5 * Ei(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Ii = (t) => 1 - Math.sin(Math.acos(t)), Mo = jo(Ii), Lo = So(Ii), Vu = /* @__PURE__ */ Mt(0.42, 0, 1, 1), Du = /* @__PURE__ */ Mt(0, 0, 0.58, 1), zo = /* @__PURE__ */ Mt(0.42, 0, 0.58, 1), $u = (t) => Array.isArray(t) && typeof t[0] != "number", Ro = (t) => Array.isArray(t) && typeof t[0] == "number", En = {
  linear: fe,
  easeIn: Vu,
  easeInOut: zo,
  easeOut: Du,
  circIn: Ii,
  circInOut: Lo,
  circOut: Mo,
  backIn: Ei,
  backInOut: To,
  backOut: Co,
  anticipate: Ao
}, Bu = (t) => typeof t == "string", In = (t) => {
  if (Ro(t)) {
    Pe(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, s, i, n] = t;
    return Mt(e, s, i, n);
  } else if (Bu(t))
    return Pe(En[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), En[t];
  return t;
}, Dt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Fu(t, e) {
  let s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), n = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(d) {
    r.has(d) && (u.schedule(d), t()), d(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, h = !1, p = !1) => {
      const m = p && n ? s : i;
      return h && r.add(d), m.has(d) || m.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      i.delete(d), r.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, n) {
        o = !0;
        return;
      }
      n = !0, [s, i] = [i, s], s.forEach(l), s.clear(), n = !1, o && (o = !1, u.process(d));
    }
  };
  return u;
}
const Ku = 40;
function Oo(t, e) {
  let s = !1, i = !0;
  const n = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => s = !0, r = Dt.reduce((w, g) => (w[g] = Fu(o), w), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: d, update: h, preRender: p, render: f, postRender: m } = r, y = () => {
    const w = Se.useManualTiming ? n.timestamp : performance.now();
    s = !1, Se.useManualTiming || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(w - n.timestamp, Ku), 1)), n.timestamp = w, n.isProcessing = !0, a.process(n), l.process(n), u.process(n), d.process(n), h.process(n), p.process(n), f.process(n), m.process(n), n.isProcessing = !1, s && e && (i = !1, t(y));
  }, v = () => {
    s = !0, i = !0, n.isProcessing || t(y);
  };
  return { schedule: Dt.reduce((w, g) => {
    const P = r[g];
    return w[g] = (T, z = !1, x = !1) => (s || v(), P.schedule(T, z, x)), w;
  }, {}), cancel: (w) => {
    for (let g = 0; g < Dt.length; g++)
      r[Dt[g]].cancel(w);
  }, state: n, steps: r };
}
const { schedule: W, cancel: Ae, state: ne, steps: ps } = /* @__PURE__ */ Oo(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0);
let Kt;
function Wu() {
  Kt = void 0;
}
const de = {
  now: () => (Kt === void 0 && de.set(ne.isProcessing || Se.useManualTiming ? ne.timestamp : performance.now()), Kt),
  set: (t) => {
    Kt = t, queueMicrotask(Wu);
  }
}, Eo = (t) => (e) => typeof e == "string" && e.startsWith(t), Ni = /* @__PURE__ */ Eo("--"), Hu = /* @__PURE__ */ Eo("var(--"), Vi = (t) => Hu(t) ? Uu.test(t.split("/*")[0].trim()) : !1, Uu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ot = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Pt = {
  ...ot,
  transform: (t) => ke(0, 1, t)
}, $t = {
  ...ot,
  default: 1
}, yt = (t) => Math.round(t * 1e5) / 1e5, Di = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Gu(t) {
  return t == null;
}
const Yu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, $i = (t, e) => (s) => !!(typeof s == "string" && Yu.test(s) && s.startsWith(t) || e && !Gu(s) && Object.prototype.hasOwnProperty.call(s, e)), Io = (t, e, s) => (i) => {
  if (typeof i != "string")
    return i;
  const [n, o, r, a] = i.match(Di);
  return {
    [t]: parseFloat(n),
    [e]: parseFloat(o),
    [s]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, qu = (t) => ke(0, 255, t), fs = {
  ...ot,
  transform: (t) => Math.round(qu(t))
}, Ie = {
  test: /* @__PURE__ */ $i("rgb", "red"),
  parse: /* @__PURE__ */ Io("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: s, alpha: i = 1 }) => "rgba(" + fs.transform(t) + ", " + fs.transform(e) + ", " + fs.transform(s) + ", " + yt(Pt.transform(i)) + ")"
};
function Xu(t) {
  let e = "", s = "", i = "", n = "";
  return t.length > 5 ? (e = t.substring(1, 3), s = t.substring(3, 5), i = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), s = t.substring(2, 3), i = t.substring(3, 4), n = t.substring(4, 5), e += e, s += s, i += i, n += n), {
    red: parseInt(e, 16),
    green: parseInt(s, 16),
    blue: parseInt(i, 16),
    alpha: n ? parseInt(n, 16) / 255 : 1
  };
}
const $s = {
  test: /* @__PURE__ */ $i("#"),
  parse: Xu,
  transform: Ie.transform
}, Lt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Te = /* @__PURE__ */ Lt("deg"), be = /* @__PURE__ */ Lt("%"), E = /* @__PURE__ */ Lt("px"), Zu = /* @__PURE__ */ Lt("vh"), Ju = /* @__PURE__ */ Lt("vw"), Nn = {
  ...be,
  parse: (t) => be.parse(t) / 100,
  transform: (t) => be.transform(t * 100)
}, Ye = {
  test: /* @__PURE__ */ $i("hsl", "hue"),
  parse: /* @__PURE__ */ Io("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: s, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + be.transform(yt(e)) + ", " + be.transform(yt(s)) + ", " + yt(Pt.transform(i)) + ")"
}, Z = {
  test: (t) => Ie.test(t) || $s.test(t) || Ye.test(t),
  parse: (t) => Ie.test(t) ? Ie.parse(t) : Ye.test(t) ? Ye.parse(t) : $s.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Ie.transform(t) : Ye.transform(t),
  getAnimatableNone: (t) => {
    const e = Z.parse(t);
    return e.alpha = 0, Z.transform(e);
  }
}, Qu = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ed(t) {
  var e, s;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Di)) == null ? void 0 : e.length) || 0) + (((s = t.match(Qu)) == null ? void 0 : s.length) || 0) > 0;
}
const No = "number", Vo = "color", td = "var", sd = "var(", Vn = "${}", id = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function St(t) {
  const e = t.toString(), s = [], i = {
    color: [],
    number: [],
    var: []
  }, n = [];
  let o = 0;
  const a = e.replace(id, (l) => (Z.test(l) ? (i.color.push(o), n.push(Vo), s.push(Z.parse(l))) : l.startsWith(sd) ? (i.var.push(o), n.push(td), s.push(l)) : (i.number.push(o), n.push(No), s.push(parseFloat(l))), ++o, Vn)).split(Vn);
  return { values: s, split: a, indexes: i, types: n };
}
function Do(t) {
  return St(t).values;
}
function $o(t) {
  const { split: e, types: s } = St(t), i = e.length;
  return (n) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], n[r] !== void 0) {
        const a = s[r];
        a === No ? o += yt(n[r]) : a === Vo ? o += Z.transform(n[r]) : o += n[r];
      }
    return o;
  };
}
const nd = (t) => typeof t == "number" ? 0 : Z.test(t) ? Z.getAnimatableNone(t) : t;
function rd(t) {
  const e = Do(t);
  return $o(t)(e.map(nd));
}
const Me = {
  test: ed,
  parse: Do,
  createTransformer: $o,
  getAnimatableNone: rd
};
function ms(t, e, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (e - t) * 6 * s : s < 1 / 2 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t;
}
function od({ hue: t, saturation: e, lightness: s, alpha: i }) {
  t /= 360, e /= 100, s /= 100;
  let n = 0, o = 0, r = 0;
  if (!e)
    n = o = r = s;
  else {
    const a = s < 0.5 ? s * (1 + e) : s + e - s * e, l = 2 * s - a;
    n = ms(l, a, t + 1 / 3), o = ms(l, a, t), r = ms(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function Zt(t, e) {
  return (s) => s > 0 ? e : t;
}
const U = (t, e, s) => t + (e - t) * s, gs = (t, e, s) => {
  const i = t * t, n = s * (e * e - i) + i;
  return n < 0 ? 0 : Math.sqrt(n);
}, ad = [$s, Ie, Ye], ld = (t) => ad.find((e) => e.test(t));
function Dn(t) {
  const e = ld(t);
  if (rt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let s = e.parse(t);
  return e === Ye && (s = od(s)), s;
}
const $n = (t, e) => {
  const s = Dn(t), i = Dn(e);
  if (!s || !i)
    return Zt(t, e);
  const n = { ...s };
  return (o) => (n.red = gs(s.red, i.red, o), n.green = gs(s.green, i.green, o), n.blue = gs(s.blue, i.blue, o), n.alpha = U(s.alpha, i.alpha, o), Ie.transform(n));
}, Bs = /* @__PURE__ */ new Set(["none", "hidden"]);
function cd(t, e) {
  return Bs.has(t) ? (s) => s <= 0 ? t : e : (s) => s >= 1 ? e : t;
}
function ud(t, e) {
  return (s) => U(t, e, s);
}
function Bi(t) {
  return typeof t == "number" ? ud : typeof t == "string" ? Vi(t) ? Zt : Z.test(t) ? $n : pd : Array.isArray(t) ? Bo : typeof t == "object" ? Z.test(t) ? $n : dd : Zt;
}
function Bo(t, e) {
  const s = [...t], i = s.length, n = t.map((o, r) => Bi(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      s[r] = n[r](o);
    return s;
  };
}
function dd(t, e) {
  const s = { ...t, ...e }, i = {};
  for (const n in s)
    t[n] !== void 0 && e[n] !== void 0 && (i[n] = Bi(t[n])(t[n], e[n]));
  return (n) => {
    for (const o in i)
      s[o] = i[o](n);
    return s;
  };
}
function hd(t, e) {
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let n = 0; n < e.values.length; n++) {
    const o = e.types[n], r = t.indexes[o][i[o]], a = t.values[r] ?? 0;
    s[n] = a, i[o]++;
  }
  return s;
}
const pd = (t, e) => {
  const s = Me.createTransformer(e), i = St(t), n = St(e);
  return i.indexes.var.length === n.indexes.var.length && i.indexes.color.length === n.indexes.color.length && i.indexes.number.length >= n.indexes.number.length ? Bs.has(t) && !n.values.length || Bs.has(e) && !i.values.length ? cd(t, e) : At(Bo(hd(i, n), n.values), s) : (rt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Zt(t, e));
};
function Fo(t, e, s) {
  return typeof t == "number" && typeof e == "number" && typeof s == "number" ? U(t, e, s) : Bi(t)(t, e);
}
const fd = (t) => {
  const e = ({ timestamp: s }) => t(s);
  return {
    start: (s = !0) => W.update(e, s),
    stop: () => Ae(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ne.isProcessing ? ne.timestamp : de.now()
  };
}, Ko = (t, e, s = 10) => {
  let i = "";
  const n = Math.max(Math.round(e / s), 2);
  for (let o = 0; o < n; o++)
    i += Math.round(t(o / (n - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, Jt = 2e4;
function Fi(t) {
  let e = 0;
  const s = 50;
  let i = t.next(e);
  for (; !i.done && e < Jt; )
    e += s, i = t.next(e);
  return e >= Jt ? 1 / 0 : e;
}
function md(t, e = 100, s) {
  const i = s({ ...t, keyframes: [0, e] }), n = Math.min(Fi(i), Jt);
  return {
    type: "keyframes",
    ease: (o) => i.next(n * o).value / e,
    duration: /* @__PURE__ */ ve(n)
  };
}
const gd = 5;
function Wo(t, e, s) {
  const i = Math.max(e - gd, 0);
  return ko(s - t(i), e - i);
}
const H = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, ys = 1e-3;
function yd({ duration: t = H.duration, bounce: e = H.bounce, velocity: s = H.velocity, mass: i = H.mass }) {
  let n, o;
  rt(t <= /* @__PURE__ */ ye(H.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let r = 1 - e;
  r = ke(H.minDamping, H.maxDamping, r), t = ke(H.minDuration, H.maxDuration, /* @__PURE__ */ ve(t)), r < 1 ? (n = (u) => {
    const d = u * r, h = d * t, p = d - s, f = Fs(u, r), m = Math.exp(-h);
    return ys - p / f * m;
  }, o = (u) => {
    const h = u * r * t, p = h * s + s, f = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), y = Fs(Math.pow(u, 2), r);
    return (-n(u) + ys > 0 ? -1 : 1) * ((p - f) * m) / y;
  }) : (n = (u) => {
    const d = Math.exp(-u * t), h = (u - s) * t + 1;
    return -ys + d * h;
  }, o = (u) => {
    const d = Math.exp(-u * t), h = (s - u) * (t * t);
    return d * h;
  });
  const a = 5 / t, l = vd(n, o, a);
  if (t = /* @__PURE__ */ ye(t), isNaN(l))
    return {
      stiffness: H.stiffness,
      damping: H.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const xd = 12;
function vd(t, e, s) {
  let i = s;
  for (let n = 1; n < xd; n++)
    i = i - t(i) / e(i);
  return i;
}
function Fs(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const bd = ["duration", "bounce"], _d = ["stiffness", "damping", "mass"];
function Bn(t, e) {
  return e.some((s) => t[s] !== void 0);
}
function wd(t) {
  let e = {
    velocity: H.velocity,
    stiffness: H.stiffness,
    damping: H.damping,
    mass: H.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Bn(t, _d) && Bn(t, bd))
    if (t.visualDuration) {
      const s = t.visualDuration, i = 2 * Math.PI / (s * 1.2), n = i * i, o = 2 * ke(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
      e = {
        ...e,
        mass: H.mass,
        stiffness: n,
        damping: o
      };
    } else {
      const s = yd(t);
      e = {
        ...e,
        ...s,
        mass: H.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Qt(t = H.visualDuration, e = H.bounce) {
  const s = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: n } = s;
  const o = s.keyframes[0], r = s.keyframes[s.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: d, duration: h, velocity: p, isResolvedFromDuration: f } = wd({
    ...s,
    velocity: -/* @__PURE__ */ ve(s.velocity || 0)
  }), m = p || 0, y = u / (2 * Math.sqrt(l * d)), v = r - o, _ = /* @__PURE__ */ ve(Math.sqrt(l / d)), k = Math.abs(v) < 5;
  i || (i = k ? H.restSpeed.granular : H.restSpeed.default), n || (n = k ? H.restDelta.granular : H.restDelta.default);
  let w;
  if (y < 1) {
    const P = Fs(_, y);
    w = (T) => {
      const z = Math.exp(-y * _ * T);
      return r - z * ((m + y * _ * v) / P * Math.sin(P * T) + v * Math.cos(P * T));
    };
  } else if (y === 1)
    w = (P) => r - Math.exp(-_ * P) * (v + (m + _ * v) * P);
  else {
    const P = _ * Math.sqrt(y * y - 1);
    w = (T) => {
      const z = Math.exp(-y * _ * T), x = Math.min(P * T, 300);
      return r - z * ((m + y * _ * v) * Math.sinh(x) + P * v * Math.cosh(x)) / P;
    };
  }
  const g = {
    calculatedDuration: f && h || null,
    next: (P) => {
      const T = w(P);
      if (f)
        a.done = P >= h;
      else {
        let z = P === 0 ? m : 0;
        y < 1 && (z = P === 0 ? /* @__PURE__ */ ye(m) : Wo(w, P, T));
        const x = Math.abs(z) <= i, j = Math.abs(r - T) <= n;
        a.done = x && j;
      }
      return a.value = a.done ? r : T, a;
    },
    toString: () => {
      const P = Math.min(Fi(g), Jt), T = Ko((z) => g.next(P * z).value, P, 30);
      return P + "ms " + T;
    },
    toTransition: () => {
    }
  };
  return g;
}
Qt.applyToOptions = (t) => {
  const e = md(t, 100, Qt);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ ye(e.duration), t.type = "keyframes", t;
};
function Ks({ keyframes: t, velocity: e = 0, power: s = 0.8, timeConstant: i = 325, bounceDamping: n = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: d }) {
  const h = t[0], p = {
    done: !1,
    value: h
  }, f = (x) => a !== void 0 && x < a || l !== void 0 && x > l, m = (x) => a === void 0 ? l : l === void 0 || Math.abs(a - x) < Math.abs(l - x) ? a : l;
  let y = s * e;
  const v = h + y, _ = r === void 0 ? v : r(v);
  _ !== v && (y = _ - h);
  const k = (x) => -y * Math.exp(-x / i), w = (x) => _ + k(x), g = (x) => {
    const j = k(x), L = w(x);
    p.done = Math.abs(j) <= u, p.value = p.done ? _ : L;
  };
  let P, T;
  const z = (x) => {
    f(p.value) && (P = x, T = Qt({
      keyframes: [p.value, m(p.value)],
      velocity: Wo(w, x, p.value),
      // TODO: This should be passing * 1000
      damping: n,
      stiffness: o,
      restDelta: u,
      restSpeed: d
    }));
  };
  return z(0), {
    calculatedDuration: null,
    next: (x) => {
      let j = !1;
      return !T && P === void 0 && (j = !0, g(x), z(x)), P !== void 0 && x >= P ? T.next(x - P) : (!j && g(x), p);
    }
  };
}
function kd(t, e, s) {
  const i = [], n = s || Se.mix || Fo, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = n(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || fe : e;
      a = At(l, a);
    }
    i.push(a);
  }
  return i;
}
function Pd(t, e, { clamp: s = !0, ease: i, mixer: n } = {}) {
  const o = t.length;
  if (Pe(o === e.length, "Both input and output ranges must be the same length", "range-length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = kd(e, i, n), l = a.length, u = (d) => {
    if (r && d < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(d < t[h + 1]); h++)
        ;
    const p = /* @__PURE__ */ kt(t[h], t[h + 1], d);
    return a[h](p);
  };
  return s ? (d) => u(ke(t[0], t[o - 1], d)) : u;
}
function Sd(t, e) {
  const s = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const n = /* @__PURE__ */ kt(0, e, i);
    t.push(U(s, 1, n));
  }
}
function jd(t) {
  const e = [0];
  return Sd(e, t.length - 1), e;
}
function Cd(t, e) {
  return t.map((s) => s * e);
}
function Td(t, e) {
  return t.map(() => e || zo).splice(0, t.length - 1);
}
function qe({ duration: t = 300, keyframes: e, times: s, ease: i = "easeInOut" }) {
  const n = $u(i) ? i.map(In) : In(i), o = {
    done: !1,
    value: e[0]
  }, r = Cd(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === e.length ? s : jd(e),
    t
  ), a = Pd(r, e, {
    ease: Array.isArray(n) ? n : Td(e, n)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Ad = (t) => t !== null;
function Ki(t, { repeat: e, repeatType: s = "loop" }, i, n = 1) {
  const o = t.filter(Ad), a = n < 0 || e && s !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const Md = {
  decay: Ks,
  inertia: Ks,
  tween: qe,
  keyframes: qe,
  spring: Qt
};
function Ho(t) {
  typeof t.type == "string" && (t.type = Md[t.type]);
}
class Wi {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, s) {
    return this.finished.then(e, s);
  }
}
const Ld = (t) => t / 100;
class Hi extends Wi {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var i, n;
      const { motionValue: s } = this.options;
      s && s.updatedAt !== de.now() && this.tick(de.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (n = (i = this.options).onStop) == null || n.call(i));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Ho(e);
    const { type: s = qe, repeat: i = 0, repeatDelay: n = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = s || qe;
    process.env.NODE_ENV !== "production" && l !== qe && Pe(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== qe && typeof a[0] != "number" && (this.mixKeyframes = At(Ld, Fo(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = Fi(u));
    const { calculatedDuration: d } = u;
    this.calculatedDuration = d, this.resolvedDuration = d + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = u;
  }
  updateTime(e) {
    const s = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s;
  }
  tick(e, s = !1) {
    const { generator: i, totalDuration: n, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: d, repeat: h, repeatType: p, repeatDelay: f, type: m, onUpdate: y, finalKeyframe: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)), s ? this.currentTime = e : this.updateTime(e);
    const _ = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), k = this.playbackSpeed >= 0 ? _ < 0 : _ > n;
    this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = n);
    let w = this.currentTime, g = i;
    if (h) {
      const x = Math.min(this.currentTime, n) / a;
      let j = Math.floor(x), L = x % 1;
      !L && x >= 1 && (L = 1), L === 1 && j--, j = Math.min(j, h + 1), !!(j % 2) && (p === "reverse" ? (L = 1 - L, f && (L -= f / a)) : p === "mirror" && (g = r)), w = ke(0, 1, L) * a;
    }
    const P = k ? { done: !1, value: d[0] } : g.next(w);
    o && (P.value = o(P.value));
    let { done: T } = P;
    !k && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
    const z = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return z && m !== Ks && (P.value = Ki(d, this.options, v, this.speed)), y && y(P.value), z && this.finish(), P;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, s) {
    return this.finished.then(e, s);
  }
  get duration() {
    return /* @__PURE__ */ ve(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ ve(this.currentTime);
  }
  set time(e) {
    var s;
    e = /* @__PURE__ */ ye(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (s = this.driver) == null || s.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(de.now());
    const s = this.playbackSpeed !== e;
    this.playbackSpeed = e, s && (this.time = /* @__PURE__ */ ve(this.currentTime));
  }
  play() {
    var n, o;
    if (this.isStopped)
      return;
    const { driver: e = fd, startTime: s } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))), (o = (n = this.options).onPlay) == null || o.call(n);
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = s ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(de.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, s;
    this.notifyFinished(), this.teardown(), this.state = "finished", (s = (e = this.options).onComplete) == null || s.call(e);
  }
  cancel() {
    var e, s;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (s = (e = this.options).onCancel) == null || s.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    var s;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (s = this.driver) == null || s.stop(), e.observe(this);
  }
}
function zd(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Ne = (t) => t * 180 / Math.PI, Ws = (t) => {
  const e = Ne(Math.atan2(t[1], t[0]));
  return Hs(e);
}, Rd = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Ws,
  rotateZ: Ws,
  skewX: (t) => Ne(Math.atan(t[1])),
  skewY: (t) => Ne(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Hs = (t) => (t = t % 360, t < 0 && (t += 360), t), Fn = Ws, Kn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Wn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Od = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Kn,
  scaleY: Wn,
  scale: (t) => (Kn(t) + Wn(t)) / 2,
  rotateX: (t) => Hs(Ne(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Hs(Ne(Math.atan2(-t[2], t[0]))),
  rotateZ: Fn,
  rotate: Fn,
  skewX: (t) => Ne(Math.atan(t[4])),
  skewY: (t) => Ne(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Us(t) {
  return t.includes("scale") ? 1 : 0;
}
function Gs(t, e) {
  if (!t || t === "none")
    return Us(e);
  const s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, n;
  if (s)
    i = Od, n = s;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Rd, n = a;
  }
  if (!n)
    return Us(e);
  const o = i[e], r = n[1].split(",").map(Id);
  return typeof o == "function" ? o(r) : r[o];
}
const Ed = (t, e) => {
  const { transform: s = "none" } = getComputedStyle(t);
  return Gs(s, e);
};
function Id(t) {
  return parseFloat(t.trim());
}
const at = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], lt = new Set(at), Hn = (t) => t === ot || t === E, Nd = /* @__PURE__ */ new Set(["x", "y", "z"]), Vd = at.filter((t) => !Nd.has(t));
function Dd(t) {
  const e = [];
  return Vd.forEach((s) => {
    const i = t.getValue(s);
    i !== void 0 && (e.push([s, i.get()]), i.set(s.startsWith("scale") ? 1 : 0));
  }), e;
}
const $e = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: s = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(s),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: s = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(s),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Gs(e, "x"),
  y: (t, { transform: e }) => Gs(e, "y")
};
$e.translateX = $e.x;
$e.translateY = $e.y;
const Be = /* @__PURE__ */ new Set();
let Ys = !1, qs = !1, Xs = !1;
function Uo() {
  if (qs) {
    const t = Array.from(Be).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), s = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const n = Dd(i);
      n.length && (s.set(i, n), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const n = s.get(i);
      n && n.forEach(([o, r]) => {
        var a;
        (a = i.getValue(o)) == null || a.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  qs = !1, Ys = !1, Be.forEach((t) => t.complete(Xs)), Be.clear();
}
function Go() {
  Be.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (qs = !0);
  });
}
function $d() {
  Xs = !0, Go(), Uo(), Xs = !1;
}
class Ui {
  constructor(e, s, i, n, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = s, this.name = i, this.motionValue = n, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Be.add(this), Ys || (Ys = !0, W.read(Go), W.resolveKeyframes(Uo))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: s, element: i, motionValue: n } = this;
    if (e[0] === null) {
      const o = n == null ? void 0 : n.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && s) {
        const a = i.readValue(s, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), n && o === void 0 && n.set(e[0]);
    }
    zd(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Be.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Be.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Bd = (t) => t.startsWith("--");
function Fd(t, e, s) {
  Bd(e) ? t.style.setProperty(e, s) : t.style[e] = s;
}
const Kd = /* @__PURE__ */ zi(() => window.ScrollTimeline !== void 0), Wd = {};
function Hd(t, e) {
  const s = /* @__PURE__ */ zi(t);
  return () => Wd[e] ?? s();
}
const Yo = /* @__PURE__ */ Hd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), mt = ([t, e, s, i]) => `cubic-bezier(${t}, ${e}, ${s}, ${i})`, Un = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ mt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ mt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ mt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ mt([0.33, 1.53, 0.69, 0.99])
};
function qo(t, e) {
  if (t)
    return typeof t == "function" ? Yo() ? Ko(t, e) : "ease-out" : Ro(t) ? mt(t) : Array.isArray(t) ? t.map((s) => qo(s, e) || Un.easeOut) : Un[t];
}
function Ud(t, e, s, { delay: i = 0, duration: n = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const d = {
    [e]: s
  };
  l && (d.offset = l);
  const h = qo(a, n);
  Array.isArray(h) && (d.easing = h);
  const p = {
    delay: i,
    duration: n,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (p.pseudoElement = u), t.animate(d, p);
}
function Xo(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Gd({ type: t, ...e }) {
  return Xo(t) && Yo() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Yd extends Wi {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: s, name: i, keyframes: n, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, Pe(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = Gd(e);
    this.animation = Ud(s, i, n, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const d = Ki(n, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(d) : Fd(s, i, d), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, s;
    (s = (e = this.animation).finish) == null || s.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var e, s;
    this.isPseudoElement || (s = (e = this.animation).commitStyles) == null || s.call(e);
  }
  get duration() {
    var s, i;
    const e = ((i = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : i.call(s).duration) || 0;
    return /* @__PURE__ */ ve(Number(e));
  }
  get time() {
    return /* @__PURE__ */ ve(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ye(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: s }) {
    var i;
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && Kd() ? (this.animation.timeline = e, fe) : s(this);
  }
}
const Zo = {
  anticipate: Ao,
  backInOut: To,
  circInOut: Lo
};
function qd(t) {
  return t in Zo;
}
function Xd(t) {
  typeof t.ease == "string" && qd(t.ease) && (t.ease = Zo[t.ease]);
}
const Gn = 10;
class Zd extends Yd {
  constructor(e) {
    Xd(e), Ho(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: s, onUpdate: i, onComplete: n, element: o, ...r } = this.options;
    if (!s)
      return;
    if (e !== void 0) {
      s.set(e);
      return;
    }
    const a = new Hi({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ ye(this.finishedTime ?? this.time);
    s.setWithVelocity(a.sample(l - Gn).value, a.sample(l).value, Gn), a.stop();
  }
}
const Yn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Me.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Jd(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let s = 0; s < t.length; s++)
    if (t[s] !== e)
      return !0;
}
function Qd(t, e, s, i) {
  const n = t[0];
  if (n === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Yn(n, e), a = Yn(o, e);
  return rt(r === a, `You are trying to animate ${e} from "${n}" to "${o}". "${r ? o : n}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Jd(t) || (s === "spring" || Xo(s)) && i;
}
function Zs(t) {
  t.duration = 0, t.type;
}
const eh = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), th = /* @__PURE__ */ zi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function sh(t) {
  var d;
  const { motionValue: e, name: s, repeatDelay: i, repeatType: n, damping: o, type: r } = t;
  if (!(((d = e == null ? void 0 : e.owner) == null ? void 0 : d.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return th() && s && eh.has(s) && (s !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && n !== "mirror" && o !== 0 && r !== "inertia";
}
const ih = 40;
class nh extends Wi {
  constructor({ autoplay: e = !0, delay: s = 0, type: i = "keyframes", repeat: n = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: d, ...h }) {
    var m;
    super(), this.stop = () => {
      var y, v;
      this._animation && (this._animation.stop(), (y = this.stopTimeline) == null || y.call(this)), (v = this.keyframeResolver) == null || v.cancel();
    }, this.createdAt = de.now();
    const p = {
      autoplay: e,
      delay: s,
      type: i,
      repeat: n,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: d,
      ...h
    }, f = (d == null ? void 0 : d.KeyframeResolver) || Ui;
    this.keyframeResolver = new f(a, (y, v, _) => this.onKeyframesResolved(y, v, p, !_), l, u, d), (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(e, s, i, n) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: d } = i;
    this.resolvedAt = de.now(), Qd(e, o, r, a) || ((Se.instantAnimations || !l) && (d == null || d(Ki(e, i, s))), e[0] = e[e.length - 1], Zs(i), i.repeat = 0);
    const p = {
      startTime: n ? this.resolvedAt ? this.resolvedAt - this.createdAt > ih ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: s,
      ...i,
      keyframes: e
    }, f = !u && sh(p) ? new Zd({
      ...p,
      element: p.motionValue.owner.current
    }) : new Hi(p);
    f.finished.then(() => this.notifyFinished()).catch(fe), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, s) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), $d()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
const rh = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function oh(t) {
  const e = rh.exec(t);
  if (!e)
    return [,];
  const [, s, i, n] = e;
  return [`--${s ?? i}`, n];
}
const ah = 4;
function Jo(t, e, s = 1) {
  Pe(s <= ah, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, n] = oh(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return bo(r) ? parseFloat(r) : r;
  }
  return Vi(n) ? Jo(n, e, s + 1) : n;
}
function Gi(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const Qo = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...at
]), lh = {
  test: (t) => t === "auto",
  parse: (t) => t
}, ea = (t) => (e) => e.test(t), ta = [ot, E, be, Te, Ju, Zu, lh], qn = (t) => ta.find(ea(t));
function ch(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || wo(t) : !0;
}
const uh = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function dh(t) {
  const [e, s] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = s.match(Di) || [];
  if (!i)
    return t;
  const n = s.replace(i, "");
  let o = uh.has(e) ? 1 : 0;
  return i !== s && (o *= 100), e + "(" + o + n + ")";
}
const hh = /\b([a-z-]*)\(.*?\)/gu, Js = {
  ...Me,
  getAnimatableNone: (t) => {
    const e = t.match(hh);
    return e ? e.map(dh).join(" ") : t;
  }
}, Xn = {
  ...ot,
  transform: Math.round
}, ph = {
  rotate: Te,
  rotateX: Te,
  rotateY: Te,
  rotateZ: Te,
  scale: $t,
  scaleX: $t,
  scaleY: $t,
  scaleZ: $t,
  skew: Te,
  skewX: Te,
  skewY: Te,
  distance: E,
  translateX: E,
  translateY: E,
  translateZ: E,
  x: E,
  y: E,
  z: E,
  perspective: E,
  transformPerspective: E,
  opacity: Pt,
  originX: Nn,
  originY: Nn,
  originZ: E
}, Yi = {
  // Border props
  borderWidth: E,
  borderTopWidth: E,
  borderRightWidth: E,
  borderBottomWidth: E,
  borderLeftWidth: E,
  borderRadius: E,
  radius: E,
  borderTopLeftRadius: E,
  borderTopRightRadius: E,
  borderBottomRightRadius: E,
  borderBottomLeftRadius: E,
  // Positioning props
  width: E,
  maxWidth: E,
  height: E,
  maxHeight: E,
  top: E,
  right: E,
  bottom: E,
  left: E,
  // Spacing props
  padding: E,
  paddingTop: E,
  paddingRight: E,
  paddingBottom: E,
  paddingLeft: E,
  margin: E,
  marginTop: E,
  marginRight: E,
  marginBottom: E,
  marginLeft: E,
  // Misc
  backgroundPositionX: E,
  backgroundPositionY: E,
  ...ph,
  zIndex: Xn,
  // SVG
  fillOpacity: Pt,
  strokeOpacity: Pt,
  numOctaves: Xn
}, fh = {
  ...Yi,
  // Color props
  color: Z,
  backgroundColor: Z,
  outlineColor: Z,
  fill: Z,
  stroke: Z,
  // Border props
  borderColor: Z,
  borderTopColor: Z,
  borderRightColor: Z,
  borderBottomColor: Z,
  borderLeftColor: Z,
  filter: Js,
  WebkitFilter: Js
}, sa = (t) => fh[t];
function ia(t, e) {
  let s = sa(t);
  return s !== Js && (s = Me), s.getAnimatableNone ? s.getAnimatableNone(e) : void 0;
}
const mh = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gh(t, e, s) {
  let i = 0, n;
  for (; i < t.length && !n; ) {
    const o = t[i];
    typeof o == "string" && !mh.has(o) && St(o).values.length && (n = t[i]), i++;
  }
  if (n && s)
    for (const o of e)
      t[o] = ia(s, n);
}
class yh extends Ui {
  constructor(e, s, i, n, o) {
    super(e, s, i, n, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: s, name: i } = this;
    if (!s || !s.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Vi(u))) {
        const d = Jo(u, s.current);
        d !== void 0 && (e[l] = d), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Qo.has(i) || e.length !== 2)
      return;
    const [n, o] = e, r = qn(n), a = qn(o);
    if (r !== a)
      if (Hn(r) && Hn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else $e[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: s } = this, i = [];
    for (let n = 0; n < e.length; n++)
      (e[n] === null || ch(e[n])) && i.push(n);
    i.length && gh(e, i, s);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: s, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = $e[i](e.measureViewportBox(), window.getComputedStyle(e.current)), s[0] = this.measuredOrigin;
    const n = s[s.length - 1];
    n !== void 0 && e.getValue(i, n).jump(n, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: s, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const n = e.getValue(s);
    n && n.jump(this.measuredOrigin, !1);
    const o = i.length - 1, r = i[o];
    i[o] = $e[s](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      e.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function xh(t, e, s) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const n = (s == null ? void 0 : s[t]) ?? i.querySelectorAll(t);
    return n ? Array.from(n) : [];
  }
  return Array.from(t);
}
const na = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function ra(t) {
  return _o(t) && "offsetHeight" in t;
}
const Zn = 30, vh = (t) => !isNaN(parseFloat(t));
class bh {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      var o;
      const n = de.now();
      if (this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = s.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = de.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = vh(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Oi(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, s) {
    this.events[e] || (this.events[e] = new Ri());
    const i = this.events[e].add(s);
    return e === "change" ? () => {
      i(), W.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, s) {
    this.passiveEffect = e, this.stopPassiveEffect = s;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, s, i) {
    this.set(s), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, s = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = de.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zn)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Zn);
    return ko(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((s) => {
      this.hasAnimated = !0, this.animation = e(s), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var e, s;
    (e = this.dependents) == null || e.clear(), (s = this.events.destroy) == null || s.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function tt(t, e) {
  return new bh(t, e);
}
const { schedule: qi } = /* @__PURE__ */ Oo(queueMicrotask, !1), ge = {
  x: !1,
  y: !1
};
function oa() {
  return ge.x || ge.y;
}
function _h(t) {
  return t === "x" || t === "y" ? ge[t] ? null : (ge[t] = !0, () => {
    ge[t] = !1;
  }) : ge.x || ge.y ? null : (ge.x = ge.y = !0, () => {
    ge.x = ge.y = !1;
  });
}
function aa(t, e) {
  const s = xh(t), i = new AbortController(), n = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [s, n, () => i.abort()];
}
function Jn(t) {
  return !(t.pointerType === "touch" || oa());
}
function wh(t, e, s = {}) {
  const [i, n, o] = aa(t, s), r = (a) => {
    if (!Jn(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const d = (h) => {
      Jn(h) && (u(h), l.removeEventListener("pointerleave", d));
    };
    l.addEventListener("pointerleave", d, n);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, n);
  }), o;
}
const la = (t, e) => e ? t === e ? !0 : la(t, e.parentElement) : !1, Xi = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, kh = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ph(t) {
  return kh.has(t.tagName) || t.tabIndex !== -1;
}
const Wt = /* @__PURE__ */ new WeakSet();
function Qn(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function xs(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Sh = (t, e) => {
  const s = t.currentTarget;
  if (!s)
    return;
  const i = Qn(() => {
    if (Wt.has(s))
      return;
    xs(s, "down");
    const n = Qn(() => {
      xs(s, "up");
    }), o = () => xs(s, "cancel");
    s.addEventListener("keyup", n, e), s.addEventListener("blur", o, e);
  });
  s.addEventListener("keydown", i, e), s.addEventListener("blur", () => s.removeEventListener("keydown", i), e);
};
function er(t) {
  return Xi(t) && !oa();
}
function jh(t, e, s = {}) {
  const [i, n, o] = aa(t, s), r = (a) => {
    const l = a.currentTarget;
    if (!er(a))
      return;
    Wt.add(l);
    const u = e(l, a), d = (f, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), Wt.has(l) && Wt.delete(l), er(f) && typeof u == "function" && u(f, { success: m });
    }, h = (f) => {
      d(f, l === window || l === document || s.useGlobalTarget || la(l, f.target));
    }, p = (f) => {
      d(f, !1);
    };
    window.addEventListener("pointerup", h, n), window.addEventListener("pointercancel", p, n);
  };
  return i.forEach((a) => {
    (s.useGlobalTarget ? window : a).addEventListener("pointerdown", r, n), ra(a) && (a.addEventListener("focus", (u) => Sh(u, n)), !Ph(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function ca(t) {
  return _o(t) && "ownerSVGElement" in t;
}
function Ch(t) {
  return ca(t) && t.tagName === "svg";
}
const ae = (t) => !!(t && t.getVelocity), Th = [...ta, Z, Me], Ah = (t) => Th.find(ea(t)), Zi = We({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class Mh extends ss.Component {
  getSnapshotBeforeUpdate(e) {
    const s = this.props.childRef.current;
    if (s && e.isPresent && !this.props.isPresent) {
      const i = s.offsetParent, n = ra(i) && i.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = s.offsetHeight || 0, o.width = s.offsetWidth || 0, o.top = s.offsetTop, o.left = s.offsetLeft, o.right = n - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Lh({ children: t, isPresent: e, anchorX: s, root: i }) {
  const n = ai(), o = le(null), r = le({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = re(Zi);
  return Yr(() => {
    const { width: l, height: u, top: d, left: h, right: p } = r.current;
    if (e || !o.current || !l || !u)
      return;
    const f = s === "left" ? `left: ${h}` : `right: ${p}`;
    o.current.dataset.motionPopId = n;
    const m = document.createElement("style");
    a && (m.nonce = a);
    const y = i ?? document.head;
    return y.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${f}px !important;
            top: ${d}px !important;
          }
        `), () => {
      y.contains(m) && y.removeChild(m);
    };
  }, [e]), c.jsx(Mh, { isPresent: e, childRef: o, sizeRef: r, children: ss.cloneElement(t, { ref: o }) });
}
const zh = ({ children: t, initial: e, isPresent: s, onExitComplete: i, custom: n, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = Ti(Rh), d = ai();
  let h = !0, p = Fe(() => (h = !1, {
    id: d,
    initial: e,
    isPresent: s,
    custom: n,
    onExitComplete: (f) => {
      u.set(f, !0);
      for (const m of u.values())
        if (!m)
          return;
      i && i();
    },
    register: (f) => (u.set(f, !1), () => u.delete(f))
  }), [s, u, i]);
  return o && h && (p = { ...p }), Fe(() => {
    u.forEach((f, m) => u.set(m, !1));
  }, [s]), ss.useEffect(() => {
    !s && !u.size && i && i();
  }, [s]), r === "popLayout" && (t = c.jsx(Lh, { isPresent: s, anchorX: a, root: l, children: t })), c.jsx(os.Provider, { value: p, children: t });
};
function Rh() {
  return /* @__PURE__ */ new Map();
}
function ua(t = !0) {
  const e = re(os);
  if (e === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: i, register: n } = e, o = ai();
  oe(() => {
    if (t)
      return n(o);
  }, [t]);
  const r = Ve(() => t && i && i(o), [o, i, t]);
  return !s && i ? [!1, r] : [!0];
}
const Bt = (t) => t.key || "";
function tr(t) {
  const e = [];
  return el.forEach(t, (s) => {
    tl(s) && e.push(s);
  }), e;
}
const Oh = ({ children: t, custom: e, initial: s = !0, onExitComplete: i, presenceAffectsLayout: n = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", root: l }) => {
  const [u, d] = ua(r), h = Fe(() => tr(t), [t]), p = r && !u ? [] : h.map(Bt), f = le(!0), m = le(h), y = Ti(() => /* @__PURE__ */ new Map()), [v, _] = te(h), [k, w] = te(h);
  vo(() => {
    f.current = !1, m.current = h;
    for (let T = 0; T < k.length; T++) {
      const z = Bt(k[T]);
      p.includes(z) ? y.delete(z) : y.get(z) !== !0 && y.set(z, !1);
    }
  }, [k, p.length, p.join("-")]);
  const g = [];
  if (h !== v) {
    let T = [...h];
    for (let z = 0; z < k.length; z++) {
      const x = k[z], j = Bt(x);
      p.includes(j) || (T.splice(z, 0, x), g.push(x));
    }
    return o === "wait" && g.length && (T = g), w(tr(T)), _(h), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && k.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: P } = re(Ci);
  return c.jsx(c.Fragment, { children: k.map((T) => {
    const z = Bt(T), x = r && !u ? !1 : h === k || p.includes(z), j = () => {
      if (y.has(z))
        y.set(z, !0);
      else
        return;
      let L = !0;
      y.forEach((V) => {
        V || (L = !1);
      }), L && (P == null || P(), w(m.current), r && (d == null || d()), i && i());
    };
    return c.jsx(zh, { isPresent: x, initial: !f.current || s ? void 0 : !1, custom: e, presenceAffectsLayout: n, mode: o, root: l, onExitComplete: x ? void 0 : j, anchorX: a, children: T }, z);
  }) });
}, da = We({ strict: !1 }), sr = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, st = {};
for (const t in sr)
  st[t] = {
    isEnabled: (e) => sr[t].some((s) => !!e[s])
  };
function Eh(t) {
  for (const e in t)
    st[e] = {
      ...st[e],
      ...t[e]
    };
}
const Ih = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function es(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Ih.has(t);
}
let ha = (t) => !es(t);
function Nh(t) {
  typeof t == "function" && (ha = (e) => e.startsWith("on") ? !es(e) : t(e));
}
try {
  Nh(require("@emotion/is-prop-valid").default);
} catch {
}
function Vh(t, e, s) {
  const i = {};
  for (const n in t)
    n === "values" && typeof t.values == "object" || (ha(n) || s === !0 && es(n) || !e && !es(n) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && n.startsWith("onDrag")) && (i[n] = t[n]);
  return i;
}
const as = /* @__PURE__ */ We({});
function ls(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function jt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ji = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qi = ["initial", ...Ji];
function cs(t) {
  return ls(t.animate) || Qi.some((e) => jt(t[e]));
}
function pa(t) {
  return !!(cs(t) || t.variants);
}
function Dh(t, e) {
  if (cs(t)) {
    const { initial: s, animate: i } = t;
    return {
      initial: s === !1 || jt(s) ? s : void 0,
      animate: jt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function $h(t) {
  const { initial: e, animate: s } = Dh(t, re(as));
  return Fe(() => ({ initial: e, animate: s }), [ir(e), ir(s)]);
}
function ir(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ct = {};
function Bh(t) {
  for (const e in t)
    Ct[e] = t[e], Ni(e) && (Ct[e].isCSSVariable = !0);
}
function fa(t, { layout: e, layoutId: s }) {
  return lt.has(t) || t.startsWith("origin") || (e || s !== void 0) && (!!Ct[t] || t === "opacity");
}
const Fh = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Kh = at.length;
function Wh(t, e, s) {
  let i = "", n = !0;
  for (let o = 0; o < Kh; o++) {
    const r = at[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || s) {
      const u = na(a, Yi[r]);
      if (!l) {
        n = !1;
        const d = Fh[r] || r;
        i += `${d}(${u}) `;
      }
      s && (e[r] = u);
    }
  }
  return i = i.trim(), s ? i = s(e, n ? "" : i) : n && (i = "none"), i;
}
function en(t, e, s) {
  const { style: i, vars: n, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (lt.has(l)) {
      r = !0;
      continue;
    } else if (Ni(l)) {
      n[l] = u;
      continue;
    } else {
      const d = na(u, Yi[l]);
      l.startsWith("origin") ? (a = !0, o[l] = d) : i[l] = d;
    }
  }
  if (e.transform || (r || s ? i.transform = Wh(e, t.transform, s) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: d = 0 } = o;
    i.transformOrigin = `${l} ${u} ${d}`;
  }
}
const tn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ma(t, e, s) {
  for (const i in e)
    !ae(e[i]) && !fa(i, s) && (t[i] = e[i]);
}
function Hh({ transformTemplate: t }, e) {
  return Fe(() => {
    const s = tn();
    return en(s, e, t), Object.assign({}, s.vars, s.style);
  }, [e]);
}
function Uh(t, e) {
  const s = t.style || {}, i = {};
  return ma(i, s, t), Object.assign(i, Hh(t, e)), i;
}
function Gh(t, e) {
  const s = {}, i = Uh(t, e);
  return t.drag && t.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = i, s;
}
const Yh = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qh = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Xh(t, e, s = 1, i = 0, n = !0) {
  t.pathLength = 1;
  const o = n ? Yh : qh;
  t[o.offset] = E.transform(-i);
  const r = E.transform(e), a = E.transform(s);
  t[o.array] = `${r} ${a}`;
}
function ga(t, {
  attrX: e,
  attrY: s,
  attrScale: i,
  pathLength: n,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, d) {
  if (en(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: p } = t;
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), s !== void 0 && (h.y = s), i !== void 0 && (h.scale = i), n !== void 0 && Xh(h, n, o, r, !1);
}
const ya = () => ({
  ...tn(),
  attrs: {}
}), xa = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Zh(t, e, s, i) {
  const n = Fe(() => {
    const o = ya();
    return ga(o, e, xa(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ma(o, t.style, t), n.style = { ...o, ...n.style };
  }
  return n;
}
const Jh = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function sn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Jh.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Qh(t, e, s, { latestValues: i }, n, o = !1) {
  const a = (sn(t) ? Zh : Gh)(e, i, n, t), l = Vh(e, typeof t == "string", o), u = t !== qr ? { ...l, ...a, ref: s } : {}, { children: d } = e, h = Fe(() => ae(d) ? d.get() : d, [d]);
  return sl(t, {
    ...u,
    children: h
  });
}
function nr(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((s, i) => {
    e[0][i] = s.get(), e[1][i] = s.getVelocity();
  }), e;
}
function nn(t, e, s, i) {
  if (typeof e == "function") {
    const [n, o] = nr(i);
    e = e(s !== void 0 ? s : t.custom, n, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [n, o] = nr(i);
    e = e(s !== void 0 ? s : t.custom, n, o);
  }
  return e;
}
function Ht(t) {
  return ae(t) ? t.get() : t;
}
function ep({ scrapeMotionValuesFromProps: t, createRenderState: e }, s, i, n) {
  return {
    latestValues: tp(s, i, n, t),
    renderState: e()
  };
}
function tp(t, e, s, i) {
  const n = {}, o = i(t, {});
  for (const p in o)
    n[p] = Ht(o[p]);
  let { initial: r, animate: a } = t;
  const l = cs(t), u = pa(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let d = s ? s.initial === !1 : !1;
  d = d || r === !1;
  const h = d ? a : r;
  if (h && typeof h != "boolean" && !ls(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const m = nn(t, p[f]);
      if (m) {
        const { transitionEnd: y, transition: v, ..._ } = m;
        for (const k in _) {
          let w = _[k];
          if (Array.isArray(w)) {
            const g = d ? w.length - 1 : 0;
            w = w[g];
          }
          w !== null && (n[k] = w);
        }
        for (const k in y)
          n[k] = y[k];
      }
    }
  }
  return n;
}
const va = (t) => (e, s) => {
  const i = re(as), n = re(os), o = () => ep(t, e, i, n);
  return s ? o() : Ti(o);
};
function rn(t, e, s) {
  var o;
  const { style: i } = t, n = {};
  for (const r in i)
    (ae(i[r]) || e.style && ae(e.style[r]) || fa(r, t) || ((o = s == null ? void 0 : s.getValue(r)) == null ? void 0 : o.liveStyle) !== void 0) && (n[r] = i[r]);
  return n;
}
const sp = /* @__PURE__ */ va({
  scrapeMotionValuesFromProps: rn,
  createRenderState: tn
});
function ba(t, e, s) {
  const i = rn(t, e, s);
  for (const n in t)
    if (ae(t[n]) || ae(e[n])) {
      const o = at.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      i[o] = t[n];
    }
  return i;
}
const ip = /* @__PURE__ */ va({
  scrapeMotionValuesFromProps: ba,
  createRenderState: ya
}), np = Symbol.for("motionComponentSymbol");
function Xe(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function rp(t, e, s) {
  return Ve(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), s && (typeof s == "function" ? s(i) : Xe(s) && (s.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const on = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), op = "framerAppearId", _a = "data-" + on(op), wa = We({});
function ap(t, e, s, i, n) {
  var y, v;
  const { visualElement: o } = re(as), r = re(da), a = re(os), l = re(Zi).reducedMotion, u = le(null);
  i = i || r.renderer, !u.current && i && (u.current = i(t, {
    visualState: e,
    parent: o,
    props: s,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const d = u.current, h = re(wa);
  d && !d.projection && n && (d.type === "html" || d.type === "svg") && lp(u.current, s, n, h);
  const p = le(!1);
  Yr(() => {
    d && p.current && d.update(s, a);
  });
  const f = s[_a], m = le(!!f && !((y = window.MotionHandoffIsComplete) != null && y.call(window, f)) && ((v = window.MotionHasOptimisedAnimation) == null ? void 0 : v.call(window, f)));
  return vo(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), d.scheduleRenderMicrotask(), m.current && d.animationState && d.animationState.animateChanges());
  }), oe(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var _;
      (_ = window.MotionHandoffMarkAsComplete) == null || _.call(window, f);
    }), m.current = !1), d.enteringChildren = void 0);
  }), d;
}
function lp(t, e, s, i) {
  const { layoutId: n, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: d } = e;
  t.projection = new s(t.latestValues, e["data-framer-portal-id"] ? void 0 : ka(t.parent)), t.projection.setOptions({
    layoutId: n,
    layout: o,
    alwaysMeasureLayout: !!r || a && Xe(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: d,
    layoutScroll: l,
    layoutRoot: u
  });
}
function ka(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : ka(t.parent);
}
function vs(t, { forwardMotionProps: e = !1 } = {}, s, i) {
  s && Eh(s);
  const n = sn(t) ? ip : sp;
  function o(a, l) {
    let u;
    const d = {
      ...re(Zi),
      ...a,
      layoutId: cp(a)
    }, { isStatic: h } = d, p = $h(a), f = n(a, h);
    if (!h && Ai) {
      up(d, s);
      const m = dp(d);
      u = m.MeasureLayout, p.visualElement = ap(t, f, d, i, m.ProjectionNode);
    }
    return c.jsxs(as.Provider, { value: p, children: [u && p.visualElement ? c.jsx(u, { visualElement: p.visualElement, ...d }) : null, Qh(t, a, rp(f, p.visualElement, l), f, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = il(o);
  return r[np] = t, r;
}
function cp({ layoutId: t }) {
  const e = re(Ci).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function up(t, e) {
  const s = re(da).strict;
  if (process.env.NODE_ENV !== "production" && e && s) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? rt(!1, i, "lazy-strict-mode") : Pe(!1, i, "lazy-strict-mode");
  }
}
function dp(t) {
  const { drag: e, layout: s } = st;
  if (!e && !s)
    return {};
  const i = { ...e, ...s };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || s != null && s.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function hp(t, e) {
  if (typeof Proxy > "u")
    return vs;
  const s = /* @__PURE__ */ new Map(), i = (o, r) => vs(o, r, t, e), n = (o, r) => (process.env.NODE_ENV !== "production" && Oi(!1, "motion() is deprecated. Use motion.create() instead."), i(o, r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (s.has(r) || s.set(r, vs(r, void 0, t, e)), s.get(r))
  });
}
function Pa({ top: t, left: e, right: s, bottom: i }) {
  return {
    x: { min: e, max: s },
    y: { min: t, max: i }
  };
}
function pp({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function fp(t, e) {
  if (!e)
    return t;
  const s = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: s.y,
    left: s.x,
    bottom: i.y,
    right: i.x
  };
}
function bs(t) {
  return t === void 0 || t === 1;
}
function Qs({ scale: t, scaleX: e, scaleY: s }) {
  return !bs(t) || !bs(e) || !bs(s);
}
function Oe(t) {
  return Qs(t) || Sa(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Sa(t) {
  return rr(t.x) || rr(t.y);
}
function rr(t) {
  return t && t !== "0%";
}
function ts(t, e, s) {
  const i = t - s, n = e * i;
  return s + n;
}
function or(t, e, s, i, n) {
  return n !== void 0 && (t = ts(t, n, i)), ts(t, s, i) + e;
}
function ei(t, e = 0, s = 1, i, n) {
  t.min = or(t.min, e, s, i, n), t.max = or(t.max, e, s, i, n);
}
function ja(t, { x: e, y: s }) {
  ei(t.x, e.translate, e.scale, e.originPoint), ei(t.y, s.translate, s.scale, s.originPoint);
}
const ar = 0.999999999999, lr = 1.0000000000001;
function mp(t, e, s, i = !1) {
  const n = s.length;
  if (!n)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < n; a++) {
    o = s[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && Je(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, ja(t, r)), i && Oe(o.latestValues) && Je(t, o.latestValues));
  }
  e.x < lr && e.x > ar && (e.x = 1), e.y < lr && e.y > ar && (e.y = 1);
}
function Ze(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function cr(t, e, s, i, n = 0.5) {
  const o = U(t.min, t.max, n);
  ei(t, e, s, o, i);
}
function Je(t, e) {
  cr(t.x, e.x, e.scaleX, e.scale, e.originX), cr(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ca(t, e) {
  return Pa(fp(t.getBoundingClientRect(), e));
}
function gp(t, e, s) {
  const i = Ca(t, s), { scroll: n } = e;
  return n && (Ze(i.x, n.offset.x), Ze(i.y, n.offset.y)), i;
}
const ur = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Qe = () => ({
  x: ur(),
  y: ur()
}), dr = () => ({ min: 0, max: 0 }), X = () => ({
  x: dr(),
  y: dr()
}), ti = { current: null }, Ta = { current: !1 };
function yp() {
  if (Ta.current = !0, !!Ai)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ti.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      ti.current = !1;
}
const xp = /* @__PURE__ */ new WeakMap();
function vp(t, e, s) {
  for (const i in e) {
    const n = e[i], o = s[i];
    if (ae(n))
      t.addValue(i, n);
    else if (ae(o))
      t.addValue(i, tt(n, { owner: t }));
    else if (o !== n)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(n) : r.hasAnimated || r.set(n);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, tt(r !== void 0 ? r : n, { owner: t }));
      }
  }
  for (const i in s)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const hr = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class bp {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, s, i) {
    return {};
  }
  constructor({ parent: e, props: s, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ui, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = de.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, W.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = s.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = s, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = cs(s), this.isVariantNode = pa(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && ae(f) && f.set(l[p]);
    }
  }
  mount(e) {
    var s;
    this.current = e, xp.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, n) => this.bindToMotionValue(n, i)), Ta.current || yp(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ti.current, process.env.NODE_ENV !== "production" && Oi(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (s = this.parent) == null || s.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    this.projection && this.projection.unmount(), Ae(this.notifyUpdate), Ae(this.render), this.valueSubscriptions.forEach((s) => s()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (e = this.parent) == null || e.removeChild(this);
    for (const s in this.events)
      this.events[s].clear();
    for (const s in this.features) {
      const i = this.features[s];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, s) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = lt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const n = s.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && W.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, s)), this.valueSubscriptions.set(e, () => {
      n(), o && o(), s.owner && s.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in st) {
      const s = st[e];
      if (!s)
        continue;
      const { isEnabled: i, Feature: n } = s;
      if (!this.features[e] && n && i(this.props) && (this.features[e] = new n(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, s) {
    this.latestValues[e] = s;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, s) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let i = 0; i < hr.length; i++) {
      const n = hr[i];
      this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
      const o = "on" + n, r = e[o];
      r && (this.propEventSubscriptions[n] = this.on(n, r));
    }
    this.prevMotionValues = vp(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const s = this.getClosestVariantNode();
    if (s)
      return s.variantChildren && s.variantChildren.add(e), () => s.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, s) {
    const i = this.values.get(e);
    s !== i && (i && this.removeValue(e), this.bindToMotionValue(e, s), this.values.set(e, s), this.latestValues[e] = s.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const s = this.valueSubscriptions.get(e);
    s && (s(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, s) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && s !== void 0 && (i = tt(s === null ? void 0 : s, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, s) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (bo(i) || wo(i)) ? i = parseFloat(i) : !Ah(i) && Me.test(s) && (i = ia(e, s)), this.setBaseTarget(e, ae(i) ? i.get() : i)), ae(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, s) {
    this.baseTarget[e] = s;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var o;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = nn(this.props, s, (o = this.presenceContext) == null ? void 0 : o.custom);
      r && (i = r[e]);
    }
    if (s && i !== void 0)
      return i;
    const n = this.getBaseTargetFromProps(this.props, e);
    return n !== void 0 && !ae(n) ? n : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, s) {
    return this.events[e] || (this.events[e] = new Ri()), this.events[e].add(s);
  }
  notify(e, ...s) {
    this.events[e] && this.events[e].notify(...s);
  }
  scheduleRenderMicrotask() {
    qi.render(this.render);
  }
}
class Aa extends bp {
  constructor() {
    super(...arguments), this.KeyframeResolver = yh;
  }
  sortInstanceNodePosition(e, s) {
    return e.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, s) {
    return e.style ? e.style[s] : void 0;
  }
  removeValueFromRenderState(e, { vars: s, style: i }) {
    delete s[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    ae(e) && (this.childSubscription = e.on("change", (s) => {
      this.current && (this.current.textContent = `${s}`);
    }));
  }
}
function Ma(t, { style: e, vars: s }, i, n) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  n == null || n.applyProjectionStyles(o, i);
  for (r in s)
    o.setProperty(r, s[r]);
}
function _p(t) {
  return window.getComputedStyle(t);
}
class wp extends Aa {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ma;
  }
  readValueFromInstance(e, s) {
    var i;
    if (lt.has(s))
      return (i = this.projection) != null && i.isProjecting ? Us(s) : Ed(e, s);
    {
      const n = _p(e), o = (Ni(s) ? n.getPropertyValue(s) : n[s]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: s }) {
    return Ca(e, s);
  }
  build(e, s, i) {
    en(e, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, s, i) {
    return rn(e, s, i);
  }
}
const La = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function kp(t, e, s, i) {
  Ma(t, e, void 0, i);
  for (const n in e.attrs)
    t.setAttribute(La.has(n) ? n : on(n), e.attrs[n]);
}
class Pp extends Aa {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = X;
  }
  getBaseTargetFromProps(e, s) {
    return e[s];
  }
  readValueFromInstance(e, s) {
    if (lt.has(s)) {
      const i = sa(s);
      return i && i.default || 0;
    }
    return s = La.has(s) ? s : on(s), e.getAttribute(s);
  }
  scrapeMotionValuesFromProps(e, s, i) {
    return ba(e, s, i);
  }
  build(e, s, i) {
    ga(e, s, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, s, i, n) {
    kp(e, s, i, n);
  }
  mount(e) {
    this.isSVGTag = xa(e.tagName), super.mount(e);
  }
}
const Sp = (t, e) => sn(t) ? new Pp(e) : new wp(e, {
  allowProjection: t !== qr
});
function et(t, e, s) {
  const i = t.getProps();
  return nn(i, e, s !== void 0 ? s : i.custom, t);
}
const si = (t) => Array.isArray(t);
function jp(t, e, s) {
  t.hasValue(e) ? t.getValue(e).set(s) : t.addValue(e, tt(s));
}
function Cp(t) {
  return si(t) ? t[t.length - 1] || 0 : t;
}
function Tp(t, e) {
  const s = et(t, e);
  let { transitionEnd: i = {}, transition: n = {}, ...o } = s || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = Cp(o[r]);
    jp(t, r, a);
  }
}
function Ap(t) {
  return !!(ae(t) && t.add);
}
function ii(t, e) {
  const s = t.getValue("willChange");
  if (Ap(s))
    return s.add(e);
  if (!s && Se.WillChange) {
    const i = new Se.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function za(t) {
  return t.props[_a];
}
const Mp = (t) => t !== null;
function Lp(t, { repeat: e, repeatType: s = "loop" }, i) {
  const n = t.filter(Mp), o = e && s !== "loop" && e % 2 === 1 ? 0 : n.length - 1;
  return n[o];
}
const zp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Rp = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Op = {
  type: "keyframes",
  duration: 0.8
}, Ep = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ip = (t, { keyframes: e }) => e.length > 2 ? Op : lt.has(t) ? t.startsWith("scale") ? Rp(e[1]) : zp : Ep;
function Np({ when: t, delay: e, delayChildren: s, staggerChildren: i, staggerDirection: n, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
const an = (t, e, s, i = {}, n, o) => (r) => {
  const a = Gi(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ ye(l);
  const d = {
    keyframes: Array.isArray(s) ? s : [null, s],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (p) => {
      e.set(p), a.onUpdate && a.onUpdate(p);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : n
  };
  Np(a) || Object.assign(d, Ip(t, d)), d.duration && (d.duration = /* @__PURE__ */ ye(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ ye(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let h = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Zs(d), d.delay === 0 && (h = !0)), (Se.instantAnimations || Se.skipAnimations) && (h = !0, Zs(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const p = Lp(d.keyframes, a);
    if (p !== void 0) {
      W.update(() => {
        d.onUpdate(p), d.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Hi(d) : new nh(d);
};
function Vp({ protectedKeys: t, needsAnimating: e }, s) {
  const i = t.hasOwnProperty(s) && e[s] !== !0;
  return e[s] = !1, i;
}
function Ra(t, e, { delay: s = 0, transitionOverride: i, type: n } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  i && (o = i);
  const l = [], u = n && t.animationState && t.animationState.getState()[n];
  for (const d in a) {
    const h = t.getValue(d, t.latestValues[d] ?? null), p = a[d];
    if (p === void 0 || u && Vp(u, d))
      continue;
    const f = {
      delay: s,
      ...Gi(o || {}, d)
    }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(p) && p === m && !f.velocity)
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const _ = za(t);
      if (_) {
        const k = window.MotionHandoffAnimation(_, d, W);
        k !== null && (f.startTime = k, y = !0);
      }
    }
    ii(t, d), h.start(an(d, h, p, t.shouldReduceMotion && Qo.has(d) ? { type: !1 } : f, t, y));
    const v = h.animation;
    v && l.push(v);
  }
  return r && Promise.all(l).then(() => {
    W.update(() => {
      r && Tp(t, r);
    });
  }), l;
}
function Oa(t, e, s, i = 0, n = 1) {
  const o = Array.from(t).sort((u, d) => u.sortNodePosition(d)).indexOf(e), r = t.size, a = (r - 1) * i;
  return typeof s == "function" ? s(o, r) : n === 1 ? o * i : a - o * i;
}
function ni(t, e, s = {}) {
  var l;
  const i = et(t, e, s.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: n = t.getDefaultTransition() || {} } = i || {};
  s.transitionOverride && (n = s.transitionOverride);
  const o = i ? () => Promise.all(Ra(t, i, s)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: h, staggerDirection: p } = n;
    return Dp(t, e, u, d, h, p, s);
  } : () => Promise.resolve(), { when: a } = n;
  if (a) {
    const [u, d] = a === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => d());
  } else
    return Promise.all([o(), r(s.delay)]);
}
function Dp(t, e, s = 0, i = 0, n = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(ni(l, e, {
      ...r,
      delay: s + (typeof i == "function" ? 0 : i) + Oa(t.variantChildren, l, i, n, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function $p(t, e, s = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const n = e.map((o) => ni(t, o, s));
    i = Promise.all(n);
  } else if (typeof e == "string")
    i = ni(t, e, s);
  else {
    const n = typeof e == "function" ? et(t, e, s.custom) : e;
    i = Promise.all(Ra(t, n, s));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Ea(t, e) {
  if (!Array.isArray(e))
    return !1;
  const s = e.length;
  if (s !== t.length)
    return !1;
  for (let i = 0; i < s; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const Bp = Qi.length;
function Ia(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const s = t.parent ? Ia(t.parent) || {} : {};
    return t.props.initial !== void 0 && (s.initial = t.props.initial), s;
  }
  const e = {};
  for (let s = 0; s < Bp; s++) {
    const i = Qi[s], n = t.props[i];
    (jt(n) || n === !1) && (e[i] = n);
  }
  return e;
}
const Fp = [...Ji].reverse(), Kp = Ji.length;
function Wp(t) {
  return (e) => Promise.all(e.map(({ animation: s, options: i }) => $p(t, s, i)));
}
function Hp(t) {
  let e = Wp(t), s = pr(), i = !0;
  const n = (l) => (u, d) => {
    var p;
    const h = et(t, d, l === "exit" ? (p = t.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: m, ...y } = h;
      u = { ...u, ...y, ...m };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, d = Ia(t.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, m = 1 / 0;
    for (let v = 0; v < Kp; v++) {
      const _ = Fp[v], k = s[_], w = u[_] !== void 0 ? u[_] : d[_], g = jt(w), P = _ === l ? k.isActive : null;
      P === !1 && (m = v);
      let T = w === d[_] && w !== u[_] && g;
      if (T && i && t.manuallyAnimateOnMount && (T = !1), k.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !k.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !w && !k.prevProp || // Or if the prop doesn't define an animation
      ls(w) || typeof w == "boolean")
        continue;
      const z = Up(k.prevProp, w);
      let x = z || // If we're making this variant active, we want to always make it active
      _ === l && k.isActive && !T && g || // If we removed a higher-priority variant (i is in reverse order)
      v > m && g, j = !1;
      const L = Array.isArray(w) ? w : [w];
      let V = L.reduce(n(_), {});
      P === !1 && (V = {});
      const { prevResolvedValues: N = {} } = k, q = {
        ...N,
        ...V
      }, F = (O) => {
        x = !0, p.has(O) && (j = !0, p.delete(O)), k.needsAnimating[O] = !0;
        const S = t.getValue(O);
        S && (S.liveStyle = !1);
      };
      for (const O in q) {
        const S = V[O], G = N[O];
        if (f.hasOwnProperty(O))
          continue;
        let b = !1;
        si(S) && si(G) ? b = !Ea(S, G) : b = S !== G, b ? S != null ? F(O) : p.add(O) : S !== void 0 && p.has(O) ? F(O) : k.protectedKeys[O] = !0;
      }
      k.prevProp = w, k.prevResolvedValues = V, k.isActive && (f = { ...f, ...V }), i && t.blockInitialAnimation && (x = !1);
      const se = T && z;
      x && (!se || j) && h.push(...L.map((O) => {
        const S = { type: _ };
        if (typeof O == "string" && i && !se && t.manuallyAnimateOnMount && t.parent) {
          const { parent: G } = t, b = et(G, O);
          if (G.enteringChildren && b) {
            const { delayChildren: R } = b.transition || {};
            S.delay = Oa(G.enteringChildren, t, R);
          }
        }
        return {
          animation: O,
          options: S
        };
      }));
    }
    if (p.size) {
      const v = {};
      if (typeof u.initial != "boolean") {
        const _ = et(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        _ && _.transition && (v.transition = _.transition);
      }
      p.forEach((_) => {
        const k = t.getBaseTarget(_), w = t.getValue(_);
        w && (w.liveStyle = !0), v[_] = k ?? null;
      }), h.push({ animation: v });
    }
    let y = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1), i = !1, y ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var h;
    if (s[l].isActive === u)
      return Promise.resolve();
    (h = t.variantChildren) == null || h.forEach((p) => {
      var f;
      return (f = p.animationState) == null ? void 0 : f.setActive(l, u);
    }), s[l].isActive = u;
    const d = r(l);
    for (const p in s)
      s[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => s,
    reset: () => {
      s = pr(), i = !0;
    }
  };
}
function Up(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ea(e, t) : !1;
}
function Re(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function pr() {
  return {
    animate: Re(!0),
    whileInView: Re(),
    whileHover: Re(),
    whileTap: Re(),
    whileDrag: Re(),
    whileFocus: Re(),
    exit: Re()
  };
}
class Le {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Gp extends Le {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Hp(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ls(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: s } = this.node.prevProps || {};
    e !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let Yp = 0;
class qp extends Le {
  constructor() {
    super(...arguments), this.id = Yp++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: s } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const n = this.node.animationState.setActive("exit", !e);
    s && !e && n.then(() => {
      s(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Xp = {
  animation: {
    Feature: Gp
  },
  exit: {
    Feature: qp
  }
};
function Tt(t, e, s, i = { passive: !0 }) {
  return t.addEventListener(e, s, i), () => t.removeEventListener(e, s);
}
function zt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Zp = (t) => (e) => Xi(e) && t(e, zt(e));
function xt(t, e, s, i) {
  return Tt(t, e, Zp(s), i);
}
const Na = 1e-4, Jp = 1 - Na, Qp = 1 + Na, Va = 0.01, ef = 0 - Va, tf = 0 + Va;
function ue(t) {
  return t.max - t.min;
}
function sf(t, e, s) {
  return Math.abs(t - e) <= s;
}
function fr(t, e, s, i = 0.5) {
  t.origin = i, t.originPoint = U(e.min, e.max, t.origin), t.scale = ue(s) / ue(e), t.translate = U(s.min, s.max, t.origin) - t.originPoint, (t.scale >= Jp && t.scale <= Qp || isNaN(t.scale)) && (t.scale = 1), (t.translate >= ef && t.translate <= tf || isNaN(t.translate)) && (t.translate = 0);
}
function vt(t, e, s, i) {
  fr(t.x, e.x, s.x, i ? i.originX : void 0), fr(t.y, e.y, s.y, i ? i.originY : void 0);
}
function mr(t, e, s) {
  t.min = s.min + e.min, t.max = t.min + ue(e);
}
function nf(t, e, s) {
  mr(t.x, e.x, s.x), mr(t.y, e.y, s.y);
}
function gr(t, e, s) {
  t.min = e.min - s.min, t.max = t.min + ue(e);
}
function bt(t, e, s) {
  gr(t.x, e.x, s.x), gr(t.y, e.y, s.y);
}
function pe(t) {
  return [t("x"), t("y")];
}
const Da = ({ current: t }) => t ? t.ownerDocument.defaultView : null, yr = (t, e) => Math.abs(t - e);
function rf(t, e) {
  const s = yr(t.x, e.x), i = yr(t.y, e.y);
  return Math.sqrt(s ** 2 + i ** 2);
}
class $a {
  constructor(e, s, { transformPagePoint: i, contextWindow: n = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = ws(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, m = rf(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !m)
        return;
      const { point: y } = p, { timestamp: v } = ne;
      this.history.push({ ...y, timestamp: v });
      const { onStart: _, onMove: k } = this.handlers;
      f || (_ && _(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = _s(f, this.transformPagePoint), W.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: m, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = ws(p.type === "pointercancel" ? this.lastMoveEventInfo : _s(f, this.transformPagePoint), this.history);
      this.startEvent && m && m(p, _), y && y(p, _);
    }, !Xi(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = s, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = n || window;
    const a = zt(e), l = _s(a, this.transformPagePoint), { point: u } = l, { timestamp: d } = ne;
    this.history = [{ ...u, timestamp: d }];
    const { onSessionStart: h } = s;
    h && h(e, ws(l, this.history)), this.removeListeners = At(xt(this.contextWindow, "pointermove", this.handlePointerMove), xt(this.contextWindow, "pointerup", this.handlePointerUp), xt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ae(this.updatePoint);
  }
}
function _s(t, e) {
  return e ? { point: e(t.point) } : t;
}
function xr(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ws({ point: t }, e) {
  return {
    point: t,
    delta: xr(t, Ba(e)),
    offset: xr(t, of(e)),
    velocity: af(e, 0.1)
  };
}
function of(t) {
  return t[0];
}
function Ba(t) {
  return t[t.length - 1];
}
function af(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let s = t.length - 1, i = null;
  const n = Ba(t);
  for (; s >= 0 && (i = t[s], !(n.timestamp - i.timestamp > /* @__PURE__ */ ye(e))); )
    s--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ ve(n.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (n.x - i.x) / o,
    y: (n.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function lf(t, { min: e, max: s }, i) {
  return e !== void 0 && t < e ? t = i ? U(e, t, i.min) : Math.max(t, e) : s !== void 0 && t > s && (t = i ? U(s, t, i.max) : Math.min(t, s)), t;
}
function vr(t, e, s) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: s !== void 0 ? t.max + s - (t.max - t.min) : void 0
  };
}
function cf(t, { top: e, left: s, bottom: i, right: n }) {
  return {
    x: vr(t.x, s, n),
    y: vr(t.y, e, i)
  };
}
function br(t, e) {
  let s = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([s, i] = [i, s]), { min: s, max: i };
}
function uf(t, e) {
  return {
    x: br(t.x, e.x),
    y: br(t.y, e.y)
  };
}
function df(t, e) {
  let s = 0.5;
  const i = ue(t), n = ue(e);
  return n > i ? s = /* @__PURE__ */ kt(e.min, e.max - i, t.min) : i > n && (s = /* @__PURE__ */ kt(t.min, t.max - n, e.min)), ke(0, 1, s);
}
function hf(t, e) {
  const s = {};
  return e.min !== void 0 && (s.min = e.min - t.min), e.max !== void 0 && (s.max = e.max - t.min), s;
}
const ri = 0.35;
function pf(t = ri) {
  return t === !1 ? t = 0 : t === !0 && (t = ri), {
    x: _r(t, "left", "right"),
    y: _r(t, "top", "bottom")
  };
}
function _r(t, e, s) {
  return {
    min: wr(t, e),
    max: wr(t, s)
  };
}
function wr(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ff = /* @__PURE__ */ new WeakMap();
class mf {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = X(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: s = !1, distanceThreshold: i } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(zt(h).point);
    }, r = (h, p) => {
      const { drag: f, dragPropagation: m, onDragStart: y } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = _h(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pe((_) => {
        let k = this.getAxisMotionValue(_).get() || 0;
        if (be.test(k)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const g = w.layout.layoutBox[_];
            g && (k = ue(g) * (parseFloat(k) / 100));
          }
        }
        this.originPoint[_] = k;
      }), y && W.postRender(() => y(h, p)), ii(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, a = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: _ } = p;
      if (m && this.currentDirection === null) {
        this.currentDirection = gf(_), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, _), this.updateAxis("y", p.point, _), this.visualElement.render(), v && v(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => pe((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new $a(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: i,
      contextWindow: Da(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, s) {
    const i = e || this.latestPointerEvent, n = s || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !n || !i)
      return;
    const { velocity: r } = n;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && W.postRender(() => a(i, n));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: s } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
  }
  updateAxis(e, s, i) {
    const { drag: n } = this.getProps();
    if (!i || !Ft(e, n, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = lf(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, n = this.constraints;
    e && Xe(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = cf(i.layoutBox, e) : this.constraints = !1, this.elastic = pf(s), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && pe((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = hf(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: s } = this.getProps();
    if (!e || !Xe(e))
      return !1;
    const i = e.current;
    Pe(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: n } = this.visualElement;
    if (!n || !n.layout)
      return !1;
    const o = gp(i, n.root, this.visualElement.getTransformPagePoint());
    let r = uf(n.layout.layoutBox, o);
    if (s) {
      const a = s(pp(r));
      this.hasMutatedConstraints = !!a, a && (r = Pa(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: s, dragMomentum: i, dragElastic: n, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = pe((d) => {
      if (!Ft(d, s, this.currentDirection))
        return;
      let h = l && l[d] || {};
      r && (h = { min: 0, max: 0 });
      const p = n ? 200 : 1e6, f = n ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[d] : 0,
        bounceStiffness: p,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(d, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, s) {
    const i = this.getAxisMotionValue(e);
    return ii(this.visualElement, e), i.start(an(e, i, 0, s, this.visualElement, !1));
  }
  stopAnimation() {
    pe((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    pe((e) => {
      var s;
      return (s = this.getAxisMotionValue(e).animation) == null ? void 0 : s.pause();
    });
  }
  getAnimationState(e) {
    var s;
    return (s = this.getAxisMotionValue(e).animation) == null ? void 0 : s.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const s = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), n = i[s];
    return n || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    pe((s) => {
      const { drag: i } = this.getProps();
      if (!Ft(s, i, this.currentDirection))
        return;
      const { projection: n } = this.visualElement, o = this.getAxisMotionValue(s);
      if (n && n.layout) {
        const { min: r, max: a } = n.layout.layoutBox[s];
        o.set(e[s] - U(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: s } = this.getProps(), { projection: i } = this.visualElement;
    if (!Xe(s) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const n = { x: 0, y: 0 };
    pe((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        n[r] = df({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), pe((r) => {
      if (!Ft(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(U(l, u, n[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ff.set(this.visualElement, this);
    const e = this.visualElement.current, s = xt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      Xe(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: n } = this.visualElement, o = n.addEventListener("measure", i);
    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), W.read(i);
    const r = Tt(window, "resize", () => this.scalePositionWithinConstraints()), a = n.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (pe((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += l[d].translate, h.set(h.get() + l[d].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), s(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: i = !1, dragPropagation: n = !1, dragConstraints: o = !1, dragElastic: r = ri, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: s,
      dragDirectionLock: i,
      dragPropagation: n,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Ft(t, e, s) {
  return (e === !0 || e === t) && (s === null || s === t);
}
function gf(t, e = 10) {
  let s = null;
  return Math.abs(t.y) > e ? s = "y" : Math.abs(t.x) > e && (s = "x"), s;
}
class yf extends Le {
  constructor(e) {
    super(e), this.removeGroupControls = fe, this.removeListeners = fe, this.controls = new mf(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || fe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const kr = (t) => (e, s) => {
  t && W.postRender(() => t(e, s));
};
class xf extends Le {
  constructor() {
    super(...arguments), this.removePointerDownListener = fe;
  }
  onPointerDown(e) {
    this.session = new $a(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Da(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: s, onPan: i, onPanEnd: n } = this.node.getProps();
    return {
      onSessionStart: kr(e),
      onStart: kr(s),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, n && W.postRender(() => n(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = xt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ut = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Pr(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const ft = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (E.test(t))
        t = parseFloat(t);
      else
        return t;
    const s = Pr(t, e.target.x), i = Pr(t, e.target.y);
    return `${s}% ${i}%`;
  }
}, vf = {
  correct: (t, { treeScale: e, projectionDelta: s }) => {
    const i = t, n = Me.parse(t);
    if (n.length > 5)
      return i;
    const o = Me.createTransformer(t), r = typeof n[0] != "number" ? 1 : 0, a = s.x.scale * e.x, l = s.y.scale * e.y;
    n[0 + r] /= a, n[1 + r] /= l;
    const u = U(a, l, 0.5);
    return typeof n[2 + r] == "number" && (n[2 + r] /= u), typeof n[3 + r] == "number" && (n[3 + r] /= u), o(n);
  }
};
let ks = !1;
class bf extends nl {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: s, switchLayoutGroup: i, layoutId: n } = this.props, { projection: o } = e;
    Bh(_f), o && (s.group && s.group.add(o), i && i.register && n && i.register(o), ks && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Ut.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: s, visualElement: i, drag: n, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, ks = !0, n || e.layoutDependency !== s || s === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || W.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), qi.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: s, switchLayoutGroup: i } = this.props, { projection: n } = e;
    ks = !0, n && (n.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(n), i && i.deregister && i.deregister(n));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Fa(t) {
  const [e, s] = ua(), i = re(Ci);
  return c.jsx(bf, { ...t, layoutGroup: i, switchLayoutGroup: re(wa), isPresent: e, safeToRemove: s });
}
const _f = {
  borderRadius: {
    ...ft,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ft,
  borderTopRightRadius: ft,
  borderBottomLeftRadius: ft,
  borderBottomRightRadius: ft,
  boxShadow: vf
};
function wf(t, e, s) {
  const i = ae(t) ? t : tt(t);
  return i.start(an("", i, e, s)), i.animation;
}
const kf = (t, e) => t.depth - e.depth;
class Pf {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Mi(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Li(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(kf), this.isDirty = !1, this.children.forEach(e);
  }
}
function Sf(t, e) {
  const s = de.now(), i = ({ timestamp: n }) => {
    const o = n - s;
    o >= e && (Ae(i), t(o - e));
  };
  return W.setup(i, !0), () => Ae(i);
}
const Ka = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], jf = Ka.length, Sr = (t) => typeof t == "string" ? parseFloat(t) : t, jr = (t) => typeof t == "number" || E.test(t);
function Cf(t, e, s, i, n, o) {
  n ? (t.opacity = U(0, s.opacity ?? 1, Tf(i)), t.opacityExit = U(e.opacity ?? 1, 0, Af(i))) : o && (t.opacity = U(e.opacity ?? 1, s.opacity ?? 1, i));
  for (let r = 0; r < jf; r++) {
    const a = `border${Ka[r]}Radius`;
    let l = Cr(e, a), u = Cr(s, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || jr(l) === jr(u) ? (t[a] = Math.max(U(Sr(l), Sr(u), i), 0), (be.test(u) || be.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || s.rotate) && (t.rotate = U(e.rotate || 0, s.rotate || 0, i));
}
function Cr(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Tf = /* @__PURE__ */ Wa(0, 0.5, Mo), Af = /* @__PURE__ */ Wa(0.5, 0.95, fe);
function Wa(t, e, s) {
  return (i) => i < t ? 0 : i > e ? 1 : s(/* @__PURE__ */ kt(t, e, i));
}
function Tr(t, e) {
  t.min = e.min, t.max = e.max;
}
function he(t, e) {
  Tr(t.x, e.x), Tr(t.y, e.y);
}
function Ar(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Mr(t, e, s, i, n) {
  return t -= e, t = ts(t, 1 / s, i), n !== void 0 && (t = ts(t, 1 / n, i)), t;
}
function Mf(t, e = 0, s = 1, i = 0.5, n, o = t, r = t) {
  if (be.test(e) && (e = parseFloat(e), e = U(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = U(o.min, o.max, i);
  t === o && (a -= e), t.min = Mr(t.min, e, s, a, n), t.max = Mr(t.max, e, s, a, n);
}
function Lr(t, e, [s, i, n], o, r) {
  Mf(t, e[s], e[i], e[n], e.scale, o, r);
}
const Lf = ["x", "scaleX", "originX"], zf = ["y", "scaleY", "originY"];
function zr(t, e, s, i) {
  Lr(t.x, e, Lf, s ? s.x : void 0, i ? i.x : void 0), Lr(t.y, e, zf, s ? s.y : void 0, i ? i.y : void 0);
}
function Rr(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ha(t) {
  return Rr(t.x) && Rr(t.y);
}
function Or(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Rf(t, e) {
  return Or(t.x, e.x) && Or(t.y, e.y);
}
function Er(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Ua(t, e) {
  return Er(t.x, e.x) && Er(t.y, e.y);
}
function Ir(t) {
  return ue(t.x) / ue(t.y);
}
function Nr(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Of {
  constructor() {
    this.members = [];
  }
  add(e) {
    Mi(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Li(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(e) {
    const s = this.members.findIndex((n) => e === n);
    if (s === 0)
      return !1;
    let i;
    for (let n = s; n >= 0; n--) {
      const o = this.members[n];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, s) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, s && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: n } = e.options;
      n === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: s, resumingFrom: i } = e;
      s.onExitComplete && s.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ef(t, e, s) {
  let i = "";
  const n = t.x.translate / e.x, o = t.y.translate / e.y, r = (s == null ? void 0 : s.z) || 0;
  if ((n || o || r) && (i = `translate3d(${n}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), s) {
    const { transformPerspective: u, rotate: d, rotateX: h, rotateY: p, skewX: f, skewY: m } = s;
    u && (i = `perspective(${u}px) ${i}`), d && (i += `rotate(${d}deg) `), h && (i += `rotateX(${h}deg) `), p && (i += `rotateY(${p}deg) `), f && (i += `skewX(${f}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Ps = ["", "X", "Y", "Z"], If = 1e3;
let Nf = 0;
function Ss(t, e, s, i) {
  const { latestValues: n } = e;
  n[t] && (s[t] = n[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Ga(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const s = za(e);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: n, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(s, "transform", W, !(n || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Ga(i);
}
function Ya({ attachResizeListener: t, defaultParent: e, measureScroll: s, checkIsScrollRoot: i, resetTransform: n }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Nf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach($f), this.nodes.forEach(Wf), this.nodes.forEach(Hf), this.nodes.forEach(Bf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Pf());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Ri()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = ca(r) && !Ch(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let d, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        W.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, d && d(), d = Sf(p, 250), Ut.hasAnimatedSinceResize && (Ut.hasAnimatedSinceResize = !1, this.nodes.forEach($r)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || Xf, { onLayoutAnimationStart: y, onLayoutAnimationComplete: v } = u.getProps(), _ = !this.targetLayout || !Ua(this.targetLayout, f), k = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || k || h && (_ || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...Gi(m, "layout"),
            onPlay: y,
            onComplete: v
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(d, k);
        } else
          h || $r(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ae(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Uf), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ga(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vr);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Dr);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Kf), this.nodes.forEach(Vf), this.nodes.forEach(Df)) : this.nodes.forEach(Dr), this.clearAllSnapshots();
      const a = de.now();
      ne.delta = ke(0, 1e3 / 60, a - ne.timestamp), ne.timestamp = a, ne.isProcessing = !0, ps.update.process(ne), ps.preRender.process(ne), ps.render.process(ne), ne.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ff), this.sharedNodes.forEach(Gf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ue(this.snapshot.measuredBox.x) && !ue(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = X(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!n)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ha(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || Oe(this.latestValues) || d) && (n(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Zf(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: r } = this.options;
      if (!r)
        return X();
      const a = r.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Jf))) {
        const { scroll: d } = this.root;
        d && (Ze(a.x, d.offset.x), Ze(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = X();
      if (he(a, r), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: h, options: p } = d;
        d !== this.root && h && p.layoutScroll && (h.wasRoot && he(a, r), Ze(a.x, h.offset.x), Ze(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = X();
      he(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && Je(l, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), Oe(d.latestValues) && Je(l, d.latestValues);
      }
      return Oe(this.latestValues) && Je(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = X();
      he(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Oe(u.latestValues))
          continue;
        Qs(u.latestValues) && u.updateSnapshot();
        const d = X(), h = u.measurePageBox();
        he(d, h), zr(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Oe(this.latestValues) && zr(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var p;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = ne.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), bt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), he(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = X(), this.targetWithTransforms = X()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nf(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : he(this.target, this.layout.layoutBox), ja(this.target, this.targetDelta)) : he(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), bt(this.relativeTargetOrigin, this.target, f.target), he(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Qs(this.parent.latestValues) || Sa(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var m;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ne.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      he(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      mp(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = X());
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ar(this.prevProjectionDelta.x, this.projectionDelta.x), Ar(this.prevProjectionDelta.y, this.projectionDelta.y)), vt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !Nr(this.projectionDelta.x, this.prevProjectionDelta.x) || !Nr(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Qe(), this.projectionDelta = Qe(), this.projectionDeltaWithTransform = Qe();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, d = { ...this.latestValues }, h = Qe();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = X(), f = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, y = f !== m, v = this.getStack(), _ = !v || v.members.length <= 1, k = !!(y && !_ && this.options.crossfade === !0 && !this.path.some(qf));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (g) => {
        const P = g / 1e3;
        Br(h.x, r.x, P), Br(h.y, r.y, P), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bt(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Yf(this.relativeTarget, this.relativeTargetOrigin, p, P), w && Rf(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = X()), he(w, this.relativeTarget)), y && (this.animationValues = d, Cf(d, u, this.latestValues, P, k, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (Ae(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = W.update(() => {
        Ut.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = tt(0)), this.currentAnimation = wf(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), r.onUpdate && r.onUpdate(d);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(If), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: d } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && qa(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || X();
          const h = ue(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const p = ue(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + p;
        }
        he(a, l), Je(a, d), vt(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Of()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Ss("z", r, u, this.animationValues);
      for (let d = 0; d < Ps.length; d++)
        Ss(`rotate${Ps[d]}`, r, u, this.animationValues), Ss(`skew${Ps[d]}`, r, u, this.animationValues);
      r.render();
      for (const d in u)
        r.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Oe(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const d = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Ef(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (h = l(d, h)), r.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      r.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : r.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const m in Ct) {
        if (d[m] === void 0)
          continue;
        const { correct: y, applyTo: v, isCSSVariable: _ } = Ct[m], k = h === "none" ? d[m] : y(d[m], u);
        if (v) {
          const w = v.length;
          for (let g = 0; g < w; g++)
            r[v[g]] = k;
        } else
          _ ? this.options.visualElement.renderState.vars[m] = k : r[m] = k;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Ht(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Vr), this.root.sharedNodes.clear();
    }
  };
}
function Vf(t) {
  t.updateLayout();
}
function Df(t) {
  var s;
  const e = ((s = t.resumeFrom) == null ? void 0 : s.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: n } = t.layout, { animationType: o } = t.options, r = e.source !== t.layout.source;
    o === "size" ? pe((h) => {
      const p = r ? e.measuredBox[h] : e.layoutBox[h], f = ue(p);
      p.min = i[h].min, p.max = p.min + f;
    }) : qa(o, e.layoutBox, i) && pe((h) => {
      const p = r ? e.measuredBox[h] : e.layoutBox[h], f = ue(i[h]);
      p.max = p.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + f);
    });
    const a = Qe();
    vt(a, i, e.layoutBox);
    const l = Qe();
    r ? vt(l, t.applyTransform(n, !0), e.measuredBox) : vt(l, i, e.layoutBox);
    const u = !Ha(a);
    let d = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const m = X();
          bt(m, e.layoutBox, p.layoutBox);
          const y = X();
          bt(y, i, f.layoutBox), Ua(m, y) || (d = !0), h.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = m, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: d
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function $f(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Bf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Ff(t) {
  t.clearSnapshot();
}
function Vr(t) {
  t.clearMeasurements();
}
function Dr(t) {
  t.isLayoutDirty = !1;
}
function Kf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function $r(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Wf(t) {
  t.resolveTargetDelta();
}
function Hf(t) {
  t.calcProjection();
}
function Uf(t) {
  t.resetSkewAndRotation();
}
function Gf(t) {
  t.removeLeadSnapshot();
}
function Br(t, e, s) {
  t.translate = U(e.translate, 0, s), t.scale = U(e.scale, 1, s), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Fr(t, e, s, i) {
  t.min = U(e.min, s.min, i), t.max = U(e.max, s.max, i);
}
function Yf(t, e, s, i) {
  Fr(t.x, e.x, s.x, i), Fr(t.y, e.y, s.y, i);
}
function qf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Xf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Kr = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Wr = Kr("applewebkit/") && !Kr("chrome/") ? Math.round : fe;
function Hr(t) {
  t.min = Wr(t.min), t.max = Wr(t.max);
}
function Zf(t) {
  Hr(t.x), Hr(t.y);
}
function qa(t, e, s) {
  return t === "position" || t === "preserve-aspect" && !sf(Ir(e), Ir(s), 0.2);
}
function Jf(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const Qf = Ya({
  attachResizeListener: (t, e) => Tt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), js = {
  current: void 0
}, Xa = Ya({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!js.current) {
      const t = new Qf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), js.current = t;
    }
    return js.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), em = {
  pan: {
    Feature: xf
  },
  drag: {
    Feature: yf,
    ProjectionNode: Xa,
    MeasureLayout: Fa
  }
};
function Ur(t, e, s) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", s === "Start");
  const n = "onHover" + s, o = i[n];
  o && W.postRender(() => o(e, zt(e)));
}
class tm extends Le {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = wh(e, (s, i) => (Ur(this.node, i, "Start"), (n) => Ur(this.node, n, "End"))));
  }
  unmount() {
  }
}
class sm extends Le {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = At(Tt(this.node.current, "focus", () => this.onFocus()), Tt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Gr(t, e, s) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", s === "Start");
  const n = "onTap" + (s === "End" ? "" : s), o = i[n];
  o && W.postRender(() => o(e, zt(e)));
}
class im extends Le {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = jh(e, (s, i) => (Gr(this.node, i, "Start"), (n, { success: o }) => Gr(this.node, n, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const oi = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), nm = (t) => {
  const e = oi.get(t.target);
  e && e(t);
}, rm = (t) => {
  t.forEach(nm);
};
function om({ root: t, ...e }) {
  const s = t || document;
  Cs.has(s) || Cs.set(s, {});
  const i = Cs.get(s), n = JSON.stringify(e);
  return i[n] || (i[n] = new IntersectionObserver(rm, { root: t, ...e })), i[n];
}
function am(t, e, s) {
  const i = om(e);
  return oi.set(t, s), i.observe(t), () => {
    oi.delete(t), i.unobserve(t);
  };
}
const lm = {
  some: 0,
  all: 1
};
class cm extends Le {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: s, margin: i, amount: n = "some", once: o } = e, r = {
      root: s ? s.current : void 0,
      rootMargin: i,
      threshold: typeof n == "number" ? n : lm[n]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: h } = this.node.getProps(), p = u ? d : h;
      p && p(l);
    };
    return am(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(um(e, s)) && this.startObserver();
  }
  unmount() {
  }
}
function um({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (s) => t[s] !== e[s];
}
const dm = {
  inView: {
    Feature: cm
  },
  tap: {
    Feature: im
  },
  focus: {
    Feature: sm
  },
  hover: {
    Feature: tm
  }
}, hm = {
  layout: {
    ProjectionNode: Xa,
    MeasureLayout: Fa
  }
}, pm = {
  ...Xp,
  ...dm,
  ...em,
  ...hm
}, Ts = /* @__PURE__ */ hp(pm, Sp);
function Za(t) {
  const { currentLang: e = "en", debounceMs: s = 300, minQueryLength: i = 2, blogUrl: n, webUrl: o } = t, [r, a] = te(""), [l, u] = te([]), [d, h] = te(!1), [p, f] = te(!1), m = le(null);
  oe(() => {
    if (m.current && clearTimeout(m.current), r.trim().length < i) {
      u([]), f(!1);
      return;
    }
    return m.current = setTimeout(async () => {
      await y(r.trim());
    }, s), () => {
      m.current && clearTimeout(m.current);
    };
  }, [r, e, s, i]);
  const y = async (w) => {
    h(!0);
    try {
      const g = [], [P, T] = await Promise.allSettled([
        fetch(`${o}/api/${e}/pages.json?t=${Date.now()}`).then((x) => x.json()),
        fetch(`${n}/api/${e}/pages.json?t=${Date.now()}`).then((x) => x.json())
      ]);
      if (P.status === "fulfilled") {
        const x = v(P.value.pages || [], w);
        g.push(...x.map((j) => ({ ...j, lang: e, path: `${o}/${j.path}`, type: "page" })));
      }
      if (T.status === "fulfilled") {
        const x = v(T.value.pages || [], w);
        g.push(...x.map((j) => ({ ...j, lang: e, path: `${n}/${j.path}`, type: "blog" })));
      }
      if (g.length < 3 && e !== "en") {
        const [x, j] = await Promise.allSettled([
          fetch(`${o}/api/en/pages.json?t=${Date.now()}`).then((L) => L.json()),
          fetch(`${n}/api/en/pages.json?t=${Date.now()}`).then((L) => L.json())
        ]);
        if (x.status === "fulfilled") {
          const L = v(x.value.pages || [], w);
          g.push(...L.map((V) => ({ ...V, lang: "en", path: `${o}/${V.path}`, type: "page" })));
        }
        if (j.status === "fulfilled") {
          const L = v(j.value.pages || [], w);
          g.push(...L.map((V) => ({ ...V, lang: "en", path: `${n}/${V.path}`, type: "blog" })));
        }
      }
      const z = g.filter((x, j, L) => j === L.findIndex((V) => V.path === x.path)).slice(0, 8);
      u(z), f(z.length > 0);
    } catch (g) {
      console.error("Search error:", g), u([]), f(!1);
    } finally {
      h(!1);
    }
  }, v = (w, g) => {
    const P = g.toLowerCase();
    return w.filter((T) => {
      var L;
      const z = T.title.toLowerCase().includes(P), x = T.description.toLowerCase().includes(P), j = (L = T.keywords) == null ? void 0 : L.some((V) => V.toLowerCase().includes(P));
      return z || x || j;
    });
  };
  return {
    query: r,
    setQuery: a,
    results: l,
    isLoading: d,
    isOpen: p,
    setIsOpen: f,
    clearSearch: () => {
      a(""), u([]), f(!1);
    },
    handleResultClick: (w) => {
      window.location.href = `${w.path}`, f(!1);
    }
  };
}
function fm({ currentLang: t = "en", className: e, blogUrl: s, webUrl: i, onExpanded: n }) {
  const [o, r] = te(!1), a = le(null), l = le(null), { t: u } = is(), {
    query: d,
    setQuery: h,
    results: p,
    isLoading: f,
    isOpen: m,
    setIsOpen: y,
    clearSearch: v,
    handleResultClick: _
  } = Za({ currentLang: t, blogUrl: s, webUrl: i });
  oe(() => {
    function g(P) {
      a.current && !a.current.contains(P.target) && (y(!1), d.trim() || (n && n(!1), r(!1)));
    }
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [d]), oe(() => {
    o && l.current && l.current.focus();
  }, [o]);
  const k = () => {
    h(""), y(!1), n && n(!1), v(), r(!1);
  }, w = () => {
    n && n(!0), r(!0);
  };
  return /* @__PURE__ */ c.jsxs("div", { ref: a, className: Ke("relative", e), children: [
    /* @__PURE__ */ c.jsxs("div", { className: Ke("relative", o ? "w-full" : "w-[24px]"), children: [
      /* @__PURE__ */ c.jsx(
        Ts.div,
        {
          animate: {
            opacity: o ? 0 : 1,
            scale: o ? 0 : 1,
            pointerEvents: o ? "none" : "auto",
            transition: { delay: o ? 0 : 0.5 }
          },
          initial: { opacity: 0, x: 0 },
          className: "absolute inset-0 ",
          children: /* @__PURE__ */ c.jsxs(
            we,
            {
              variant: "ghost",
              size: "icon",
              onClick: w,
              className: "h-9 w-9 hover:bg-accent hover:text-[#8220ff] text-white transition-colors",
              children: [
                /* @__PURE__ */ c.jsx(Ms, { className: "h-4 w-4" }),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Search" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(
        Ts.div,
        {
          animate: {
            scaleX: o ? 1 : 0,
            opacity: o ? 1 : 0,
            pointerEvents: o ? "auto" : "none",
            transition: { delay: o ? 0.5 : 0 }
          },
          initial: { opacity: 0, x: 0 },
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: o ? 0.5 : 0,
            scaleX: { duration: 0.25 },
            opacity: { duration: 0.2 }
          },
          className: "origin-right",
          children: [
            /* @__PURE__ */ c.jsx(Ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" }),
            /* @__PURE__ */ c.jsx(
              xo,
              {
                ref: l,
                type: "text",
                placeholder: u("search.placeholder"),
                value: d,
                onChange: (g) => h(g.target.value),
                className: "w-64 pl-10 pr-10 border-2 focus:border-[#8220ff] text-white focus:ring-[#8220ff]/20 transition-all duration-200"
              }
            ),
            /* @__PURE__ */ c.jsx(
              we,
              {
                variant: "ghost",
                size: "sm",
                onClick: k,
                className: "absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 text-white",
                children: /* @__PURE__ */ c.jsx(Xr, { className: "h-3 w-3" })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(Oh, { children: /* @__PURE__ */ c.jsx(
      Ts.div,
      {
        initial: { opacity: 0, y: -10, scaleY: 0.8 },
        animate: {
          opacity: m && o ? 1 : 0,
          y: m && o ? 0 : 1,
          scaleY: m && o ? 1 : 0
        },
        exit: { opacity: 0, y: -10, scaleY: 0.8 },
        className: "absolute top-full w-[200%] max-w-[90vw] right-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border bg-popover shadow-lg origin-top",
        style: { pointerEvents: m && o ? "auto" : "none" },
        children: f ? /* @__PURE__ */ c.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: u("search.searching") }) : p.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "p-2 w-full", children: /* @__PURE__ */ c.jsx(Ja, { results: p, onClick: _ }) }) : /* @__PURE__ */ c.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: u("search.not_found") })
      }
    ) })
  ] });
}
function mm({ currentLang: t = "en", onClose: e, blogUrl: s, webUrl: i }) {
  const n = le(null), { query: o, setQuery: r, results: a, isLoading: l, clearSearch: u, handleResultClick: d } = Za({ currentLang: t, blogUrl: s, webUrl: i }), { t: h } = is(), p = () => {
    u(), e();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "z-50 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ c.jsxs("div", { className: " z-50 h-full bg-background ", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ c.jsx(Ms, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ c.jsx(
          xo,
          {
            ref: n,
            type: "text",
            placeholder: h("search.placeholder"),
            value: o,
            onChange: (f) => r(f.target.value),
            className: "pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
          }
        )
      ] }),
      a.length > 0 && /* @__PURE__ */ c.jsx(we, { variant: "ghost", size: "icon", onClick: p, children: /* @__PURE__ */ c.jsx(Xr, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "p-4 max-h-[calc(100vh-80px)] overflow-y-auto", children: l ? /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: h("search.searching") }) : a.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ c.jsx(Ja, { results: a, onClick: d }) }) : o.trim().length >= 2 ? /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: h("search.not_found") }) : /* @__PURE__ */ c.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: h("search.start_typing") }) })
  ] }) });
}
function Ja({ results: t, onClick: e }) {
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: t.map((s, i) => /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => e(s),
      className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group",
      children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ c.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: s.title }),
          /* @__PURE__ */ c.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: s.description }),
          s.keywords && s.keywords.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: s.keywords.slice(0, 3).map((n, o) => /* @__PURE__ */ c.jsx(
            "span",
            {
              className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
              children: n
            },
            o
          )) })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
          s.lang && /* @__PURE__ */ c.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: s.lang }),
          s.type && /* @__PURE__ */ c.jsx("span", { className: Ke("text-xs rounded-sm p-1 uppercase font-mono", s.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: s.type })
        ] })
      ] })
    },
    `${s.path}-${i}`
  )) });
}
const Bm = ({
  lang: t,
  fullSiteUrl: e = "http://localhost:8000",
  fullBlogUrl: s = "http://localhost:9000"
}) => {
  const [i, n] = te("/"), [o, r] = te(!1), [a, l] = te(null), [u, d] = te(!1), [h, p] = te([]), f = le(null), m = (C) => {
    p((O) => O.includes(C) ? O.filter((S) => S !== C) : [C]);
  }, [y, v] = te(!1), [_, k] = te(!1), w = Ru("(max-width: 1279px)"), { t: g, i18n: P } = is();
  oe(() => {
    v(!0);
  }, []), oe(() => {
    P.changeLanguage(t), n(t !== "en" ? `/${t}/` : "/");
  }, []);
  const [T, z] = te(!1);
  oe(() => {
    const C = () => {
      const O = window.scrollY;
      z(O > 50);
    };
    return window.addEventListener("scroll", C), C(), () => {
      window.removeEventListener("scroll", C);
    };
  }, []);
  const x = Ve((C) => {
    f.current && (clearTimeout(f.current), f.current = null), l(C);
  }, []), j = le([]), L = Ve(() => {
    const C = setTimeout(() => {
      l(null);
    }, 150);
    f.current = C, j.current.push(C);
  }, []);
  oe(() => () => {
    f.current && clearTimeout(f.current), j.current.forEach(clearTimeout), j.current = [];
  }, []);
  const V = Ve(
    (C) => {
      l(a === C ? null : C);
    },
    [a]
  ), N = Gt(e, go), q = Gt(s, yo), F = {
    products: {
      title: g("nav.product.title"),
      shortTitle: g("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: g("nav.product.platform_overview"),
          description: g("nav.product.platform_overview_desc"),
          href: `${N}${i}products/cnapp-platform`,
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
          title: g("nav.product.benefits"),
          description: g("nav.product.benefits_desc"),
          href: `${N}${i}products/benefits`,
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
          title: g("nav.product.use_cases"),
          description: g("nav.product.use_cases_desc"),
          href: `${N}${i}products/use-cases`,
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
          title: g("nav.product.aspm"),
          description: g("nav.product.aspm_desc"),
          href: `${N}${i}products/aspm`,
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
          title: g("nav.product.cspm"),
          description: g("nav.product.cspm_desc"),
          href: `${N}${i}products/cspm`,
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
          title: g("nav.product.container_security"),
          description: g("nav.product.container_security_desc"),
          href: `${N}${i}products/container`,
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
          title: g("nav.product.cwpp"),
          description: g("nav.product.cwpp_desc"),
          href: `${N}${i}products/cwpp`,
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
          title: g("nav.product.ciem"),
          description: g("nav.product.ciem_desc"),
          href: `${N}${i}products/ciem`,
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
      title: g("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: g("nav.solutions.fintech"),
          description: g("nav.solutions.fintech_desc"),
          href: `${N}${i}solutions/fintech`,
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
          title: g("nav.solutions.healthtech"),
          description: g("nav.solutions.healthtech_desc"),
          href: `${N}${i}solutions/healthtech`,
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
          title: g("nav.solutions.hrtech"),
          description: g("nav.solutions.hrtech_desc"),
          href: `${N}${i}solutions/hrtech`,
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
          title: g("nav.solutions.group_companies"),
          description: g("nav.solutions.group_companies_desc"),
          href: `${N}${i}solutions/group-companies`,
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
          title: g("nav.solutions.agencies"),
          description: g("nav.solutions.agencies_desc"),
          href: `${N}${i}solutions/agencies`,
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
          title: g("nav.solutions.startups"),
          description: g("nav.solutions.startups_desc"),
          href: `${N}${i}solutions/startups`,
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
          title: g("nav.solutions.enterprise"),
          description: g("nav.solutions.enterprise_desc"),
          href: `${N}${i}solutions/enterprise`,
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
          title: g("nav.solutions.mobile_apps"),
          description: g("nav.solutions.mobile_apps_desc"),
          href: `${N}${i}solutions/mobile-apps`,
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
          title: g("nav.solutions.manufacturing"),
          description: g("nav.solutions.manufacturing_desc"),
          href: `${N}${i}solutions/manufacturing`,
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
          title: g("nav.solutions.government"),
          description: g("nav.solutions.government_desc"),
          href: `${N}${i}solutions/government`,
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
          title: g("nav.solutions.retailtech"),
          description: g("nav.solutions.retailtech_desc"),
          href: `${N}${i}solutions/retailtech`,
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
          title: g("nav.solutions.legaltech"),
          description: g("nav.solutions.legal_desc"),
          href: `${N}${i}solutions/legaltech`,
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
      title: g("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: g("nav.developers.documentation"),
          description: g("nav.developers.documentation_desc"),
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
          title: g("nav.developers.api_references"),
          description: g("nav.developers.api_references_desc"),
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
          title: g("nav.developers.github_apps"),
          description: g("nav.developers.github_apps_desc"),
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
          title: g("nav.developers.plexalyzer_action"),
          description: g("nav.developers.plexalyzer_action_desc"),
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
      title: g("nav.resources.title"),
      shortTitle: g("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: g("nav.resources.blog"),
          description: g("nav.resources.blog_desc"),
          href: `${q}${i}`,
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
          title: g("nav.resources.youtube_channel"),
          description: g("nav.resources.youtube_channel_desc"),
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
          title: g("nav.resources.branding_assets"),
          description: g("nav.resources.branding_assets_desc"),
          href: `${N}${i}branding-assets`,
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
          title: g("nav.resources.changelogs"),
          description: g("nav.resources.changelogs_desc"),
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
          title: g("nav.resources.feature_requests"),
          description: g("nav.resources.feature_requests_desc"),
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
          title: g("nav.resources.integrations"),
          description: g("nav.resources.integrations_desc"),
          href: `${N}${i}integrations`,
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
          title: g("nav.resources.comparison_overview"),
          description: g("nav.resources.comparison_overview_desc"),
          href: `${N}${i}comparison/overview`,
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
          title: g("nav.resources.support"),
          description: g("nav.resources.support_desc"),
          href: `${N}${i}support`,
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
  }, se = (C) => {
    d(C);
  };
  return /* @__PURE__ */ c.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: T ? "#8220ff" : "transparent",
        boxShadow: T ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ c.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ c.jsx(
            ie,
            {
              href: `${N}${i}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ c.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ c.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: Ke("object-contain max-h-full max-w-none w-28", T ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ c.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(F).filter(([C]) => C === "products").map(([C, O]) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => x(C),
                onMouseLeave: L,
                children: /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": a === C,
                    "aria-haspopup": "true",
                    onClick: () => V(C),
                    children: [
                      /* @__PURE__ */ c.jsx("span", { className: "hidden xl:inline", children: O.title }),
                      /* @__PURE__ */ c.jsx("span", { className: "xl:hidden", children: O.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${a === C ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              C
            )),
            /* @__PURE__ */ c.jsx(
              ie,
              {
                href: `${N}${i}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: g("nav.pricing")
              }
            ),
            Object.entries(F).filter(([C]) => C === "solutions" || C === "developers" || C === "resources").map(([C, O]) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => x(C),
                onMouseLeave: L,
                children: /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": a === C,
                    "aria-haspopup": "true",
                    onClick: () => V(C),
                    children: [
                      /* @__PURE__ */ c.jsx("span", { className: "hidden xl:inline", children: O.title }),
                      /* @__PURE__ */ c.jsx("span", { className: "xl:hidden", children: O.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${a === C ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              C
            )),
            /* @__PURE__ */ c.jsx(
              ie,
              {
                href: `${N}${i}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: g("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-end items-center justify-center max-w-[100px] ml-4", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "hidden xl:flex  items-center gap-4", children: [
              /* @__PURE__ */ c.jsx(fm, { webUrl: N, blogUrl: q, currentLang: t, onExpanded: se }),
              /* @__PURE__ */ c.jsxs("div", { className: Ke("flex items-center gap-4 transition-all transition-discrete delay-0", u ? "hidden" : ""), children: [
                /* @__PURE__ */ c.jsx(
                  ie,
                  {
                    href: `${Vt}/login`,
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                    children: g("nav.login")
                  }
                ),
                /* @__PURE__ */ c.jsx(ie, { href: `${Vt}/register`, children: /* @__PURE__ */ c.jsx(we, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: g("nav.get_started") }) })
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => r(!o),
                "aria-label": o ? "Close menu" : "Open menu",
                "aria-expanded": o,
                children: o ? /* @__PURE__ */ c.jsxs(
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
              onClick: () => l(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => x(a),
              onMouseLeave: L,
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
                    /* @__PURE__ */ c.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: F[a].title }),
                    /* @__PURE__ */ c.jsx("p", { className: "text-gray-700", children: g(a === "products" ? "nav.product.explore" : a === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ c.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: F[a].items.filter((C) => a !== "resources" || !C.title.startsWith("vs ")).map((C, O) => /* @__PURE__ */ c.jsxs(
                  ie,
                  {
                    href: C.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => l(null),
                    children: [
                      /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: As.cloneElement(C.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ c.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ c.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: C.title }),
                        /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-600 mt-1", children: C.description })
                      ] })
                    ]
                  },
                  O
                )) }) })
              ] }) })
            }
          )
        ] }),
        y && w && o && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => r(!1) }),
        y && w && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300  delay-500 ease-in-out ${o ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ c.jsxs("div", { className: "overflow-y-auto h-full p-4 pb-20", children: [
              /* @__PURE__ */ c.jsx(
                mm,
                {
                  currentLang: t,
                  webUrl: N,
                  blogUrl: q,
                  isOpen: _,
                  onClose: () => k(!1)
                }
              ),
              /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
                Object.entries(F).map(([C, O]) => {
                  const S = h.includes(C);
                  return /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 bg-[#8220ff]/10 px-2 rounded-md", children: [
                    /* @__PURE__ */ c.jsxs(
                      "button",
                      {
                        onClick: () => m(C),
                        className: "flex items-center justify-between w-full py-2",
                        children: [
                          /* @__PURE__ */ c.jsx("h3", { className: "font-semibold", children: O.title }),
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
                              className: `transition-transform duration-200 ${S ? "transform rotate-180" : ""}`,
                              children: /* @__PURE__ */ c.jsx("path", { d: "m6 9 6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    S && /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 gap-2 py-2", children: O.items.map((G, b) => /* @__PURE__ */ c.jsxs(
                      ie,
                      {
                        href: G.href,
                        className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                        onClick: () => r(!1),
                        children: [
                          /* @__PURE__ */ c.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: As.cloneElement(G.icon, { width: 16, height: 16 }) }),
                          /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: G.title })
                        ]
                      },
                      b
                    )) })
                  ] }, C);
                }),
                /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ c.jsx(ie, { href: `${Vt}/register`, className: "flex items-center justify-center", children: /* @__PURE__ */ c.jsx(we, { className: "text-white w-full bg-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: g("nav.get_started") }) }),
                  /* @__PURE__ */ c.jsx(
                    ie,
                    {
                      href: `${Vt}/login`,
                      className: "text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center",
                      children: /* @__PURE__ */ c.jsx(we, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: g("nav.login") })
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    ie,
                    {
                      href: `${N}${i}pricing`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => r(!1),
                      children: /* @__PURE__ */ c.jsx(we, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: g("nav.pricing") })
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    ie,
                    {
                      href: `${N}${i}contact`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => r(!1),
                      children: /* @__PURE__ */ c.jsx(we, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: g("nav.contact") })
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
}, gm = "English", ym = "German", xm = "French", vm = "Japanese", bm = "Italian", _m = "Dutch", wm = "Swedish", km = "Spanish", Pm = "Norwegian", Sm = "Danish", jm = "Finnish", Cm = "Portuguese", Tm = "Chinese (Simplified)", Am = "Arabic", Mm = "Hebrew", Lm = "Turkish", zm = "Polish", Rm = "Czech", Om = "Indonesian", Em = {
  en: gm,
  de: ym,
  fr: xm,
  ja: vm,
  it: bm,
  nl: _m,
  sv: wm,
  es: km,
  no: Pm,
  da: Sm,
  fi: jm,
  pt: Cm,
  zh: Tm,
  ar: Am,
  he: Mm,
  tr: Lm,
  pl: zm,
  cs: Rm,
  id: Om
};
function Im() {
  var s;
  const t = (i) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const n = window.location.pathname;
    let r = n.match(/^\/([a-z]{2})\//) ? n.replace(/^\/[a-z]{2}\//, `/${i}/`) : `/${i}${n}`;
    r = r.startsWith("/en/") ? r.replace(/^\/en/, "") : r, window.location.href = r;
  };
  oe(() => {
    const i = localStorage.getItem("scrollPosition");
    i && (window.scrollTo(0, parseInt(i)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((s = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : s[1]) || "en";
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ c.jsx(rl, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (i) => t(i.target.value),
        children: Object.entries(Em).map(([i, n]) => /* @__PURE__ */ c.jsx("option", { value: i, children: n }, i))
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
function Fm({ lang: t, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: s = "http://localhost:9000", showLanguageSelector: i = !0 }) {
  const [n, o] = te("/"), { t: r, i18n: a } = is();
  oe(() => {
    a.changeLanguage(t), o(t !== "en" ? `/${t}/` : "/");
  }, []);
  const l = Gt(e, go), u = Gt(s, yo), d = [
    {
      alt: r("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ c.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ c.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: r("footer.social_media.linkedin"),
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
      alt: r("footer.social_media.github"),
      link: "https://github.com/apps/plexicus",
      icon: /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: r("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ c.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], h = [
    {
      title: r("footer.sections.products.title"),
      items: [
        {
          link: `${l}${n}products/cnapp-platform`,
          text: r("footer.sections.products.links.platform_overview")
        },
        {
          link: `${l}${n}products/benefits`,
          text: r("footer.sections.products.links.benefits")
        },
        {
          link: `${l}${n}products/use-cases`,
          text: r("footer.sections.products.links.use_cases")
        },
        {
          link: `${l}${n}products/aspm`,
          text: r("footer.sections.products.links.aspm")
        },
        {
          link: `${l}${n}products/cspm`,
          text: r("footer.sections.products.links.cspm")
        },
        {
          link: `${l}${n}products/container`,
          text: r("footer.sections.products.links.container_security")
        },
        {
          link: `${l}${n}products/cwpp`,
          text: r("footer.sections.products.links.cwpp")
        },
        {
          link: `${l}${n}products/ciem`,
          text: r("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: r("footer.sections.resources.title"),
      items: [
        {
          link: `${u}${n}`,
          text: r("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: r("footer.sections.resources.links.documentation")
        },
        {
          text: r("nav.resources.branding_assets"),
          link: `${l}${n}branding-assets`
        },
        {
          text: r("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog"
        },
        {
          text: r("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus"
        },
        {
          text: r("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests"
        },
        {
          text: r("nav.resources.integrations"),
          link: `${l}${n}integrations`
        },
        {
          text: r("nav.resources.comparison_overview"),
          link: `${l}${n}comparison/overview`
        }
      ]
    },
    {
      title: r("footer.sections.company.title"),
      items: [
        {
          link: `${l}${n}contact`,
          text: r("footer.sections.company.links.contact")
        },
        {
          link: `${l}${n}privacy`,
          text: r("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${l}${n}pricing`,
          text: r("footer.sections.products.links.pricing")
        },
        {
          link: `${l}${n}support`,
          text: r("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ c.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ c.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ c.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ c.jsx(ie, { href: `${l}${n}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ c.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: r("footer.tagline") }),
        /* @__PURE__ */ c.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: d.map(({ link: p, icon: f, alt: m }) => /* @__PURE__ */ c.jsxs(ie, { target: "_blank", href: p, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: m }),
          f
        ] }, p)) }),
        i && /* @__PURE__ */ c.jsx("div", { className: "mt-6", children: /* @__PURE__ */ c.jsx(Im, {}) })
      ] }),
      h.map(({ title: p, items: f }) => /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: p }),
        /* @__PURE__ */ c.jsx("ul", { className: "space-y-2", children: f.map(({ link: m, text: y }) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx(ie, { href: m, className: "text-gray-600 hover:text-purple-700", children: y }) }, y)) })
      ] }, p))
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ c.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ c.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx(ie, { href: `${l}${n}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: r("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ c.jsx(ie, { href: `${l}${n}management`, className: "underline hover:text-gray-700", children: r("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ c.jsx(ie, { href: `${l}${n}legal`, className: "underline hover:text-gray-700", children: r("footer.policies.legal_notice") })
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
        r("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
const Nm = "G-Y274FMXQNP", Km = ({ trackingId: t = Nm, ...e }) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ c.jsx("script", { async: !0, src: `https://www.googletagmanager.com/gtag/js?id=${t}` }),
  /* @__PURE__ */ c.jsx(
    "script",
    {
      ...e,
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${t}');
          `
      }
    }
  )
] }), Wm = () => Ve(
  (e, s, i, n) => {
    typeof window.gtag == "function" ? window.gtag("event", e, {
      event_category: s,
      event_label: i,
      ...n !== void 0 && { value: n }
      // Conditionally add value
    }) : console.warn("gtag is not defined. Google Analytics script might not be loaded.");
  },
  []
  // No dependencies, so the function reference is stable
);
export {
  Fm as FooterPlexicus,
  Km as GoogleAnalytics,
  Bm as NavbarPlexicus,
  Im as SelectLanguage,
  Wm as useTrackClick
};
