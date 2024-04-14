import { Avatar } from "@nextui-org/react";
import { Message } from "ai/react";
import { useMessageData } from "../context/MessageMetadata";
import { useAudioStore } from "../context/AudioStore";
import { voiceMap } from "../context/Deepgram";
import Image from "next/image";
import shreya from "../../public/shreya.svg"

export const AgentAvatar = ({
  message,
  className = "",
}: {
  message: Message;
  className?: string;
}) => {
  const { audioStore } = useAudioStore();
  const { messageData } = useMessageData();

  const foundAudio = audioStore.findLast((item) => item.id === message.id);
  const foundData = messageData.findLast((item) => item.id === message.id);

  if (foundAudio?.model) {
    return <Avatar src={voiceMap(foundAudio?.model).avatar} />;
  }

  if (foundData?.ttsModel) {
    return <Avatar src={voiceMap(foundData?.ttsModel).avatar} />;
  }

  return <Image src={shreya} alt={""}  />;
};
