var input = document.querySelector("div[jsname='lKng5e']");

// answer dictionary
// https://infraexam.com/it-essentials-7/it-essentials-7-0-certification-checkpoint-exam-1-chapters-1-4-answers-ite-7-0-ite-7-02/
var answers = {
	"A user is building a custom computer system and is trying to decide on components for the new system. The user does light to medium graphic design, programming, and gaming. Which two components would be appropriate for this type of machine? (Choose two.)": "- dedicated video card\n- SSD",
	"A technician has installed a new second hard drive in a tower computer, but the drive does not show up in the BIOS. What are two things the technician should check first? (Choose two.)": "- Data and power cables are attached.\n- The drive port is enabled in the BIOS.",
	"A user reports that when games are being played, the computer displays random blotches on the screen. What are two possible causes? (Choose two.)": "- loose video cable\n- GPU overheating",
	"A technician is installing memory into a computer and notices that there are two black memory slots and two blue memory slots. Which memory technology does this motherboard use?": "dual channel",
	"A user has the following requirements for a RAID drive:": "3.5 inch 15K drive",
	"A company is deploying both thin and thick client computers. Which configuration step will a technician need to do on the thin clients that will most likely not be done on the thick clients?": "Connect the computer to the application server.",
	"A technician is researching how to troubleshoot a computer that reboots randomly. The research suggests that the technician should check the computer for distended capacitors. Where should the technician look for these?": "on the motherboard",
	"Where would a technician use an RG-6 cable?": "when replacing cable TV cabling",
	"A technician is asked to configure a laptop for LoJack. What will the technician have to do to accomplish this task?": "Enable it in BIOS.",
	"A technician needs to purchase a storage drive that both connects directly to the PCIe bus and provides reliability. Which type of storage device would best meet these requirements?": "NVMe M.2",
	"A user is building a new computer system. Why would the user select a straight-through cable?": "- \n- ",
	"A user is building a new computer system. Why would the user select a straight-through cable?": "to connect a device to a wired network",
	"A user is building a new computer system. Why would the user select a 24-pin connector?": "to attach power to the motherboard",
	"A user is building a new computer system. Why would the user select two hard drives?": "to configure a RAID",
	"A user is building a new computer system. Why would the user select a DVI to VGA adaptor?": "to attach to an analog monitor",
	"A user is building a new computer system. Why would the user select an RG-6 cable?": "to replace cable TV cabling",
	"A user is building a new computer system. Why would the user select a PCIe x16 expansion slot?": "to install a video card",
	"A user is building a new computer system. Why would the user select a DDR3?": "to install a memory module",
	"A user is building a new computer system. Why would the user select a DDR4?": "to install a memory module",
	"A user is building a new computer system. Why would the user select external screws?": "to install a power supply into a PC tower case",
	"What characteristic best describes a KVM switch?": "a device that allows the use of one set of keyboard, mouse, and monitor to control multiple computers",
	"What characteristic best describes a projector?": "an output device used to present information from a laptop onto a screen",
	"What characteristic best describes a touch screen?": "an input device that recognizes touch and pressure as instructions",
	"What characteristic best describes an AR headset?": "a head-mounted device that superimposes images and audio over a real world image and can provide users immediate access to information about their real surroundings",
	"What characteristic best describes a stylus?": "a pen-like tool that allows input by touching the surface of the screen",
	"who asked": "Joe....\nMAAAAAMMA",
	"What characteristic best describes a magstripe reader?": "",
	"What characteristic best describes a signature pad?": "an input device that provides verification of package delivery by digitizing a written name",
	"What characteristic best describes a keyboard?": "the first type of input device used for creating documents and emails",
	"What characteristic best describes a barcode scanner?": "an input device that reads barcodes affixed to most retail products",
	"Match the memory type to the feature. (Not all options are used.)": "288 pins - DDR4 SDRAM\n184 pins - DDR SDRAM\n240 pins 1.5V - DDR3 SDRAM\n240 pins 1.8V - DDR2 SDRAM",
	"Which statement describes a feature of SDRAM?": "It can process overlapping instructions in parallel.",
	"What characteristic best describes a flatbed scanner?": "an input device that digitizes an image by placing the document on a flat glass surface and scanning from underneath",
	"What characteristic best describes a biometric scanner?": "an input device often used to provide secure access to locations or devices by using voice, facial, or fingerprint recognition",
	"kanoj": "kokot",
	"What characteristic best describes a VR headset?": "a head-mounted device that provides head-motion and eye-tracking sensors and displays three-dimensional images",
	"What characteristic best describes a joystick?": "an input device for playing games and flight simulation applications",
	"What characteristic best describes a monitor?": "an output device that uses LED, LCD, or OLED technology"
}

// button
document.querySelector("div[jsname='bl4nBb']").removeAttribute("jsaction");
var button = document.querySelector("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc Rj2Mlf OLiIxf PDpWxe LQeN7 irkilc']");
button.removeAttribute("jsaction");
button.removeAttribute("jscontroller");

button.onclick  = function(){
	let output = document.querySelector("span[jsname='W297wb']");
	alert(answers[input.innerHTML]);
}
