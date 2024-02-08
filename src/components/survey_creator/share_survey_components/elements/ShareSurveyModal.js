"use client"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { IoClose, IoCopy } from 'react-icons/io5';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    GabIcon,
    GabShareButton,
    HatenaIcon,
    HatenaShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LineIcon,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalIcon,
    LivejournalShareButton,
    MailruIcon,
    MailruShareButton,
    OKIcon,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketIcon,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    VKIcon,
    VKShareButton,
    ViberIcon,
    ViberShareButton,
    WeiboIcon,
    WeiboShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
export default function ShareSurveyModal({setOpenShareModal}) {
    const shareUrl = 'http://github.com';
    const title = "GitHub"
    const [isCopied, setIsCopied] = useState(false)

    const onCopy = async ()=> {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setIsCopied(true)
            setTimeout(()=> setIsCopied(false) ,1000)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8">
            <h2 className="text-3xl text-neutral-800 pb-3 border-b-2 border-blue-500 mb-3"><b>Share:</b> Universal Survey</h2>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 mt-4 gap-6">

                    <button className="w-[52px] h-[52px] flex justify-center items-center shadow-md rounded-full text-2xl bg-blue-100 hover:bg-blue-300"><ImEmbed2 /></button>
                    <button className={`w-[52px] h-[52px] flex justify-center items-center shadow-md rounded-full text-2xl ${isCopied ? "bg-green-300" : "bg-red-200" }`} onClick={onCopy}>
                    {isCopied ? 
                    <FaCheck />:
                    <IoCopy />
                    }
                    </button>
                    
                    <FacebookShareButton url={shareUrl} className="">
                        <FacebookIcon size={52} round />
                    </FacebookShareButton>

                    <FacebookMessengerShareButton
                        url={shareUrl}
                    >
                        <FacebookMessengerIcon size={52} round />
                    </FacebookMessengerShareButton>

                    <TelegramShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <TelegramIcon size={52} round />
                    </TelegramShareButton>

                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        
                        
                    >
                        <WhatsappIcon size={52} round />
                    </WhatsappShareButton>

                    <LinkedinShareButton url={shareUrl} >
                        <LinkedinIcon size={52} round />
                    </LinkedinShareButton>

                    <PinterestShareButton
                        url={shareUrl}
                    >
                        <PinterestIcon size={52} round />
                    </PinterestShareButton>

                    <VKShareButton
                        url={shareUrl}
                        
                        
                    >
                        <VKIcon size={52} round />
                    </VKShareButton>

                    <OKShareButton
                        url={shareUrl}
                    >
                        <OKIcon size={52} round />
                    </OKShareButton>

                    <RedditShareButton
                        url={shareUrl}
                        title={title}
                        
                        
                    >
                        <RedditIcon size={52} round />
                    </RedditShareButton>

                    <GabShareButton
                        url={shareUrl}
                        title={title}
                        
                        
                    >
                        <GabIcon size={52} round />
                    </GabShareButton>

                    <TumblrShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <TumblrIcon size={52} round />
                    </TumblrShareButton>

                    <LivejournalShareButton
                        url={shareUrl}
                        title={title}
                        
                        
                    >
                        <LivejournalIcon size={52} round />
                    </LivejournalShareButton>

                    <MailruShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <MailruIcon size={52} round />
                    </MailruShareButton>


                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        
                        
                    >
                        <EmailIcon size={52} round />
                    </EmailShareButton>

                    <ViberShareButton url={shareUrl} title={title} >
                        <ViberIcon size={52} round />
                    </ViberShareButton>

                    <ViberShareButton url={shareUrl} title={title} >
                        <ViberIcon size={52} round />
                    </ViberShareButton>

                    <LineShareButton url={shareUrl} title={title} >
                        <LineIcon size={52} round />
                    </LineShareButton>

                    <WeiboShareButton
                        url={shareUrl}
                        title={title}
                        
                        
                    >
                        <WeiboIcon size={52} round />
                    </WeiboShareButton>

                    <PocketShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <PocketIcon size={52} round />
                    </PocketShareButton>

                    <InstapaperShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <InstapaperIcon size={52} round />
                    </InstapaperShareButton>

                    <HatenaShareButton
                        url={shareUrl}
                        title={title}
                        
                    >
                        <HatenaIcon size={52} round />
                    </HatenaShareButton>


                </div>

                <div class="w-full">

                    <button class="text-white text-4xl absolute top-6 right-10" onClick={()=> setOpenShareModal(false)} ><IoClose /></button>
                </div>
            </div>
        </div>
    )
}
