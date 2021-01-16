//Universal Element pointer
const out1 = document.getElementsByClassName("out");
const btn = document.getElementById("btn");
const clear = document.getElementById("clear");


//MAIN PROGRAM
function genJcl()
{
    //Local variables
    const dbName = document.getElementById("dbName").value;
    const stLb1 = document.getElementById("stLb1").value;
    const stLb2 = document.getElementById("stLb2").value;
    const dfsLb = document.getElementById("dfsLb").value;
    const ims = document.getElementById("ims").value;
    const db = document.getElementById("db").value;
    const dbd = document.getElementById("dbd").value;
    const ddn = document.getElementById("ddn").value;
    //***Don't touch - JCL code generator */
    //Makes me miss React
    out.innerHTML = 
    "<p class='outJs'>//YOURBKUP"+"&nbsp&nbsp&nbsp"+"<span class='reds'>JOB</span> (01,URNAME),<span class='whites'>'BKUP'</span>,ADDRSPC=VIRT,CLASS=X,</p>" +
    "<p  class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"MSGCLASS=H,MSGLEVEL=(1,1),NOTIFY=&SYSUID</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"<span class='reds'>EXEC</span> PGM=FABJMAIN</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"STEPLIB    <span class='reds'>DD</span>  DISP=SHR,DSN=" + stLb1.toUpperCase() + "</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  DISP=SHR,DSN="+ stLb2.toUpperCase() + "</p>" +
    "<p class='outJs'>//DFSRESLB"+"&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  DISP=SHR,DSN="+ dfsLb.toUpperCase() + "</p>" +
    "<p class='outJs'>//IMS"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  DISP=SHR,DSN="+ ims.toUpperCase() + "</p>" +
    "<p class='outJs'>//YOURDBNM"+"&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  DISP=SHR,DSN="+db.toUpperCase()+"</p>" +
    "<p class='outJs'>//DFSPRINT"+"&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  SYSOUT=*</p>" +
    "<p class='outJs'>//ICEPRINT"+"&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  SYSOUT=*</p>" +
    "<p class='outJs'>//ICEIN"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span>  *</p>" +
    "<p class='outJs'>"+"&nbsp&nbsp"+"<span class='whites'>IC"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"DBD="+ dbd.toUpperCase() + ",DDN="+ ddn.toUpperCase() + ",ICOUT=HDAMDD01</span></p>" +
    "<p class='outJs'>//HDAMDD01"+"&nbsp&nbsp&nbsp"+"<span class='reds'>DD</span> DSN=&SYSUID.."+ dbName.toUpperCase() + ".D&LYYMMDD,</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"UNIT=(,5),SPACE=(CYL,(100,100),RLSE),</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"MGMTCLAS=EXPIR031,</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"DISP=(,CATLG,DELETE),</p>" +
    "<p class='outJs'>//"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"DCB=(DSORG=PS,RECFM=FB,LRECL=80,BLKSIZE=27920)</p>"
}

//Events
btn.onclick = genJcl;
clear.onclick = clearBtn;


//Functions and features
//Clear button function
function clearBtn()
{
    out.innerHTML = "<p class='outJs'>UR JCL WILL SHOW UP HERE<span class='blink'>_</span></p>"
    stLb1.value="";
    stLb2.value="";
    dfsLb.value="";
    ims.value="";
    db.value="";
    dbd.value="";
    ddn.value="";
    dbName.value="";
}


