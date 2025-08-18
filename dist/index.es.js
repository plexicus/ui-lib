(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible{--tw-ring-color:var(--ring)}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}}@media (min-width:64rem){.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}')),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as as from "react";
import Re, { createContext as os, useContext as ls, useCallback as xe, useState as ie, useRef as Ce, useEffect as X } from "react";
import { Globe as cs } from "lucide-react";
var we = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function ds() {
  if (pt) return ge;
  pt = 1;
  var i = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, r, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), r.key !== void 0 && (o = "" + r.key), "key" in r) {
      a = {};
      for (var l in r)
        l !== "key" && (a[l] = r[l]);
    } else a = r;
    return r = a.ref, {
      $$typeof: i,
      type: s,
      key: o,
      ref: r !== void 0 ? r : null,
      props: a
    };
  }
  return ge.Fragment = e, ge.jsx = t, ge.jsxs = t, ge;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function us() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === A ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case y:
          return "Fragment";
        case T:
          return "Profiler";
        case z:
          return "StrictMode";
        case w:
          return "Suspense";
        case D:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case m:
            return "Portal";
          case M:
            return (f.displayName || "Context") + ".Provider";
          case O:
            return (f._context.displayName || "Context") + ".Consumer";
          case I:
            var k = f.render;
            return f = f.displayName, f || (f = k.displayName || k.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case N:
            return k = f.displayName || null, k !== null ? k : i(f.type) || "Memo";
          case g:
            k = f._payload, f = f._init;
            try {
              return i(f(k));
            } catch {
            }
        }
      return null;
    }
    function e(f) {
      return "" + f;
    }
    function t(f) {
      try {
        e(f);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var L = k.error, C = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return L.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(f);
      }
    }
    function s(f) {
      if (f === y) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === g)
        return "<...>";
      try {
        var k = i(f);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var f = B.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (ee.call(f, "key")) {
        var k = Object.getOwnPropertyDescriptor(f, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, k) {
      function L() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var f = i(this.type);
      return $[f] || ($[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function d(f, k, L, C, R, W, le, E) {
      return L = W.ref, f = {
        $$typeof: u,
        type: f,
        key: k,
        props: W,
        _owner: R
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function p(f, k, L, C, R, W, le, E) {
      var K = k.children;
      if (K !== void 0)
        if (C)
          if (U(K)) {
            for (C = 0; C < K.length; C++)
              h(K[C]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(K);
      if (ee.call(k, "key")) {
        K = i(f);
        var J = Object.keys(k).filter(function(he) {
          return he !== "key";
        });
        C = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", Z[K + C] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          K,
          J,
          K
        ), Z[K + C] = !0);
      }
      if (K = null, L !== void 0 && (t(L), K = "" + L), o(k) && (t(k.key), K = "" + k.key), "key" in k) {
        L = {};
        for (var se in k)
          se !== "key" && (L[se] = k[se]);
      } else L = k;
      return K && l(
        L,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), d(
        f,
        K,
        W,
        R,
        r(),
        L,
        le,
        E
      );
    }
    function h(f) {
      typeof f == "object" && f !== null && f.$$typeof === u && f._store && (f._store.validated = 1);
    }
    var _ = Re, u = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), M = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), B = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, U = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var Y, $ = {}, F = _.react_stack_bottom_frame.bind(
      _,
      a
    )(), b = H(s(a)), Z = {};
    fe.Fragment = y, fe.jsx = function(f, k, L, C, R) {
      var W = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        f,
        k,
        L,
        !1,
        C,
        R,
        W ? Error("react-stack-top-frame") : F,
        W ? H(s(f)) : b
      );
    }, fe.jsxs = function(f, k, L, C, R) {
      var W = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        f,
        k,
        L,
        !0,
        C,
        R,
        W ? Error("react-stack-top-frame") : F,
        W ? H(s(f)) : b
      );
    };
  })()), fe;
}
var gt;
function ps() {
  return gt || (gt = 1, process.env.NODE_ENV === "production" ? we.exports = ds() : we.exports = us()), we.exports;
}
var n = ps();
function Bt(i) {
  var e, t, s = "";
  if (typeof i == "string" || typeof i == "number") s += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var r = i.length;
    for (e = 0; e < r; e++) i[e] && (t = Bt(i[e])) && (s && (s += " "), s += t);
  } else for (t in i) i[t] && (s && (s += " "), s += t);
  return s;
}
function Ft() {
  for (var i, e, t = 0, s = "", r = arguments.length; t < r; t++) (i = arguments[t]) && (e = Bt(i)) && (s && (s += " "), s += e);
  return s;
}
const ft = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, mt = Ft, hs = (i, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return mt(i, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: r, defaultVariants: a } = e, o = Object.keys(r).map((d) => {
    const p = t == null ? void 0 : t[d], h = a == null ? void 0 : a[d];
    if (p === null) return null;
    const _ = ft(p) || ft(h);
    return r[d][_];
  }), l = t && Object.entries(t).reduce((d, p) => {
    let [h, _] = p;
    return _ === void 0 || (d[h] = _), d;
  }, {}), c = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((d, p) => {
    let { class: h, className: _, ...u } = p;
    return Object.entries(u).every((m) => {
      let [y, z] = m;
      return Array.isArray(z) ? z.includes({
        ...a,
        ...l
      }[y]) : {
        ...a,
        ...l
      }[y] === z;
    }) ? [
      ...d,
      h,
      _
    ] : d;
  }, []);
  return mt(i, o, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ve = "-", gs = (i) => {
  const e = ms(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = i;
  return {
    getClassGroupId: (o) => {
      const l = o.split(Ve);
      return l[0] === "" && l.length !== 1 && l.shift(), Dt(l, e) || fs(o);
    },
    getConflictingClassGroupIds: (o, l) => {
      const c = t[o] || [];
      return l && s[o] ? [...c, ...s[o]] : c;
    }
  };
}, Dt = (i, e) => {
  var o;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], s = e.nextPart.get(t), r = s ? Dt(i.slice(1), s) : void 0;
  if (r)
    return r;
  if (e.validators.length === 0)
    return;
  const a = i.join(Ve);
  return (o = e.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : o.classGroupId;
}, _t = /^\[(.+)\]$/, fs = (i) => {
  if (_t.test(i)) {
    const e = _t.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, ms = (i) => {
  const {
    theme: e,
    classGroups: t
  } = i, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in t)
    $e(t[r], s, r, e);
  return s;
}, $e = (i, e, t, s) => {
  i.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? e : xt(e, r);
      a.classGroupId = t;
      return;
    }
    if (typeof r == "function") {
      if (_s(r)) {
        $e(r(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: t
      });
      return;
    }
    Object.entries(r).forEach(([a, o]) => {
      $e(o, xt(e, a), t, s);
    });
  });
}, xt = (i, e) => {
  let t = i;
  return e.split(Ve).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, _s = (i) => i.isThemeGetter, xs = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const r = (a, o) => {
    t.set(a, o), e++, e > i && (e = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let o = t.get(a);
      if (o !== void 0)
        return o;
      if ((o = s.get(a)) !== void 0)
        return r(a, o), o;
    },
    set(a, o) {
      t.has(a) ? t.set(a, o) : r(a, o);
    }
  };
}, Ee = "!", Be = ":", vs = Be.length, ys = (i) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = i;
  let s = (r) => {
    const a = [];
    let o = 0, l = 0, c = 0, d;
    for (let m = 0; m < r.length; m++) {
      let y = r[m];
      if (o === 0 && l === 0) {
        if (y === Be) {
          a.push(r.slice(c, m)), c = m + vs;
          continue;
        }
        if (y === "/") {
          d = m;
          continue;
        }
      }
      y === "[" ? o++ : y === "]" ? o-- : y === "(" ? l++ : y === ")" && l--;
    }
    const p = a.length === 0 ? r : r.substring(c), h = bs(p), _ = h !== p, u = d && d > c ? d - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: _,
      baseClassName: h,
      maybePostfixModifierPosition: u
    };
  };
  if (e) {
    const r = e + Be, a = s;
    s = (o) => o.startsWith(r) ? a(o.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const r = s;
    s = (a) => t({
      className: a,
      parseClassName: r
    });
  }
  return s;
}, bs = (i) => i.endsWith(Ee) ? i.substring(0, i.length - 1) : i.startsWith(Ee) ? i.substring(1) : i, ks = (i) => {
  const e = Object.fromEntries(i.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const r = [];
    let a = [];
    return s.forEach((o) => {
      o[0] === "[" || e[o] ? (r.push(...a.sort(), o), a = []) : a.push(o);
    }), r.push(...a.sort()), r;
  };
}, ws = (i) => ({
  cache: xs(i.cacheSize),
  parseClassName: ys(i),
  sortModifiers: ks(i),
  ...gs(i)
}), Ps = /\s+/, js = (i, e) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: r,
    sortModifiers: a
  } = e, o = [], l = i.trim().split(Ps);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const p = l[d], {
      isExternal: h,
      modifiers: _,
      hasImportantModifier: u,
      baseClassName: m,
      maybePostfixModifierPosition: y
    } = t(p);
    if (h) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let z = !!y, T = s(z ? m.substring(0, y) : m);
    if (!T) {
      if (!z) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (T = s(m), !T) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      z = !1;
    }
    const O = a(_).join(":"), M = u ? O + Ee : O, I = M + T;
    if (o.includes(I))
      continue;
    o.push(I);
    const w = r(T, z);
    for (let D = 0; D < w.length; ++D) {
      const N = w[D];
      o.push(M + N);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Ss() {
  let i = 0, e, t, s = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = Ht(e)) && (s && (s += " "), s += t);
  return s;
}
const Ht = (i) => {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let s = 0; s < i.length; s++)
    i[s] && (e = Ht(i[s])) && (t && (t += " "), t += e);
  return t;
};
function Cs(i, ...e) {
  let t, s, r, a = o;
  function o(c) {
    const d = e.reduce((p, h) => h(p), i());
    return t = ws(d), s = t.cache.get, r = t.cache.set, a = l, l(c);
  }
  function l(c) {
    const d = s(c);
    if (d)
      return d;
    const p = js(c, t);
    return r(c, p), p;
  }
  return function() {
    return a(Ss.apply(null, arguments));
  };
}
const G = (i) => {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}, Kt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, zs = /^\d+\/\d+$/, Ls = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, As = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Os = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Is = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ts = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (i) => zs.test(i), S = (i) => !!i && !Number.isNaN(Number(i)), re = (i) => !!i && Number.isInteger(Number(i)), Te = (i) => i.endsWith("%") && S(i.slice(0, -1)), te = (i) => Ls.test(i), Ms = () => !0, Ns = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  As.test(i) && !Os.test(i)
), Wt = () => !1, Rs = (i) => Is.test(i), $s = (i) => Ts.test(i), Es = (i) => !x(i) && !v(i), Bs = (i) => ue(i, qt, Wt), x = (i) => Kt.test(i), ne = (i) => ue(i, Yt, Ns), Me = (i) => ue(i, Gs, S), vt = (i) => ue(i, Vt, Wt), Fs = (i) => ue(i, Ut, $s), Pe = (i) => ue(i, Jt, Rs), v = (i) => Gt.test(i), me = (i) => pe(i, Yt), Ds = (i) => pe(i, Ws), yt = (i) => pe(i, Vt), Hs = (i) => pe(i, qt), Ks = (i) => pe(i, Ut), je = (i) => pe(i, Jt, !0), ue = (i, e, t) => {
  const s = Kt.exec(i);
  return s ? s[1] ? e(s[1]) : t(s[2]) : !1;
}, pe = (i, e, t = !1) => {
  const s = Gt.exec(i);
  return s ? s[1] ? e(s[1]) : t : !1;
}, Vt = (i) => i === "position" || i === "percentage", Ut = (i) => i === "image" || i === "url", qt = (i) => i === "length" || i === "size" || i === "bg-size", Yt = (i) => i === "length", Gs = (i) => i === "number", Ws = (i) => i === "family-name", Jt = (i) => i === "shadow", Vs = () => {
  const i = G("color"), e = G("font"), t = G("text"), s = G("font-weight"), r = G("tracking"), a = G("leading"), o = G("breakpoint"), l = G("container"), c = G("spacing"), d = G("radius"), p = G("shadow"), h = G("inset-shadow"), _ = G("text-shadow"), u = G("drop-shadow"), m = G("blur"), y = G("perspective"), z = G("aspect"), T = G("ease"), O = G("animate"), M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], w = () => [...I(), v, x], D = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], g = () => [v, x, c], P = () => [ce, "full", "auto", ...g()], A = () => [re, "none", "subgrid", v, x], B = () => ["auto", {
    span: ["full", re, v, x]
  }, re, v, x], ee = () => [re, "auto", v, x], U = () => ["auto", "min", "max", "fr", v, x], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...g()], F = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], b = () => [i, v, x], Z = () => [...I(), yt, vt, {
    position: [v, x]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", Hs, Bs, {
    size: [v, x]
  }], L = () => [Te, me, ne], C = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    v,
    x
  ], R = () => ["", S, me, ne], W = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], E = () => [S, Te, yt, vt], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    v,
    x
  ], J = () => ["none", S, v, x], se = () => ["none", S, v, x], he = () => [S, v, x], ke = () => [ce, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [te],
      breakpoint: [te],
      color: [Ms],
      container: [te],
      "drop-shadow": [te],
      ease: ["in", "out", "in-out"],
      font: [Es],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [te],
      shadow: [te],
      spacing: ["px", S],
      text: [te],
      "text-shadow": [te],
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
        aspect: ["auto", "square", ce, x, v, z]
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
        columns: [S, x, v, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
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
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        z: [re, "auto", v, x]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", l, ...g()]
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
        flex: [S, ce, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", S, v, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", S, v, x]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", v, x]
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
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
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
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
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
        "justify-items": [...Y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Y()]
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
        items: [...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Y(), {
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
        "place-items": [...Y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
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
        "space-y": g()
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
        size: F()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...F()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, me, ne]
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
        font: [s, v, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Te, x]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ds, x, e]
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
        tracking: [r, v, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [S, "none", v, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...g()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, x]
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
        list: ["disc", "decimal", "none", v, x]
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
        placeholder: b()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: b()
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [S, "from-font", "auto", v, ne]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: b()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [S, "auto", v, x]
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
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, x]
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
        content: ["none", v, x]
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
        bg: Z()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: k()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, v, x],
          radial: ["", v, x],
          conic: [re, v, x]
        }, Ks, Fs]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: b()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: L()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: b()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: C()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": C()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": C()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": C()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": C()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": C()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": C()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": C()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": C()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": C()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": C()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": C()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": C()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": C()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": C()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: R()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": R()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": R()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": R()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": R()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": R()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": R()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": R()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": R()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": R()
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
        "divide-y": R()
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
        border: [...W(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: b()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": b()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": b()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": b()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": b()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": b()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": b()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": b()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": b()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: b()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [S, v, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", S, me, ne]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: b()
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
          je,
          Pe
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: b()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, je, Pe]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": b()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: R()
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
        ring: b()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [S, ne]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": b()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": R()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": b()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", _, je, Pe]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": b()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S, v, x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "mask-linear": [S]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": E()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": b()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": b()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": E()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": b()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": b()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": E()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": b()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": b()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": E()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": b()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": b()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": E()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": b()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": b()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": E()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": b()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": b()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": E()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": b()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": b()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, x]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": E()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": b()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": b()
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [S]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": E()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": b()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": b()
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
        mask: Z()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: f()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: k()
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
        mask: ["none", v, x]
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
          v,
          x
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [S, v, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [S, v, x]
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
          u,
          je,
          Pe
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": b()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", S, v, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [S, v, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", S, v, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S, v, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", S, v, x]
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
          v,
          x
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [S, v, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [S, v, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", S, v, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [S, v, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", S, v, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S, v, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S, v, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", S, v, x]
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
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, x]
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
        duration: [S, "initial", v, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, v, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [S, v, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", O, v, x]
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
        perspective: [y, v, x]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, x, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        accent: b()
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
        caret: b()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, x]
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
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
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
        "will-change": ["auto", "scroll", "contents", "transform", v, x]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...b()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [S, me, ne, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...b()]
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
}, Us = /* @__PURE__ */ Cs(Vs);
function Zt(...i) {
  return Us(Ft(i));
}
function ze(i, e) {
  if (i) {
    const t = i.split(":");
    if (t.length >= 3 && t[0] && t[2] !== "443")
      return i;
  }
  return e;
}
const qs = hs(
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
), Fe = as.forwardRef(
  ({ className: i, variant: e, size: t, ...s }, r) => /* @__PURE__ */ n.jsx("button", { className: Zt(qs({ variant: e, size: t, className: i })), ref: r, ...s })
);
Fe.displayName = "Button";
const q = ({ href: i, children: e, className: t = "", target: s = "_self", rel: r = "noopener noreferrer", onClick: a }) => {
  const o = (l) => {
    s !== "_blank" && (l.preventDefault(), window.location.href = i), a && a(l);
  };
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      href: i,
      className: t,
      target: s,
      rel: r,
      onClick: o,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Ys = (i, e, t, s) => {
  var a, o, l, c;
  const r = [t, {
    code: e,
    ...s || {}
  }];
  if ((o = (a = i == null ? void 0 : i.services) == null ? void 0 : a.logger) != null && o.forward)
    return i.services.logger.forward(r, "warn", "react-i18next::", !0);
  oe(r[0]) && (r[0] = `react-i18next:: ${r[0]}`), (c = (l = i == null ? void 0 : i.services) == null ? void 0 : l.logger) != null && c.warn ? i.services.logger.warn(...r) : console != null && console.warn && console.warn(...r);
}, bt = {}, De = (i, e, t, s) => {
  oe(t) && bt[t] || (oe(t) && (bt[t] = /* @__PURE__ */ new Date()), Ys(i, e, t, s));
}, Xt = (i, e) => () => {
  if (i.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        i.off("initialized", t);
      }, 0), e();
    };
    i.on("initialized", t);
  }
}, He = (i, e, t) => {
  i.loadNamespaces(e, Xt(i, t));
}, kt = (i, e, t, s) => {
  if (oe(t) && (t = [t]), i.options.preload && i.options.preload.indexOf(e) > -1) return He(i, t, s);
  t.forEach((r) => {
    i.options.ns.indexOf(r) < 0 && i.options.ns.push(r);
  }), i.loadLanguages(e, Xt(i, s));
}, Js = (i, e, t = {}) => !e.languages || !e.languages.length ? (De(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (s, r) => {
    if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !r(s.isLanguageChangingTo, i)) return !1;
  }
}), oe = (i) => typeof i == "string", Zs = (i) => typeof i == "object" && i !== null, Xs = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Qs = {
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
}, er = (i) => Qs[i], tr = (i) => i.replace(Xs, er);
let Ke = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: tr
};
const sr = (i = {}) => {
  Ke = {
    ...Ke,
    ...i
  };
}, rr = () => Ke;
let Qt;
const ir = (i) => {
  Qt = i;
}, nr = () => Qt, ar = {
  type: "3rdParty",
  init(i) {
    sr(i.options.react), ir(i);
  }
}, or = os();
class lr {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const cr = (i, e) => {
  const t = Ce();
  return X(() => {
    t.current = i;
  }, [i, e]), t.current;
}, es = (i, e, t, s) => i.getFixedT(e, t, s), dr = (i, e, t, s) => xe(es(i, e, t, s), [i, e, t, s]), ts = (i, e = {}) => {
  var I, w, D, N;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: r
  } = ls(or) || {}, a = t || s || nr();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new lr()), !a) {
    De(a, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const g = (A, B) => oe(B) ? B : Zs(B) && oe(B.defaultValue) ? B.defaultValue : Array.isArray(A) ? A[A.length - 1] : A, P = [g, {}, !1];
    return P.t = g, P.i18n = {}, P.ready = !1, P;
  }
  (I = a.options.react) != null && I.wait && De(a, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...rr(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = o;
  let d = r || ((w = a.options) == null ? void 0 : w.defaultNS);
  d = oe(d) ? [d] : d || ["translation"], (N = (D = a.reportNamespaces).addUsedNamespaces) == null || N.call(D, d);
  const p = (a.isInitialized || a.initializedStoreOnce) && d.every((g) => Js(g, a, o)), h = dr(a, e.lng || null, o.nsMode === "fallback" ? d : d[0], c), _ = () => h, u = () => es(a, e.lng || null, o.nsMode === "fallback" ? d : d[0], c), [m, y] = ie(_);
  let z = d.join();
  e.lng && (z = `${e.lng}${z}`);
  const T = cr(z), O = Ce(!0);
  X(() => {
    const {
      bindI18n: g,
      bindI18nStore: P
    } = o;
    O.current = !0, !p && !l && (e.lng ? kt(a, e.lng, d, () => {
      O.current && y(u);
    }) : He(a, d, () => {
      O.current && y(u);
    })), p && T && T !== z && O.current && y(u);
    const A = () => {
      O.current && y(u);
    };
    return g && (a == null || a.on(g, A)), P && (a == null || a.store.on(P, A)), () => {
      O.current = !1, a && g && (g == null || g.split(" ").forEach((B) => a.off(B, A))), P && a && P.split(" ").forEach((B) => a.store.off(B, A));
    };
  }, [a, z]), X(() => {
    O.current && p && y(_);
  }, [a, c, p]);
  const M = [m, a, p];
  if (M.t = m, M.i18n = a, M.ready = p, p || !p && !l) return M;
  throw new Promise((g) => {
    e.lng ? kt(a, e.lng, d, () => g()) : He(a, d, () => g());
  });
}, j = (i) => typeof i == "string", _e = () => {
  let i, e;
  const t = new Promise((s, r) => {
    i = s, e = r;
  });
  return t.resolve = i, t.reject = e, t;
}, wt = (i) => i == null ? "" : "" + i, ur = (i, e, t) => {
  i.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, pr = /###/g, Pt = (i) => i && i.indexOf("###") > -1 ? i.replace(pr, ".") : i, jt = (i) => !i || j(i), ve = (i, e, t) => {
  const s = j(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (jt(i)) return {};
    const a = Pt(s[r]);
    !i[a] && t && (i[a] = new t()), Object.prototype.hasOwnProperty.call(i, a) ? i = i[a] : i = {}, ++r;
  }
  return jt(i) ? {} : {
    obj: i,
    k: Pt(s[r])
  };
}, St = (i, e, t) => {
  const {
    obj: s,
    k: r
  } = ve(i, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[r] = t;
    return;
  }
  let a = e[e.length - 1], o = e.slice(0, e.length - 1), l = ve(i, o, Object);
  for (; l.obj === void 0 && o.length; )
    a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), l = ve(i, o, Object), l != null && l.obj && typeof l.obj[`${l.k}.${a}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${a}`] = t;
}, hr = (i, e, t, s) => {
  const {
    obj: r,
    k: a
  } = ve(i, e, Object);
  r[a] = r[a] || [], r[a].push(t);
}, Le = (i, e) => {
  const {
    obj: t,
    k: s
  } = ve(i, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, gr = (i, e, t) => {
  const s = Le(i, t);
  return s !== void 0 ? s : Le(e, t);
}, ss = (i, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in i ? j(i[s]) || i[s] instanceof String || j(e[s]) || e[s] instanceof String ? t && (i[s] = e[s]) : ss(i[s], e[s], t) : i[s] = e[s]);
  return i;
}, de = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var fr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const mr = (i) => j(i) ? i.replace(/[&<>"'\/]/g, (e) => fr[e]) : i;
class _r {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const xr = [" ", ",", "?", "!", ";"], vr = new _r(20), yr = (i, e, t) => {
  e = e || "", t = t || "";
  const s = xr.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = vr.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let a = !r.test(i);
  if (!a) {
    const o = i.indexOf(t);
    o > 0 && !r.test(i.substring(0, o)) && (a = !0);
  }
  return a;
}, Ge = (i, e, t = ".") => {
  if (!i) return;
  if (i[e])
    return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
  const s = e.split(t);
  let r = i;
  for (let a = 0; a < s.length; ) {
    if (!r || typeof r != "object")
      return;
    let o, l = "";
    for (let c = a; c < s.length; ++c)
      if (c !== a && (l += t), l += s[c], o = r[l], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && c < s.length - 1)
          continue;
        a += c - a + 1;
        break;
      }
    r = o;
  }
  return r;
}, ye = (i) => i == null ? void 0 : i.replace("_", "-"), br = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class Ae {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || br, this.options = t, this.debug = t.debug;
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
  forward(e, t, s, r) {
    return r && !this.debug ? null : (j(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Ae(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ae(this.logger, e);
  }
}
var Q = new Ae();
class Ie {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const r = this.observers[s].get(t) || 0;
      this.observers[s].set(t, r + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([r, a]) => {
      for (let o = 0; o < a; o++)
        r(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, a]) => {
      for (let o = 0; o < a; o++)
        r.apply(r, [e, ...t]);
    });
  }
}
class Ct extends Ie {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, r = {}) {
    var d, p;
    const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, o = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : j(s) && a ? l.push(...s.split(a)) : l.push(s)));
    const c = Le(this.data, l);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), c || !o || !j(s) ? c : Ge((p = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : p[t], s, a);
  }
  addResource(e, t, s, r, a = {
    silent: !1
  }) {
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (l = e.split("."), r = t, t = l[1]), this.addNamespaces(t), St(this.data, l, r), a.silent || this.emit("added", e, t, s, r);
  }
  addResources(e, t, s, r = {
    silent: !1
  }) {
    for (const a in s)
      (j(s[a]) || Array.isArray(s[a])) && this.addResource(e, t, a, s[a], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, r, a, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), r = s, s = t, t = l[1]), this.addNamespaces(t);
    let c = Le(this.data, l) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? ss(c, s, a) : c = {
      ...c,
      ...s
    }, St(this.data, l, c), o.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((r) => t[r] && Object.keys(t[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var rs = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, s, r) {
    return i.forEach((a) => {
      var o;
      e = ((o = this.processors[a]) == null ? void 0 : o.process(e, t, s, r)) ?? e;
    }), e;
  }
};
const zt = {}, Lt = (i) => !j(i) && typeof i != "boolean" && typeof i != "number";
class Oe extends Ie {
  constructor(e, t = {}) {
    super(), ur(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Q.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const r = this.resolve(e, s);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let a = t.ns || this.options.defaultNS || [];
    const o = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !yr(e, s, r);
    if (o && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: j(a) ? [a] : a
        };
      const d = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(d[0]) > -1) && (a = d.shift()), e = d.join(r);
    }
    return {
      key: e,
      namespaces: j(a) ? [a] : a
    };
  }
  translate(e, t, s) {
    let r = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (r = {
      ...r
    }), r || (r = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const a = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], r), d = c[c.length - 1];
    let p = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const h = r.lng || this.language, _ = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return _ ? a ? {
        res: `${d}${p}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(r)
      } : `${d}${p}${l}` : a ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(r)
      } : l;
    const u = this.resolve(e, r);
    let m = u == null ? void 0 : u.res;
    const y = (u == null ? void 0 : u.usedKey) || l, z = (u == null ? void 0 : u.exactUsedKey) || l, T = ["[object Number]", "[object Function]", "[object RegExp]"], O = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, M = !this.i18nFormat || this.i18nFormat.handleAsObject, I = r.count !== void 0 && !j(r.count), w = Oe.hasDefaultValue(r), D = I ? this.pluralResolver.getSuffix(h, r.count, r) : "", N = r.ordinal && I ? this.pluralResolver.getSuffix(h, r.count, {
      ordinal: !1
    }) : "", g = I && !r.ordinal && r.count === 0, P = g && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${D}`] || r[`defaultValue${N}`] || r.defaultValue;
    let A = m;
    M && !m && w && (A = P);
    const B = Lt(A), ee = Object.prototype.toString.apply(A);
    if (M && A && B && T.indexOf(ee) < 0 && !(j(O) && Array.isArray(A))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const U = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, A, {
          ...r,
          ns: c
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return a ? (u.res = U, u.usedParams = this.getUsedParamsDetails(r), u) : U;
      }
      if (o) {
        const U = Array.isArray(A), H = U ? [] : {}, Y = U ? z : y;
        for (const $ in A)
          if (Object.prototype.hasOwnProperty.call(A, $)) {
            const F = `${Y}${o}${$}`;
            w && !m ? H[$] = this.translate(F, {
              ...r,
              defaultValue: Lt(P) ? P[$] : void 0,
              joinArrays: !1,
              ns: c
            }) : H[$] = this.translate(F, {
              ...r,
              joinArrays: !1,
              ns: c
            }), H[$] === F && (H[$] = A[$]);
          }
        m = H;
      }
    } else if (M && j(O) && Array.isArray(m))
      m = m.join(O), m && (m = this.extendTranslation(m, e, r, s));
    else {
      let U = !1, H = !1;
      !this.isValidLookup(m) && w && (U = !0, m = P), this.isValidLookup(m) || (H = !0, m = l);
      const $ = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && H ? void 0 : m, F = w && P !== m && this.options.updateMissing;
      if (H || U || F) {
        if (this.logger.log(F ? "updateKey" : "missingKey", h, d, l, F ? P : m), o) {
          const k = this.resolve(l, {
            ...r,
            keySeparator: !1
          });
          k && k.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let b = [];
        const Z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Z && Z[0])
          for (let k = 0; k < Z.length; k++)
            b.push(Z[k]);
        else this.options.saveMissingTo === "all" ? b = this.languageUtils.toResolveHierarchy(r.lng || this.language) : b.push(r.lng || this.language);
        const f = (k, L, C) => {
          var W;
          const R = w && C !== m ? C : $;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(k, d, L, R, F, r) : (W = this.backendConnector) != null && W.saveMissing && this.backendConnector.saveMissing(k, d, L, R, F, r), this.emit("missingKey", k, d, L, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && I ? b.forEach((k) => {
          const L = this.pluralResolver.getSuffixes(k, r);
          g && r[`defaultValue${this.options.pluralSeparator}zero`] && L.indexOf(`${this.options.pluralSeparator}zero`) < 0 && L.push(`${this.options.pluralSeparator}zero`), L.forEach((C) => {
            f([k], l + C, r[`defaultValue${C}`] || P);
          });
        }) : f(b, l, P));
      }
      m = this.extendTranslation(m, e, r, u, s), H && m === l && this.options.appendNamespaceToMissingKey && (m = `${d}${p}${l}`), (H || U) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${p}${l}` : l, U ? m : void 0, r));
    }
    return a ? (u.res = m, u.usedParams = this.getUsedParamsDetails(r), u) : m;
  }
  extendTranslation(e, t, s, r, a) {
    var c, d;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const p = j(e) && (((d = s == null ? void 0 : s.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (p) {
        const u = e.match(this.interpolator.nestingRegexp);
        h = u && u.length;
      }
      let _ = s.replace && !j(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (_ = {
        ...this.options.interpolation.defaultVariables,
        ..._
      }), e = this.interpolator.interpolate(e, _, s.lng || this.language || r.usedLng, s), p) {
        const u = e.match(this.interpolator.nestingRegexp), m = u && u.length;
        h < m && (s.nest = !1);
      }
      !s.lng && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...u) => (a == null ? void 0 : a[0]) === u[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${u[0]} in key: ${t[0]}`), null) : this.translate(...u, t), s)), s.interpolation && this.interpolator.reset();
    }
    const o = s.postProcess || this.options.postProcess, l = j(o) ? [o] : o;
    return e != null && (l != null && l.length) && s.applyPostProcessor !== !1 && (e = rs.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, r, a, o, l;
    return j(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      const d = this.extractFromKey(c, t), p = d.key;
      r = p;
      let h = d.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const _ = t.count !== void 0 && !j(t.count), u = _ && !t.ordinal && t.count === 0, m = t.context !== void 0 && (j(t.context) || typeof t.context == "number") && t.context !== "", y = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((z) => {
        var T, O;
        this.isValidLookup(s) || (l = z, !zt[`${y[0]}-${z}`] && ((T = this.utils) != null && T.hasLoadedNamespace) && !((O = this.utils) != null && O.hasLoadedNamespace(l)) && (zt[`${y[0]}-${z}`] = !0, this.logger.warn(`key "${r}" for languages "${y.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((M) => {
          var D;
          if (this.isValidLookup(s)) return;
          o = M;
          const I = [p];
          if ((D = this.i18nFormat) != null && D.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, p, M, z, t);
          else {
            let N;
            _ && (N = this.pluralResolver.getSuffix(M, t.count, t));
            const g = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (_ && (t.ordinal && N.indexOf(P) === 0 && I.push(p + N.replace(P, this.options.pluralSeparator)), I.push(p + N), u && I.push(p + g)), m) {
              const A = `${p}${this.options.contextSeparator || "_"}${t.context}`;
              I.push(A), _ && (t.ordinal && N.indexOf(P) === 0 && I.push(A + N.replace(P, this.options.pluralSeparator)), I.push(A + N), u && I.push(A + g));
            }
          }
          let w;
          for (; w = I.pop(); )
            this.isValidLookup(s) || (a = w, s = this.getResource(M, z, w, t));
        }));
      });
    }), {
      res: s,
      usedKey: r,
      exactUsedKey: a,
      usedLng: o,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, r = {}) {
    var a;
    return (a = this.i18nFormat) != null && a.getResource ? this.i18nFormat.getResource(e, t, s, r) : this.resourceStore.getResource(e, t, s, r);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !j(e.replace);
    let r = s ? e.replace : e;
    if (s && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !s) {
      r = {
        ...r
      };
      for (const a of t)
        delete r[a];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class At {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Q.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ye(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ye(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (j(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const r = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const r = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(r)) return t = r;
      const a = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(a)) return t = a;
      t = this.options.supportedLngs.find((o) => {
        if (o === a) return o;
        if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && (o.indexOf("-") > 0 && a.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === a || o.indexOf(a) === 0 && a.length > 1))
          return o;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), j(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], a = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return j(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(e))) : j(e) && a(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && a(this.formatLanguageCode(o));
    }), r;
  }
}
const Ot = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, It = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class kr {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = Q.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = ye(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", a = JSON.stringify({
      cleanedCode: s,
      type: r
    });
    if (a in this.pluralRulesCache)
      return this.pluralRulesCache[a];
    let o;
    try {
      o = new Intl.PluralRules(s, {
        type: r
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), It;
      if (!e.match(/-|_/)) return It;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(c, t);
    }
    return this.pluralRulesCache[a] = o, o;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((r) => `${t}${r}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((r, a) => Ot[r] - Ot[a]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const r = this.getRule(e, s);
    return r ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const Tt = (i, e, t, s = ".", r = !0) => {
  let a = gr(i, e, t);
  return !a && r && j(t) && (a = Ge(i, t, s), a === void 0 && (a = Ge(e, t, s))), a;
}, Ne = (i) => i.replace(/\$/g, "$$$$");
class wr {
  constructor(e = {}) {
    var t;
    this.logger = Q.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: r,
      prefix: a,
      prefixEscaped: o,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: p,
      unescapePrefix: h,
      nestingPrefix: _,
      nestingPrefixEscaped: u,
      nestingSuffix: m,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: z,
      maxReplaces: T,
      alwaysFormat: O
    } = e.interpolation;
    this.escape = t !== void 0 ? t : mr, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = a ? de(a) : o || "{{", this.suffix = l ? de(l) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = p ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = _ ? de(_) : u || de("$t("), this.nestingSuffix = m ? de(m) : y || de(")"), this.nestingOptionsSeparator = z || ",", this.maxReplaces = T || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, r) {
    var u;
    let a, o, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const O = Tt(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(O, void 0, s, {
          ...r,
          ...t,
          interpolationkey: m
        }) : O;
      }
      const y = m.split(this.formatSeparator), z = y.shift().trim(), T = y.join(this.formatSeparator).trim();
      return this.format(Tt(t, c, z, this.options.keySeparator, this.options.ignoreJSONStructure), T, s, {
        ...r,
        ...t,
        interpolationkey: z
      });
    };
    this.resetRegExp();
    const p = (r == null ? void 0 : r.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((u = r == null ? void 0 : r.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => Ne(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? Ne(this.escape(m)) : Ne(m)
    }].forEach((m) => {
      for (l = 0; a = m.regex.exec(e); ) {
        const y = a[1].trim();
        if (o = d(y), o === void 0)
          if (typeof p == "function") {
            const T = p(e, a, r);
            o = j(T) ? T : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, y))
            o = "";
          else if (h) {
            o = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`), o = "";
        else !j(o) && !this.useRawValueToEscape && (o = wt(o));
        const z = m.safeValue(o);
        if (e = e.replace(a[0], z), h ? (m.regex.lastIndex += o.length, m.regex.lastIndex -= a[0].length) : m.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let r, a, o;
    const l = (c, d) => {
      const p = this.nestingOptionsSeparator;
      if (c.indexOf(p) < 0) return c;
      const h = c.split(new RegExp(`${p}[ ]*{`));
      let _ = `{${h[1]}`;
      c = h[0], _ = this.interpolate(_, o);
      const u = _.match(/'/g), m = _.match(/"/g);
      (((u == null ? void 0 : u.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (_ = _.replace(/'/g, '"'));
      try {
        o = JSON.parse(_), d && (o = {
          ...d,
          ...o
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, y), `${c}${p}${_}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, c;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let c = [];
      o = {
        ...s
      }, o = o.replace && !j(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const d = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
      if (d !== -1 && (c = r[1].slice(d).split(this.formatSeparator).map((p) => p.trim()).filter(Boolean), r[1] = r[1].slice(0, d)), a = t(l.call(this, r[1].trim(), o), o), a && r[0] === e && !j(a)) return a;
      j(a) || (a = wt(a)), a || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), a = ""), c.length && (a = c.reduce((p, h) => this.format(p, h, s.lng, {
        ...s,
        interpolationkey: r[1].trim()
      }), a.trim())), e = e.replace(r[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Pr = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const s = i.split("(");
    e = s[0].toLowerCase().trim();
    const r = s[1].substring(0, s[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((o) => {
      if (o) {
        const [l, ...c] = o.split(":"), d = c.join(":").trim().replace(/^'+|'+$/g, ""), p = l.trim();
        t[p] || (t[p] = d), d === "false" && (t[p] = !1), d === "true" && (t[p] = !0), isNaN(d) || (t[p] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Mt = (i) => {
  const e = {};
  return (t, s, r) => {
    let a = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (a = {
      ...a,
      [r.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(a);
    let l = e[o];
    return l || (l = i(ye(s), r), e[o] = l), l(t);
  };
}, jr = (i) => (e, t, s) => i(ye(t), s)(e);
class Sr {
  constructor(e = {}) {
    this.logger = Q.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? Mt : jr;
    this.formats = {
      number: s((r, a) => {
        const o = new Intl.NumberFormat(r, {
          ...a
        });
        return (l) => o.format(l);
      }),
      currency: s((r, a) => {
        const o = new Intl.NumberFormat(r, {
          ...a,
          style: "currency"
        });
        return (l) => o.format(l);
      }),
      datetime: s((r, a) => {
        const o = new Intl.DateTimeFormat(r, {
          ...a
        });
        return (l) => o.format(l);
      }),
      relativetime: s((r, a) => {
        const o = new Intl.RelativeTimeFormat(r, {
          ...a
        });
        return (l) => o.format(l, a.range || "day");
      }),
      list: s((r, a) => {
        const o = new Intl.ListFormat(r, {
          ...a
        });
        return (l) => o.format(l);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Mt(t);
  }
  format(e, t, s, r = {}) {
    const a = t.split(this.formatSeparator);
    if (a.length > 1 && a[0].indexOf("(") > 1 && a[0].indexOf(")") < 0 && a.find((l) => l.indexOf(")") > -1)) {
      const l = a.findIndex((c) => c.indexOf(")") > -1);
      a[0] = [a[0], ...a.splice(1, l)].join(this.formatSeparator);
    }
    return a.reduce((l, c) => {
      var h;
      const {
        formatName: d,
        formatOptions: p
      } = Pr(c);
      if (this.formats[d]) {
        let _ = l;
        try {
          const u = ((h = r == null ? void 0 : r.formatParams) == null ? void 0 : h[r.interpolationkey]) || {}, m = u.locale || u.lng || r.locale || r.lng || s;
          _ = this.formats[d](l, m, {
            ...p,
            ...r,
            ...u
          });
        } catch (u) {
          this.logger.warn(u);
        }
        return _;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, e);
  }
}
const Cr = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class zr extends Ie {
  constructor(e, t, s, r = {}) {
    var a, o;
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = Q.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], (o = (a = this.backend) == null ? void 0 : a.init) == null || o.call(a, s, r.backend, r);
  }
  queueLoad(e, t, s, r) {
    const a = {}, o = {}, l = {}, c = {};
    return e.forEach((d) => {
      let p = !0;
      t.forEach((h) => {
        const _ = `${d}|${h}`;
        !s.reload && this.store.hasResourceBundle(d, h) ? this.state[_] = 2 : this.state[_] < 0 || (this.state[_] === 1 ? o[_] === void 0 && (o[_] = !0) : (this.state[_] = 1, p = !1, o[_] === void 0 && (o[_] = !0), a[_] === void 0 && (a[_] = !0), c[h] === void 0 && (c[h] = !0)));
      }), p || (l[d] = !0);
    }), (Object.keys(a).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(a),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, s) {
    const r = e.split("|"), a = r[0], o = r[1];
    t && this.emit("failedLoading", a, o, t), !t && s && this.store.addResourceBundle(a, o, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      hr(c.loaded, [a], o), Cr(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const p = c.loaded[d];
        p.length && p.forEach((h) => {
          l[d][h] === void 0 && (l[d][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s, r = 0, a = this.retryTimeout, o) {
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: r,
        wait: a,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const l = (d, p) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (d && p && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, r + 1, a * 2, o);
        }, a);
        return;
      }
      o(d, p);
    }, c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        const d = c(e, t);
        d && typeof d.then == "function" ? d.then((p) => l(null, p)).catch(l) : l(null, d);
      } catch (d) {
        l(d);
      }
      return;
    }
    return c(e, t, l);
  }
  prepareLoading(e, t, s = {}, r) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    j(e) && (e = this.languageUtils.toResolveHierarchy(e)), j(t) && (t = [t]);
    const a = this.queueLoad(e, t, s, r);
    if (!a.toLoad.length)
      return a.pending.length || r(), null;
    a.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e, t = "") {
    const s = e.split("|"), r = s[0], a = s[1];
    this.read(r, a, "read", void 0, void 0, (o, l) => {
      o && this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`, o), !o && l && this.logger.log(`${t}loaded namespace ${a} for language ${r}`, l), this.loaded(e, o, l);
    });
  }
  saveMissing(e, t, s, r, a, o = {}, l = () => {
  }) {
    var c, d, p, h, _;
    if ((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace && !((h = (p = this.services) == null ? void 0 : p.utils) != null && h.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((_ = this.backend) != null && _.create) {
        const u = {
          ...o,
          isUpdate: a
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let y;
            m.length === 5 ? y = m(e, t, s, r, u) : y = m(e, t, s, r), y && typeof y.then == "function" ? y.then((z) => l(null, z)).catch(l) : l(null, y);
          } catch (y) {
            l(y);
          }
        else
          m(e, t, s, r, l, u);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, r);
    }
  }
}
const Nt = () => ({
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
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), j(i[1]) && (e.defaultValue = i[1]), j(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
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
}), Rt = (i) => {
  var e, t;
  return j(i.ns) && (i.ns = [i.ns]), j(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), j(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i;
}, Se = () => {
}, Lr = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class be extends Ie {
  constructor(e = {}, t) {
    if (super(), this.options = Rt(e), this.services = {}, this.logger = Q, this.modules = {
      external: []
    }, Lr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (j(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = Nt();
    this.options = {
      ...s,
      ...this.options,
      ...Rt(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? Q.init(r(this.modules.logger), this.options) : Q.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = Sr;
      const p = new At(this.options);
      this.store = new Ct(this.options.resources, this.options);
      const h = this.services;
      h.logger = Q, h.resourceStore = this.store, h.languageUtils = p, h.pluralResolver = new kr(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (h.formatter = r(d), h.formatter.init && h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new wr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new zr(r(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (u, ...m) => {
        this.emit(u, ...m);
      }), this.modules.languageDetector && (h.languageDetector = r(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = r(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Oe(this.services, this.options), this.translator.on("*", (u, ...m) => {
        this.emit(u, ...m);
      }), this.modules.external.forEach((u) => {
        u.init && u.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Se), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = (...p) => this.store[d](...p);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = (...p) => (this.store[d](...p), this);
    });
    const l = _e(), c = () => {
      const d = (p, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), t(p, h);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
  }
  loadResources(e, t = Se) {
    var a, o;
    let s = t;
    const r = j(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((r == null ? void 0 : r.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      r ? c(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => c(p)), (o = (a = this.options.preload) == null ? void 0 : a.forEach) == null || o.call(a, (d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(d);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const r = _e();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = Se), this.services.backendConnector.reload(e, t, (a) => {
      r.resolve(), s(a);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && rs.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = _e();
    this.emit("languageChanging", e);
    const r = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, a = (l, c) => {
      c ? this.isLanguageChangingTo === e && (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve((...d) => this.t(...d)), t && t(l, (...d) => this.t(...d));
    }, o = (l) => {
      var p, h;
      !e && !l && this.services.languageDetector && (l = []);
      const c = j(l) ? l : l && l[0], d = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(j(l) ? [l] : l);
      d && (this.language || r(d), this.translator.language || this.translator.changeLanguage(d), (h = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || h.call(p, d)), this.loadResources(d, (_) => {
        a(_, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, s) {
    const r = (a, o, ...l) => {
      let c;
      typeof o != "object" ? c = this.options.overloadTranslationOptionHandler([a, o].concat(l)) : c = {
        ...o
      }, c.lng = c.lng || r.lng, c.lngs = c.lngs || r.lngs, c.ns = c.ns || r.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || r.keyPrefix);
      const d = this.options.keySeparator || ".";
      let p;
      return c.keyPrefix && Array.isArray(a) ? p = a.map((h) => `${c.keyPrefix}${d}${h}`) : p = c.keyPrefix ? `${c.keyPrefix}${d}${a}` : a, this.t(p, c);
    };
    return j(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = s, r;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (l, c) => {
      const d = this.services.backendConnector.state[`${l}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, o);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!r || o(a, e)));
  }
  loadNamespaces(e, t) {
    const s = _e();
    return this.options.ns ? (j(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = _e();
    j(e) && (e = [e]);
    const r = this.options.preload || [], a = e.filter((o) => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return a.length ? (this.options.preload = r.concat(a), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var r, a;
    if (e || (e = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const o = new Intl.Locale(e);
      if (o && o.getTextInfo) {
        const l = o.getTextInfo();
        if (l && l.direction) return l.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((a = this.services) == null ? void 0 : a.languageUtils) || new At(Nt());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new be(e, t);
  }
  cloneInstance(e = {}, t = Se) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, a = new be(r);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, s) {
      const l = Object.keys(this.store.data).reduce((c, d) => (c[d] = {
        ...this.store.data[d]
      }, c[d] = Object.keys(c[d]).reduce((p, h) => (p[h] = {
        ...c[d][h]
      }, p), c[d]), c), {});
      a.store = new Ct(l, r), a.services.resourceStore = a.store;
    }
    return a.translator = new Oe(a.services, r), a.translator.on("*", (l, ...c) => {
      a.emit(l, ...c);
    }), a.init(r, t), a.translator.options = r, a.translator.backendConnector.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, a;
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
const V = be.createInstance();
V.createInstance = be.createInstance;
V.createInstance;
V.dir;
V.init;
V.loadResources;
V.reloadResources;
V.use;
V.changeLanguage;
V.getFixedT;
V.t;
V.exists;
V.setDefaultNamespace;
V.hasLoadedNamespace;
V.loadNamespaces;
V.loadLanguages;
var Ue = {
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
}, Ar = Ue.footer, Or = Ue.nav;
const Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue,
  footer: Ar,
  nav: Or
}, Symbol.toStringTag, { value: "Module" }));
var qe = {
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
}, Tr = qe.footer, Mr = qe.nav;
const Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe,
  footer: Tr,
  nav: Mr
}, Symbol.toStringTag, { value: "Module" }));
var Ye = {
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
}, Rr = Ye.footer, $r = Ye.nav;
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye,
  footer: Rr,
  nav: $r
}, Symbol.toStringTag, { value: "Module" }));
var Je = {
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
}, Br = Je.footer, Fr = Je.nav;
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je,
  footer: Br,
  nav: Fr
}, Symbol.toStringTag, { value: "Module" }));
var Ze = {
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
  }
}, Hr = Ze.footer, Kr = Ze.nav;
const Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze,
  footer: Hr,
  nav: Kr
}, Symbol.toStringTag, { value: "Module" }));
var Xe = {
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
}, Wr = Xe.footer, Vr = Xe.nav;
const Ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe,
  footer: Wr,
  nav: Vr
}, Symbol.toStringTag, { value: "Module" }));
var Qe = {
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
}, qr = Qe.footer, Yr = Qe.nav;
const Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe,
  footer: qr,
  nav: Yr
}, Symbol.toStringTag, { value: "Module" }));
var et = {
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
}, Zr = et.footer, Xr = et.nav;
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et,
  footer: Zr,
  nav: Xr
}, Symbol.toStringTag, { value: "Module" }));
var tt = {
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
}, ei = tt.footer, ti = tt.nav;
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt,
  footer: ei,
  nav: ti
}, Symbol.toStringTag, { value: "Module" }));
var st = {
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
}, ri = st.footer, ii = st.nav;
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st,
  footer: ri,
  nav: ii
}, Symbol.toStringTag, { value: "Module" }));
var rt = {
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
}, ai = rt.footer, oi = rt.nav;
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rt,
  footer: ai,
  nav: oi
}, Symbol.toStringTag, { value: "Module" }));
var it = {
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
}, ci = it.footer, di = it.nav;
const ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it,
  footer: ci,
  nav: di
}, Symbol.toStringTag, { value: "Module" }));
var nt = {
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
}, pi = nt.footer, hi = nt.nav;
const gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt,
  footer: pi,
  nav: hi
}, Symbol.toStringTag, { value: "Module" }));
var at = {
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
}, fi = at.footer, mi = at.nav;
const _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at,
  footer: fi,
  nav: mi
}, Symbol.toStringTag, { value: "Module" }));
var ot = {
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
}, xi = ot.footer, vi = ot.nav;
const yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ot,
  footer: xi,
  nav: vi
}, Symbol.toStringTag, { value: "Module" }));
var lt = {
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
}, bi = lt.footer, ki = lt.nav;
const wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt,
  footer: bi,
  nav: ki
}, Symbol.toStringTag, { value: "Module" }));
var ct = {
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
}, Pi = ct.footer, ji = ct.nav;
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ct,
  footer: Pi,
  nav: ji
}, Symbol.toStringTag, { value: "Module" }));
var dt = {
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
}, Ci = dt.footer, zi = dt.nav;
const Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt,
  footer: Ci,
  nav: zi
}, Symbol.toStringTag, { value: "Module" }));
var ut = {
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
}, Ai = ut.footer, Oi = ut.nav;
const Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut,
  footer: Ai,
  nav: Oi
}, Symbol.toStringTag, { value: "Module" }));
function We(i, e = "") {
  let t = {};
  if (i && typeof i == "object") {
    for (const s in i)
      if (Object.prototype.hasOwnProperty.call(i, s)) {
        const r = s === "default" && !e ? "" : e ? `${e}.${s}` : s, a = i[s];
        Array.isArray(a) ? (t[r] = a, a.forEach((o, l) => {
          typeof o == "object" && o !== null ? t = {
            ...t,
            ...We(o, `${r}.${l}`)
          } : t[`${r}.${l}`] = o;
        })) : typeof a == "object" && a !== null ? t = { ...t, ...We(a, r) } : t[r] = a;
      }
  }
  return t;
}
const ae = {}, $t = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Ir, "./cs/translation.yaml": Nr, "./da/translation.yaml": Er, "./de/translation.yaml": Dr, "./en/translation.yaml": Gr, "./es/translation.yaml": Ur, "./fi/translation.yaml": Jr, "./fr/translation.yaml": Qr, "./he/translation.yaml": si, "./id/translation.yaml": ni, "./it/translation.yaml": li, "./ja/translation.yaml": ui, "./nl/translation.yaml": gi, "./no/translation.yaml": _i, "./pl/translation.yaml": yi, "./pt/translation.yaml": wi, "./sv/translation.yaml": Si, "./tr/translation.yaml": Li, "./zh/translation.yaml": Ii });
for (const i in $t) {
  const e = $t[i], s = i.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (ae[s] || (ae[s] = {}), typeof e != "object" || e === null) {
    console.warn(`File ${i} is not a valid object, skipping.`);
    continue;
  }
  ae[s].translation || (ae[s].translation = {}), Object.assign(ae[s].translation, We(e));
}
const Ti = Object.keys(ae);
V.use(ar).init({
  lng: "en",
  supportedLngs: Ti,
  resources: ae,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const is = "https://www.plexicus.ai", ns = "https://blog.plexicus.ai", Et = "https://app.plexicus.ai";
function Mi(i) {
  const [e, t] = ie(!1);
  return X(() => {
    const s = window.matchMedia(i), r = () => t(s.matches);
    return r(), s.addEventListener("change", r), () => s.removeEventListener("change", r);
  }, [i]), e;
}
const an = ({
  lang: i,
  fullSiteUrl: e = "http://localhost:8000",
  fullBlogUrl: t = "http://localhost:9000"
}) => {
  const [s, r] = ie("/"), [a, o] = ie(!1), [l, c] = ie(null), d = Ce(null), [p, h] = ie(!1), _ = Mi("(max-width: 1279px)"), { t: u, i18n: m } = ts();
  X(() => {
    h(!0);
  }, []), X(() => {
    m.changeLanguage(i), r(i !== "en" ? `/${i}/` : "/");
  }, []);
  const [y, z] = ie(!1);
  X(() => {
    const g = () => {
      const P = window.scrollY;
      z(P > 50);
    };
    return window.addEventListener("scroll", g), g(), () => {
      window.removeEventListener("scroll", g);
    };
  }, []);
  const T = xe((g) => {
    d.current && (clearTimeout(d.current), d.current = null), c(g);
  }, []), O = Ce([]), M = xe(() => {
    const g = setTimeout(() => {
      c(null);
    }, 150);
    d.current = g, O.current.push(g);
  }, []);
  X(() => () => {
    d.current && clearTimeout(d.current), O.current.forEach(clearTimeout), O.current = [];
  }, []);
  const I = xe(
    (g) => {
      c(l === g ? null : g);
    },
    [l]
  ), w = ze(e, is), D = ze(t, ns), N = {
    products: {
      title: u("nav.product.title"),
      shortTitle: u("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: u("nav.product.platform_overview"),
          description: u("nav.product.platform_overview_desc"),
          href: `${w}${s}products/cnapp-platform`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: u("nav.product.benefits"),
          description: u("nav.product.benefits_desc"),
          href: `${w}${s}products/benefits`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: u("nav.product.use_cases"),
          description: u("nav.product.use_cases_desc"),
          href: `${w}${s}products/use-cases`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ n.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: u("nav.product.aspm"),
          description: u("nav.product.aspm_desc"),
          href: `${w}${s}products/aspm`,
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: u("nav.product.cspm"),
          description: u("nav.product.cspm_desc"),
          href: `${w}${s}products/cspm`,
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: u("nav.product.container_security"),
          description: u("nav.product.container_security_desc"),
          href: `${w}${s}products/container`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ n.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ n.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: u("nav.product.cwpp"),
          description: u("nav.product.cwpp_desc"),
          href: `${w}${s}products/cwpp`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ n.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ n.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: u("nav.product.ciem"),
          description: u("nav.product.ciem_desc"),
          href: `${w}${s}products/ciem`,
          icon: /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ n.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ n.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ n.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ n.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ n.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ n.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ n.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ n.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ n.jsx("path", { d: "m9.228 18.148-.923.383" })
          ] })
        }
      ]
    },
    solutions: {
      title: u("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: u("nav.solutions.fintech"),
          description: u("nav.solutions.fintech_desc"),
          href: `${w}${s}solutions/fintech`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ n.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.healthtech"),
          description: u("nav.solutions.healthtech_desc"),
          href: `${w}${s}solutions/healthtech`,
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: u("nav.solutions.hrtech"),
          description: u("nav.solutions.hrtech_desc"),
          href: `${w}${s}solutions/hrtech`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ n.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ n.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.group_companies"),
          description: u("nav.solutions.group_companies_desc"),
          href: `${w}${s}solutions/group-companies`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ n.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.agencies"),
          description: u("nav.solutions.agencies_desc"),
          href: `${w}${s}solutions/agencies`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.startups"),
          description: u("nav.solutions.startups_desc"),
          href: `${w}${s}solutions/startups`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ n.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.enterprise"),
          description: u("nav.solutions.enterprise_desc"),
          href: `${w}${s}solutions/enterprise`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ n.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ n.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ n.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ n.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ n.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.mobile_apps"),
          description: u("nav.solutions.mobile_apps_desc"),
          href: `${w}${s}solutions/mobile-apps`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ n.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.manufacturing"),
          description: u("nav.solutions.manufacturing_desc"),
          href: `${w}${s}solutions/manufacturing`,
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: u("nav.solutions.government"),
          description: u("nav.solutions.government_desc"),
          href: `${w}${s}solutions/government`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ n.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ n.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ n.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.retailtech"),
          description: u("nav.solutions.retailtech_desc"),
          href: `${w}${s}solutions/retailtech`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ n.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ n.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        },
        {
          title: u("nav.solutions.legaltech"),
          description: u("nav.solutions.legal_desc"),
          href: `${w}${s}solutions/legaltech`,
          icon: /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-gavel-icon lucide-gavel", children: [
            /* @__PURE__ */ n.jsx("path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }),
            /* @__PURE__ */ n.jsx("path", { d: "m16 16 6-6" }),
            /* @__PURE__ */ n.jsx("path", { d: "m21.5 10.5-8-8" }),
            /* @__PURE__ */ n.jsx("path", { d: "m8 8 6-6" }),
            /* @__PURE__ */ n.jsx("path", { d: "m8.5 7.5 8 8" })
          ] })
        }
      ]
    },
    developers: {
      title: u("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: u("nav.developers.documentation"),
          description: u("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ n.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ n.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ n.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ n.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: u("nav.developers.api_references"),
          description: u("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ n.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ n.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: u("nav.developers.github_apps"),
          description: u("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: u("nav.developers.plexalyzer_action"),
          description: u("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: u("nav.resources.title"),
      shortTitle: u("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: u("nav.resources.blog"),
          description: u("nav.resources.blog_desc"),
          href: D,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.youtube_channel"),
          description: u("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ n.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.branding_assets"),
          description: u("nav.resources.branding_assets_desc"),
          href: `${w}${s}branding-assets`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ n.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ n.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ n.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ n.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ n.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ n.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.changelogs"),
          description: u("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ n.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.feature_requests"),
          description: u("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: u("nav.resources.integrations"),
          description: u("nav.resources.integrations_desc"),
          href: `${w}${s}integrations`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ n.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.comparison_overview"),
          description: u("nav.resources.comparison_overview_desc"),
          href: `${w}${s}comparison/overview`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ n.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: u("nav.resources.support"),
          description: u("nav.resources.support_desc"),
          href: `${w}${s}support`,
          icon: /* @__PURE__ */ n.jsxs(
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
                /* @__PURE__ */ n.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ n.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: y ? "#8220ff" : "transparent",
        boxShadow: y ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n.jsx(
            q,
            {
              href: `${w}${s}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ n.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ n.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: Zt("object-contain max-h-full max-w-none w-28", y ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ n.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(N).filter(([g]) => g === "products").map(([g, P]) => /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => T(g),
                onMouseLeave: M,
                children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === g,
                    "aria-haspopup": "true",
                    onClick: () => I(g),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "hidden xl:inline", children: P.title }),
                      /* @__PURE__ */ n.jsx("span", { className: "xl:hidden", children: P.shortTitle }),
                      /* @__PURE__ */ n.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${l === g ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ n.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              g
            )),
            /* @__PURE__ */ n.jsx(
              q,
              {
                href: `${w}${s}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: u("nav.pricing")
              }
            ),
            Object.entries(N).filter(([g]) => g === "solutions" || g === "developers" || g === "resources").map(([g, P]) => /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => T(g),
                onMouseLeave: M,
                children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === g,
                    "aria-haspopup": "true",
                    onClick: () => I(g),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "hidden xl:inline", children: P.title }),
                      /* @__PURE__ */ n.jsx("span", { className: "xl:hidden", children: P.shortTitle }),
                      /* @__PURE__ */ n.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${l === g ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ n.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              g
            )),
            /* @__PURE__ */ n.jsx(
              q,
              {
                href: `${w}${s}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: u("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-end", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ n.jsx(
                q,
                {
                  href: `${Et}/login`,
                  className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                  children: u("nav.login")
                }
              ),
              /* @__PURE__ */ n.jsx(q, { href: `${Et}/register`, children: /* @__PURE__ */ n.jsx(Fe, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: u("nav.get_started") }) })
            ] }),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => o(!a),
                "aria-label": a ? "Close menu" : "Open menu",
                "aria-expanded": a,
                children: a ? /* @__PURE__ */ n.jsxs(
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
                      /* @__PURE__ */ n.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ n.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ n.jsxs(
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
                      /* @__PURE__ */ n.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ n.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ n.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => c(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => T(l),
              onMouseLeave: M,
              role: "menu",
              "aria-labelledby": `menu-button-${l}`,
              children: /* @__PURE__ */ n.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ n.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ n.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    l === "products" && /* @__PURE__ */ n.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ n.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ n.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ n.jsx(
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
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ n.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ n.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ n.jsx(
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
                          /* @__PURE__ */ n.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ n.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ n.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
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
                                /* @__PURE__ */ n.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ n.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ n.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ n.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ n.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ n.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    l === "solutions" && /* @__PURE__ */ n.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ n.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ n.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ n.jsx(
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
                          /* @__PURE__ */ n.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ n.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    l === "resources" && /* @__PURE__ */ n.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ n.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ n.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ n.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ n.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ n.jsx(
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
                            /* @__PURE__ */ n.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ n.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ n.jsx(
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
                              /* @__PURE__ */ n.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ n.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ n.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ n.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ n.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ n.jsx(
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
                              /* @__PURE__ */ n.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ n.jsx(
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
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ n.jsxs("defs", { children: [
                            /* @__PURE__ */ n.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ n.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ n.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    l === "developers" && /* @__PURE__ */ n.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ n.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ n.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ n.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ n.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ n.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ n.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ n.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ n.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ n.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ n.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ n.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ n.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ n.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: N[l].title }),
                    /* @__PURE__ */ n.jsx("p", { className: "text-gray-700", children: u(l === "products" ? "nav.product.explore" : l === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ n.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ n.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: N[l].items.filter((g) => l !== "resources" || !g.title.startsWith("vs ")).map((g, P) => /* @__PURE__ */ n.jsxs(
                  q,
                  {
                    href: g.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => c(null),
                    children: [
                      /* @__PURE__ */ n.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: Re.cloneElement(g.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ n.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: g.title }),
                        /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-600 mt-1", children: g.description })
                      ] })
                    ]
                  },
                  P
                )) }) })
              ] }) })
            }
          )
        ] }),
        p && _ && a && /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => o(!1) }),
        p && _ && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${a ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ n.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
              Object.entries(N).map(([g, P]) => /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "font-semibold", children: P.title }),
                /* @__PURE__ */ n.jsx("div", { className: "grid grid-cols-1 gap-2", children: P.items.map((A, B) => /* @__PURE__ */ n.jsxs(
                  q,
                  {
                    href: A.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => o(!1),
                    children: [
                      /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Re.cloneElement(A.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ n.jsx("span", { className: "text-sm", children: A.title })
                    ]
                  },
                  B
                )) })
              ] }, g)),
              /* @__PURE__ */ n.jsx(
                q,
                {
                  href: `${w}${s}pricing`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => o(!1),
                  children: u("nav.pricing")
                }
              ),
              /* @__PURE__ */ n.jsx(
                q,
                {
                  href: `${w}${s}contact`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => o(!1),
                  children: u("nav.contact")
                }
              ),
              /* @__PURE__ */ n.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ n.jsx(Fe, { className: "w-full bg-gradient-primary", onClick: () => o(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
}, Ni = "English", Ri = "German", $i = "French", Ei = "Japanese", Bi = "Italian", Fi = "Dutch", Di = "Swedish", Hi = "Spanish", Ki = "Norwegian", Gi = "Danish", Wi = "Finnish", Vi = "Portuguese", Ui = "Chinese (Simplified)", qi = "Arabic", Yi = "Hebrew", Ji = "Turkish", Zi = "Polish", Xi = "Czech", Qi = "Indonesian", en = {
  en: Ni,
  de: Ri,
  fr: $i,
  ja: Ei,
  it: Bi,
  nl: Fi,
  sv: Di,
  es: Hi,
  no: Ki,
  da: Gi,
  fi: Wi,
  pt: Vi,
  zh: Ui,
  ar: qi,
  he: Yi,
  tr: Ji,
  pl: Zi,
  cs: Xi,
  id: Qi
};
function tn() {
  var t;
  const i = (s) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const r = window.location.pathname;
    let o = r.match(/^\/([a-z]{2})\//) ? r.replace(/^\/[a-z]{2}\//, `/${s}/`) : `/${s}${r}`;
    o = o.startsWith("/en/") ? o.replace(/^\/en/, "") : o, window.location.href = o;
  };
  X(() => {
    const s = localStorage.getItem("scrollPosition");
    s && (window.scrollTo(0, parseInt(s)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((t = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : t[1]) || "en";
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ n.jsx(cs, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ n.jsx(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (s) => i(s.target.value),
        children: Object.entries(en).map(([s, r]) => /* @__PURE__ */ n.jsx("option", { value: s, children: r }, s))
      }
    ),
    /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ n.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function on({ lang: i, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000", showLanguageSelector: s = !0 }) {
  const [r, a] = ie("/"), { t: o, i18n: l } = ts();
  X(() => {
    l.changeLanguage(i), a(i !== "en" ? `/${i}/` : "/");
  }, []);
  const c = ze(e, is), d = ze(t, ns), p = [
    {
      alt: o("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ n.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ n.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: o("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ n.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(
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
      icon: /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: o("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ n.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], h = [
    {
      title: o("footer.sections.products.title"),
      items: [
        {
          link: `${c}${r}products/cnapp-platform`,
          text: o("footer.sections.products.links.platform_overview")
        },
        {
          link: `${c}${r}products/benefits`,
          text: o("footer.sections.products.links.benefits")
        },
        {
          link: `${c}${r}products/use-cases`,
          text: o("footer.sections.products.links.use_cases")
        },
        {
          link: `${c}${r}products/aspm`,
          text: o("footer.sections.products.links.aspm")
        },
        {
          link: `${c}${r}products/cspm`,
          text: o("footer.sections.products.links.cspm")
        },
        {
          link: `${c}${r}products/container`,
          text: o("footer.sections.products.links.container_security")
        },
        {
          link: `${c}${r}products/cwpp`,
          text: o("footer.sections.products.links.cwpp")
        },
        {
          link: `${c}${r}products/ciem`,
          text: o("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: o("footer.sections.resources.title"),
      items: [
        {
          link: `${d}`,
          text: o("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: o("footer.sections.resources.links.documentation")
        },
        {
          text: o("nav.resources.branding_assets"),
          link: `${c}${r}branding-assets`
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
          link: `${c}${r}integrations`
        },
        {
          text: o("nav.resources.comparison_overview"),
          link: `${c}${r}comparison/overview`
        }
      ]
    },
    {
      title: o("footer.sections.company.title"),
      items: [
        {
          link: `${c}${r}contact`,
          text: o("footer.sections.company.links.contact")
        },
        {
          link: `${c}${r}privacy`,
          text: o("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${c}${r}pricing`,
          text: o("footer.sections.products.links.pricing")
        },
        {
          link: `${c}${r}support`,
          text: o("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ n.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ n.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ n.jsx(q, { href: `${c}${r}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ n.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: o("footer.tagline") }),
        /* @__PURE__ */ n.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: p.map(({ link: _, icon: u, alt: m }) => /* @__PURE__ */ n.jsxs(q, { target: "_blank", href: _, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: m }),
          u
        ] }, _)) }),
        s && /* @__PURE__ */ n.jsx("div", { className: "mt-6", children: /* @__PURE__ */ n.jsx(tn, {}) })
      ] }),
      h.map(({ title: _, items: u }) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: _ }),
        /* @__PURE__ */ n.jsx("ul", { className: "space-y-2", children: u.map(({ link: m, text: y }) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsx(q, { href: m, className: "text-gray-600 hover:text-purple-700", children: y }) }, y)) })
      ] }, _))
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ n.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ n.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx(q, { href: `${c}${r}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: o("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ n.jsx(q, { href: `${c}${r}management`, className: "underline hover:text-gray-700", children: o("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ n.jsx(q, { href: `${c}${r}legal`, className: "underline hover:text-gray-700", children: o("footer.policies.legal_notice") })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ n.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n.jsx(
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
const sn = "G-Y274FMXQNP", ln = ({ trackingId: i = sn, ...e }) => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx("script", { async: !0, src: `https://www.googletagmanager.com/gtag/js?id=${i}` }),
  /* @__PURE__ */ n.jsx(
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
            gtag('config', '${i}');
          `
      }
    }
  )
] }), cn = () => xe(
  (e, t, s, r) => {
    typeof window.gtag == "function" ? window.gtag("event", e, {
      event_category: t,
      event_label: s,
      ...r !== void 0 && { value: r }
      // Conditionally add value
    }) : console.warn("gtag is not defined. Google Analytics script might not be loaded.");
  },
  []
  // No dependencies, so the function reference is stable
);
export {
  on as FooterPlexicus,
  ln as GoogleAnalytics,
  an as NavbarPlexicus,
  tn as SelectLanguage,
  cn as useTrackClick
};
