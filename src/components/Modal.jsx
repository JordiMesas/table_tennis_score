import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const Modal = ({
	isShowing,
	hide,
  handleSubmit,
	effectFormValidateDate,
	scoreForm,
	match,
	state,
	validateSuccess,
}) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className='modal-overlay' />
					<div
						className='modal-wrapper'
						aria-modal
						aria-hidden
						tabIndex={-1}
						role='dialog'
					>
						<div className='modal'>
							<div className='modal-header'>
								<button
									type='button'
									className='modal-close-button'
									data-dismiss='modal'
									aria-label='Close'
									onClick={hide}
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<Form
                handleSubmit={handleSubmit}
								effectFormValidateDate={effectFormValidateDate}
								scoreForm={scoreForm}
								match={match}
								stateButton={true}
							/>
							{!state ? (
								<small className='validate-alert'>
									Fill in the fields marked in red on the form!
								</small>
							) : null}

							{
								validateSuccess && (
									<small className='validate-successfully'>
										Updated successfully!
									</small>
								)
							}
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default Modal;
