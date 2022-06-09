const _os=require('os');
// what is os architecture
// console.log(_os.arch());
// // higher order function
// const bytesToGB=(val)=>{
//     let gb=val/1024/1024/1024
//     return gb;
// }

// //free memory
// const freemeonry=_os.freemem();
// // console.log(`freememory  is${freemeonry/1024/1024/1024} `);
// console.log(`freememory in ram is=>${bytesToGB(freemeonry)}`);


// const totalmemory=_os.totalmem();
// // console.log(`total ram is=>${totalmemory/1024/1024/1024}`);
// console.log(`total ram is=>${bytesToGB(totalmemory)}`);


// //platform
// console.log('platform is=>',_os.platform());
// // tem directory
// console.log('platform is=>',_os.tmpdir());

console.log("os type",_os.type());