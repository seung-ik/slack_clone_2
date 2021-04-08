import useInput from '@/hooks/useInput';
import { Button, Input, Label } from '@/pages/Signup/style';
import React, { FC, useCallback } from 'react'
import Modal from '../Modal';

interface Props{
  show:boolean;
  onCloseModal : ()=>void;
  setShowInviteWorkspaceModal: (flag:boolean)=>void;

}

const InviteChannelModal :FC<Props> = ({show,onCloseModal,setShowInviteWorkspaceModal}) => {

  const [newMember,onChangeNewMember,]=useInput("")

  const onInviteMember = useCallback(()=>{},[])
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteMember}>
        <Label id="member-label">
          <span>채널 멤버 초대</span>
          <Input id="member" value={newMember} onChange={onChangeNewMember} />
        </Label>
        <Button type="submit">초대하기</Button>
      </form>
    </Modal>
  );
}

export default InviteChannelModal
