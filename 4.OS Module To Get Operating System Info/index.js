const os = require('os');

/* Bit of Architecture check :  */
console.log("Bit of Architecture :",os.arch());

/*  heck free memory Space           */
const freeMemory = os.freemem();
console.log("Free memory of System:", freeMemory);

/* Change byte to giga byte                 */
const bytes = 1257713664;
const gigabytes = bytes / (1024 ** 3);
console.log("Converted to Gigabytes(GB):", gigabytes);

/*       check free ram space     */
const totalFreeMemoryBytes = os.freemem();
const totalFreeMemoryGB = totalFreeMemoryBytes / (1024 ** 3);
console.log("Total Free Memory:", totalFreeMemoryGB.toFixed(2), "GB");

/*    Check System host Name     */
console.log("Host name of System :",os.hostname());


/*    Check plateform      */
console.log("Working with plateform :",os.platform())