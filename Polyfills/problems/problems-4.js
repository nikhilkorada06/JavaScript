/**
 * Generating a secrete code for a given string.
 * 
 * Input -- NIKHIL
 * Encode by 2 chars 
 * Output -- PKMJKN
 */



function encode(str)
{
    let str2 = "";
    for (let i=0;i<str.length;i++)
    { 
        let a = str.charCodeAt(i) + 2;

        str2 = str2 + String.fromCharCode(a);
    }
    console.log(str2);     
}

encode("nikhil");

encode("AKHIL");