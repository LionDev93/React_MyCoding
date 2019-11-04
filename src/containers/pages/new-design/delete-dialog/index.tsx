import * as React from 'react';
import ModalContainer from '@edmit/component-library/src/components/atoms/modal-container';
import Heading, { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';


interface IDeleteConfirmViewModel {
    isOpen: boolean;
    clickoutEnabled?: boolean;
}

interface IDeleteConfirmActions {
    onConfirm: () => any | void;
    onCancel?: () => any | void;
}

type DeleteConfirmProps = IDeleteConfirmViewModel & IDeleteConfirmActions;

const DeleteConfirmDialog: React.FC<DeleteConfirmProps> = props => {
    return (
        <>
            <ModalContainer
                maxWidth={600}
                isOpen={props.isOpen}
                onClickOut={props.clickoutEnabled ? props.onCancel : undefined}
                style={{ overflowY: 'auto' }}
            >
                <div className="pa4">
                    <div className="flex flex-column">
                        <Heading
                            size={EHeadingSize.H3}
                            text="Are you sure you want to remove this college from your list?"
                            className="tl"
                            style={{ fontWeight: 900 }}
                        />
                        <div className="flex flex-column mv4">
                            <Button
                                className="w-100 mv1"
                                text={"Yes,remove"}
                                onClick={props.onConfirm}
                                size={EButtonSize.Large}
                                type={EButtonType.Primary}
                            />
                            <Button
                                className="w-100 mv1"
                                text={"No,cancel"}
                                onClick={props.onCancel}
                                size={EButtonSize.Large}
                                type={EButtonType.Secondary}
                            />
                        </div>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default DeleteConfirmDialog;