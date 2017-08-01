<template>
  <article>
    <page-title title="Installing WBEL4 (RHEL4) on an Averatec 6200 Laptop « Linux Resources" />
    <h1>Installing WBEL4 (RHEL4) on an Averatec 6200 Laptop</h1>
    <aside>
      <p>
        <strong>Topics:</strong><br>
        <a href="#what">What Do I Have?</a><br>
        <a href="#partitioning">Partitioning</a><br>
        <a href="#installing">Installation</a><br>
        <a href="#video">Video</a><br>
        <a href="#wireless">Wireless Networking</a><br>
        <a href="#tweaks">Other Tweaks</a><br>
        <a href="#left">What&rsquo;s Left?</a>
        </p>
    </aside>
    <p>
      As an early Father&rsquo;s Day 2005 present, I received a new Averatec 6240 laptop. Being the Linux enthusiast
      that I am, within 24 hours of getting it, I had wiped the Windows XP Home Edition&reg; that came on it. The
      previous week, I had downloaded <a href="http://www.whiteboxlinux.org">White Box Enterprise Linux
      (http://www.whiteboxlinux.org)</a> version 4, with an eye to upgrading my existing computer, so I had a recent set
      of CDs burned already. (WBEL is a clone of Red Hat Enterprise Linux, as is CentOS, so these instructions may be
      helpful for all RHEL derivatives.) I&rsquo;ve organized this into topics &ndash; just click one to jump right to
      it.
    </p>
    <p>
      <small><em>(Note: This information is provided as information only, and a reflection of what I did to get my
      laptop running the way I wanted it. It may or may not work for you &ndash; no guarantee is specified or implied,
      and I cannot be held responsible for any hardware failure or data loss you may encounter by following any of the
      steps in this guide. At any rate, it&rsquo;s still probably worth double what you&rsquo;re paying for
      it&hellip;&nbsp; ;&gt;)</em></small>
    </p>
    <p>
      <del>
        <strong>A Work in Progress</strong> &ndash; This page is not complete &ndash; check the &ldquo;What&rsquo;s
        Left?&rdquo; topic to see what changes still need to be made before I&rsquo;ll consider it
        &ldquo;complete&rdquo;.
      </del>
      This page is as complete as it&rsquo;s ever going to be.
    </p>
    <h2><a name="what"></a>What Do I Have?</h2>
    <p>
      To determine what type of hardware you have, you can use the command <tt>/sbin/lspci</tt>. On this laptop, I was
      able to boot with <a href="http://wwww.knoppix.com">Knoppix</a>, one of the most feature-rich Linux Live CD
      distributions out there. The list on this laptop is shown below&hellip;
    </p>
    <blockquote>
<pre>0000:00:00.0 Host bridge: Silicon Integrated Systems [SiS] 760/M760 Host (rev 03)
0000:00:01.0 PCI bridge: Silicon Integrated Systems [SiS] SG86C202
0000:00:02.0 ISA bridge: Silicon Integrated Systems [SiS] SiS85C503/5513 (LPC Bridge) (rev 25)
0000:00:02.5 IDE interface: Silicon Integrated Systems [SiS] 5513 [IDE]
0000:00:02.6 Modem: Silicon Integrated Systems [SiS] AC'97 Modem Controller (rev a0)
0000:00:02.7 Multimedia audio controller: Silicon Integrated Systems [SiS] Sound Controller (rev a0)
0000:00:03.0 USB Controller: Silicon Integrated Systems [SiS] USB 1.0 Controller (rev 0f)
0000:00:03.1 USB Controller: Silicon Integrated Systems [SiS] USB 1.0 Controller (rev 0f)
0000:00:03.3 USB Controller: Silicon Integrated Systems [SiS] USB 2.0 Controller
0000:00:04.0 Ethernet controller: Silicon Integrated Systems [SiS] SiS900 PCI Fast Ethernet (rev 91)
0000:00:0a.0 CardBus bridge: ENE Technology Inc CB1410 Cardbus Controller (rev 01)
0000:00:0e.0 Network controller: RaLink Ralink RT2500 802.11 Cardbus Reference Card (rev 01)
0000:00:18.0 Host bridge: Advanced Micro Devices [AMD] K8 NorthBridge
0000:00:18.1 Host bridge: Advanced Micro Devices [AMD] K8 NorthBridge
0000:00:18.2 Host bridge: Advanced Micro Devices [AMD] K8 NorthBridge
0000:00:18.3 Host bridge: Advanced Micro Devices [AMD] K8 NorthBridge
0000:01:00.0 VGA compatible controller: Silicon Integrated Systems [SiS] 661FX/M661FX/M661MX/741/M741/760/M760 PCI/AGP</pre>
    </blockquote>
    <p>
      This may seem like a waste of time (especially if you don&rsquo;t have a Knoppix CD lying around already, but this
      information can be invaluable when you try to get these devices working. A couple of things jump out from the
      above list &ndash; most of the hardware in this box was made by Silicon Integrated Systems, with the notable
      exception of the cardbus controller and the 802.11 (wireless) network adapter.
    </p>
    <h2><a name="partitioning"></a>Partitioning</h2>
    <p>
      Partitioning was a particular concern for me, as I wanted to set up a dual-boot Windows/Linux installation.
      Windows must have its files on the first partition for it to successfully boot, so I set up Windows first. I
      messed up a bit, as I tried to declare a 100MB boot partition as the first partition. Windows insisted on
      formatting it, so it could put its boot files on it, so I basically have a wasted 100MB at the front of my drive.
      (Not a big deal&hellip;)
    </p>
    <p>
      I created a 12GB partition for Windows, and a 15GB partition for &ldquo;shared&rdquo; data &ndash; I formatted it
      as FAT32 (vfat), so that both Windows and Linux can read it. This was fine, but combined with my extra 100MB
      partition, the WBEL installer was unable to automatically partition the remaining free space.&nbsp; This
      isn&rsquo;t a big problem &ndash; there&rsquo;s are two pretty simple rules to remember about partitions that
      Linux needs&hellip;
    </p>
    <ul>
      <li>
        There must be a root (&ldquo;/&rdquo;) partition (I calculated the size of this by subtracting the amount of
        swap space I needed (see the next rule), then allocating the remaining free space to the root partition)
      </li>
      <li>
        There must be a swap partition (actually the &ldquo;swap&rdquo; filesystem type) that is twice as big as your
        RAM (for this machine, that meant 1024MB)
      </li>
    </ul>
    <p>Here is my current partition table&hellip;</p>
    <blockquote>
<pre># /sbin/fdisk -l

Disk /dev/hda: 60.0 GB, 60011642880 bytes
255 heads, 63 sectors/track, 7296 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/hda1   *           1          13      104391    6  FAT16
/dev/hda2              14        7295    58492665    f  W95 Ext'd (LBA)
/dev/hda5              14        1580    12586896    7  HPFS/NTFS
/dev/hda6            1581        3589    16137261    b  W95 FAT32
/dev/hda7            3590        7158    28667961   83  Linux
/dev/hda8            7159        7289     1052226   82  Linux swap</pre>
    </blockquote>
    <h2><a name="installing"></a>Installing</h2>
    <p>
      Installing Linux is naturally the first thing you&rsquo;ll need to do. However, the default install options did
      not work for me. What did work was <tt>linux nofb xdriver=sis</tt>. This tells anaconda to not use a framebuffer
      (which, as I read, is incompatible with most of the LCD flat-panels that laptops have), and to use the
      &ldquo;sis&rdquo; (Silicon Integrated Systems) driver. Even with this, the installer will not detect the SiS video
      card or the flat-panel display &ndash; but that&rsquo;s okay, just let it install with the VESA driver and a
      generic 1024&times;768 layout. It&rsquo;ll be stretched, but definitely readable. (See the &ldquo;video&rdquo;
      topic for how to fix this.) Also, if you really mess something up, you&rsquo;ll need to pass those parameters in
      the rescue mode &ndash; the full command is <tt>linux rescue nofb xdriver=sis</tt>.
    </p>
    <p>
      I picked the server install, and selected most packages &ndash; this setup allows me to run both GNOME and KDE,
      and build applications for either. Be sure to install the system files, so you can compile kernel modules if you
      need them (which you&rsquo;ll need to do for the xdriver and wireless driver). Do not skip the OpenOffice.org I18N
      libraries &ndash; even though they&rsquo;re huge, it won&rsquo;t run without them. (I learned that the hard way.)
    </p>
    <h2><a name="video"></a>Video</h2>
    <p>
      I mentioned that during the install, the monitor would not be detected. Using the system viedo config, you can set
      the LCD panel to 1280&times;800. Then, head over to <a href="http://www.winischhofer.at/linuxsisvga.shtml">Thomas
      Winischhofer&rsquo;s site about the SiS video driver</a>. He is the author of the SiS driver that&rsquo;s
      distributed with Linux, and his site has a lot of information about this chipset. On his site, he has built on
      that base, in his own time, and created a very usable driver for the SiS chipset. There are links to download
      various products &ndash; I downloaded the driver and the sisctrl program, and built them.
    </p>
    <p>
      Once I restarted the machine, it was better, but not quite there. I posted on the forums (also on the Winischhofer
      site) about my problem, and the author himself responded
      (<a href="http://www.winischhofer.at/sisforum/viewtopic.php?t=76">the thread is here</a>).&nbsp; In my case,
      1280&times;800 was not put in by the driver &ndash; but, I think it may have been because I hadn&rsquo;t set the
      LCD panel settings when I installed the driver.
    </p>
    <h2><a name="wireless"></a>Wireless Networking</h2>
    <p>
      The RaLink wireless ethernet card has a very capable open-source driver. It can be downloaded from
      <a href="http://rt2x00.serialmonkey.com/wiki/index.php/Main_Page">SerialMonkey&rsquo;s web site</a>. I downloaded
      the driver, followed the instructions, and couldn&rsquo;t get it to work. It installed the adapter as ra0, but
      Linux was finding it as eth1 - and I couldn&rsquo;t get eth1 to change to ra0, or ra0 to change to eth1. I finally
      posted a message on the
      <a href="http://sourceforge.net/forum/forum.php?thread_id=1294781&amp;forum_id=370891">driver&rsquo;s
      SourceForge.net forums</a>, and the author told me that I needed to use <tt>make install-fedora</tt> instead of
      just <tt>make install</tt>.
    </p>
    <p>
      Every so often, I had problems getting the wireless card to connect with my home LAN. I changed my DHCP lease
      times from two weeks to two hours, and that problem cleared up. I think, for some reason, the router was not
      sensing when the wireless card would disconnect &ndash; so, when it tried to connect again, the router would just
      ignore it. Windows didn&rsquo;t seem to have similar problems, but that&rsquo;s a small tweak to make that
      hasn&rsquo;t affected any of the other computers on the network. I have gotten good responses from the developers
      of the wireless driver, and hope to be able to help them track this down if they&rsquo;re interested. (They are
      concentrating most of their new work on a new driver called &ldquo;rt2x00&Prime; that will work for all RaLink
      RT2400 and RT2500 series network adapters, so this feature may be available in them. They&rsquo;ve also moved
      their forums - <a href="http://rt2x00.serialmonkey.com/phpBB2/index.php">the official support forms can be found
      here</a>.)
    </p>
    <h2><a name="tweaks"></a>Other Tweaks</h2>
    <p>They&rsquo;ll be here soon!</p>
    <h2><a name="left"></a>What&rsquo;s Left?</h2>
    <p>Issues I&rsquo;m still working on&hellip;</p>
    <ul>
      <li>
        <strong>PCMCIA</strong> &ndash; This is so slow initializing that rhgb (Red Hat&rsquo;s graphical booter)
        actually switches back to console one. I&rsquo;m sure there&rsquo;s a way to make it not take so long, I just
        need to figure out what it is.
      </li>
      <li>
        <strong>Audio Input</strong> &ndash; I tried to use the microphone in jack, and nothing would take sound from
        it.
      </li>
      <li>
        <strong>Shared Data Between XP and WBEL</strong> &ndash; This is working differently than WBEL3 did &ndash; once
        I figure it out, it&rsquo;ll be here too
      </li>
    </ul>
  </article>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'averatec',
  components: {
    PageTitle
  }
}
</script>

<style scoped>
aside {
  float: right;
  width: auto;
  border: solid 2px navy;
  border-right: none;
  padding: 5px;
  border-radius: 10px;
  border-top-right-radius: 0;
	border-bottom-right-radius: 0;
  margin-right: -15px;
}
aside p {
  margin: 0;
  padding: 0;
}
</style>
