highed.plugins.import.install("Socrata",{description:'Socrata is an open data format commonly used for various government sources. <a href="http://www.opendatanetwork.com/" target="_blank">http://www.opendatanetwork.com/</a>',treatAs:"csv",fetchAs:"json",defaultURL:"https://finances.worldbank.org/resource/czdd-amke.json",options:{includeFields:{type:"string",label:"Fields to include, separate by whitespace",default:"fiscal_year amount_us_millions_"}},filter:function(e,n,t){var a=[],o=[];n.includeFields=highed.arrToObj(n.includeFields.split(" ")),highed.isArr(e)&&(e=e.map(function(e){var t={};return Object.keys(n.includeFields).forEach(function(n){t[n]=e[n]}),t}),e.forEach(function(e,t){var i=[];Object.keys(e).forEach(function(a){var s=e[a];n.includeFields[a]&&(0==t&&o.push(a),i.push(s))}),a.push(i.join(","))})),t(!1,[o.join(",")].concat(a).join("\n"))}});