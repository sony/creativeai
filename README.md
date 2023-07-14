<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="local.css">
</head>

<div class="bk_container">
	<div class="bk_item"><a href="#sec_dgm">I. Deep Generative Modeling</a></div>
	<div class="bk_item"><a href="#sec_nlp">II. Multimodal NLP & Commonsense AI</a></div>
	<div class="bk_item"><a href="#sec_mct">III. Music & Cinematic Technologies</a></div>
</div>

<a name="sec_dgm"></a>
# I. Deep Generative Modeling 

<br>

<div class="trow">
	<div class="tile">
		<h3>SQ-VAE</h3>
		<a href="https://proceedings.mlr.press/v162/takida22a.html"><img src="./assets/sqvae.png"></a>
		<h5>
			<a href="https://proceedings.mlr.press/v162/takida22a.html">[PMLR]</a>
			<a href="https://arxiv.org/abs/2205.07547">[arXiv]</a>
			<a href="https://github.com/sony/sqvae">[code]</a>
		</h5>
		<p>TL;DR: Training vector quantization efficiently and stably with variational Bayes framework.<br>(ICML2022)</p>
	</div>
	<div class="tile">
		<h3>ARELBO</h3>
		<img src="./assets/ar-elbo.png">
		<h5>
			<a href="https://www.sciencedirect.com/science/article/pii/S0925231222010591">[Elsevier]</a>
			<a href="https://arxiv.org/abs/2102.08663">[arXiv]</a>
		</h5>
		<p>TL;DR: Generalizing parameterizations of the data variance in Gaussian VAE to prevent oversmoothness of decoder.<br>(Neurocomputing2022)</p>
	</div>
	<div class="tile">
		<h3>SAN</h3>
		<img src="./assets/SAN.png">
		<h5>
			<a href="https://arxiv.org/abs/2301.12811">[arXiv]</a>
		</h5>
		<p>TL;DR: Deriving metrizable conditions for GANs from the perspective of sliced optimal transport and modifying the maximization problems.</p>
	</div>
		<div class="tile">
		<h3>FP-Diffusion</h3>
		<img src="./assets/ScoreFPE_3Doutline_single.gif">
		<h5>
			<a href="https://arxiv.org/abs/2210.04296">[arXiv]</a>
			<a href="https://github.com/sony/fp-diffusion">[code]</a>
		</h5>
		<p>TL;DR: Improving density estimation of diffusion models by regularizing with the underlying equation describing the temporal evolution of scores, theoretically supported.<br>(ICML2023)</p>
		<div class="tile_highlight">ICML23</div>
	</div>
		<div class="tile">
		<h3>Consistency-type Models</h3>
		<img src="./assets/ctm_thumbnail.png">
		<h5>
			<a href="https://arxiv.org/abs/2306.00367">[arXiv]</a>
		</h5>
		<p>TL;DR: Establishing theoretical equivalence between three consistency concepts of diffusion models, including FP-Diffusion.<br>(ICML2023 SPIGM workshop)</p>
		<div class="tile_highlight">ICML23 SPIGM workshop</div>
	</div>	
	<div class="tile">
		<h3>GibbsDDRM</h3>
		<img src="./assets/GibbsDDRM.png">
		<h5>
			<a href="https://arxiv.org/abs/2301.12686">[arXiv]</a>
			<a href="https://github.com/sony/gibbsddrm">[code]</a>
		</h5>
		<p>TL;DR: Solving blind inverse problems unsupervisedly with Denoising Diffusion Restoration Models.<br>(ICML2023 Oral)</p>
		<div class="tile_highlight">ICML23 Oral</div>
		<h6>Downstream applications: </h6>
			<ul>
				<h5><a href="https://arxiv.org/abs/2211.04124"><li>Vocal Dereverberation</li></a></h5>
				<h5><a href="https://arxiv.org/abs/2210.17287"><li>Speech Enhancement</li></a></h5>
			</ul>
	</div>
        <div class="tile" style="background-color: white;"></div>
</div>





<a name="sec_nlp"></a>
# II. Multimodal NLP & Commonsense AI

<br>

<div class="trow">
	<div class="tile">
		<h3>ComFact</h3>
		<a href="https://aclanthology.org/2022.findings-emnlp.120/"><img src="./assets/comfact.png"></a>
		<h5>
			<a href="https://aclanthology.org/2022.findings-emnlp.120/">[EMNLP]</a>
			<a href="https://arxiv.org/abs/2210.12678">[arXiv]</a>
			<a href="https://github.com/epfl-nlp/ComFact">[code]</a>
		</h5>
		<p>ComFact: A Benchmark for Linking Contextual Commonsense Knowledge<br>(EMNLP2022 Findings)</p>
	</div>
	<div class="tile">
		<h3>PeaCok</h3>
		<a href="https://arxiv.org/abs/2305.02364"><img src="./assets/personas.png"></a>
		<h5>
			<a href="https://arxiv.org/abs/2305.02364">[arXiv]</a>
		</h5>
		<p>PeaCoK: Persona Commonsense Knowledge for Consistent and Engaging Narratives<br>(ACL2023)</p>
		<div class="tile_highlight">ACL23 Outstanding Paper Award</div>
	</div>
        <div class="tile" style="background-color: white;"></div>
        <div class="tile" style="background-color: white;"></div>

</div>


<a name="sec_mct"></a>
# III. Music & Cinematic Technologies

<br>

<div class="trow">
	<div class="tile">
		<h3>hFT-Transformer</h3>
		<img src="./assets/hfttransformer.png">
		<h5>
			<a href="https://arxiv.org/abs/2307.04305">[arXiv]</a>
			<a href="https://github.com/sony/hFT-Transformer">[code]</a>
		</h5>
		<p>Automatic Piano Transcription with Hierarchical Frequency-Time Transformer<br>(ISMIR2023)</p>
		<div class="tile_highlight">ISMIR2023</div>
	</div>
	<div class="tile">
		<h3>CLIPSep</h3>
		<img src="./assets/CLIPSep.png">
		<h5>
			<a href="https://openreview.net/forum?id=H-T3F0dMbyj">[OpenReview]</a>
		</h5>
		<p>CLIPSep: Learning Text-queried Sound Separation with Noisy Unlabeled Videos<br>(ICLR2023)</p>
	</div>
	<div class="tile">
		<h3>Automatic Music Tagging</h3>
		<img src="./assets/ResAtt.png">
		<h5>
			<a href="https://arxiv.org/abs/2302.08136">[arXiv]</a>
		</h5>
		<p>An Attention-based Approach To Hierarchical Multi-label Music Instrument Classification<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Vocal Dereverberation</h3>
		<img src="./assets/dereverb.png">
		<h5>
			<a href="https://arxiv.org/abs/2211.04124">[arXiv]</a>
			<a href="https://koichi-saito-sony.github.io/unsupervised-vocal-dereverb/">[demo]</a>
		</h5>
		<p>Unsupervised Vocal Dereverberation with Diffusion-based Generative Models<br>(ICASSP2023)</p>
	</div>	
	<div class="tile">
		<h3>Mixing Style Transfer</h3>
		<img src="./assets/mixstyletransfer.png">
		<h5>
			<a href="https://arxiv.org/abs/2211.02247">[arXiv]</a>
			<a href="https://github.com/jhtonyKoo/music_mixing_style_transfer">[code]</a>
			<a href="https://jhtonykoo.github.io/MixingStyleTransfer/">[demo]</a>
		</h5>
		<p>Music Mixing Style Transfer: A Contrastive Learning Approach to Disentangle Audio Effects<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Music Transcription</h3>
		<img src="./assets/amt.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.05148">[arXiv]</a>
			<a href="https://github.com/sony/DiffRoll">[code]</a>
			<a href="https://sony.github.io/DiffRoll/">[demo]</a>
		</h5>
		<p>DiffRoll: Diffusion-based Generative Music Transcription with Unsupervised Pretraining Capability<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Singing Voice Vocoder</h3>
		<img src="./assets/vocoder.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.07508">[arXiv]</a>
			<a href="https://t-naoya.github.io/hdm/">[demo]</a>
		</h5>
		<p>Hierarchical Diffusion Models for Singing Voice Neural Vocoder<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Distortion Effect Removal</h3>
		<img src="./assets/deeffect.png">
		<h5>
			<a href="https://ismir2022program.ismir.net/poster_113.html">[poster]</a>
			<a href="https://arxiv.org/abs/2202.01664">[arXiv]</a>
			<a href="https://joimort.github.io/distortionremoval/">[demo]</a>
		</h5>
		<p>Distortion Audio Effects: Learning How to Recover the Clean Signal<br>(ISMIR2022)</p>
	</div>
	<div class="tile">
		<h3>Automatic Music Mixing</h3>
		<img src="./assets/automix.png">
		<h5>
			<a href="https://ismir2022program.ismir.net/poster_11.html">[poster]</a>
			<a href="https://arxiv.org/abs/2208.11428">[arXiv]</a>			
			<a href="https://github.com/sony/fxnorm-automix">[code]</a>
			<a href="https://marco-martinez-sony.github.io/FxNorm-automix/">[demo]</a>
		</h5>
		<p>Automatic Music Mixing with Deep Learning and Out-of-Domain Data<br>(ISMIR2022)</p>
	</div>	
	<div class="tile">
		<h3>Sound Separation</h3>
		<a href="https://ieeexplore.ieee.org/document/9746317"><img src="./assets/srcsep.png"></a>
		<h5>
			<a href="https://ieeexplore.ieee.org/document/9746317">[IEEE]</a>
		</h5>
		<p>Music Source Separation with Deep Equilibrium Models<br>(ICASSP2022)</p>
	</div>
	<div class="tile">
		<h3>Automatic DJ Transition</h3>
		<img src="./assets/djtransgan.png">
		<h5>
			<a href="https://arxiv.org/abs/2110.06525">[arXiv]</a>
			<a href="https://github.com/ChenPaulYu/DJtransGAN">[code]</a>
			<a href="https://paulyuchen.com/djtransgan-icassp2022/">[demo]</a>
		</h5>
		<p>Automatic DJ Transitions with Differentiable Audio Effects and Generative Adversarial Networks<br>(ICASSP2022)</p>
	</div>
	<div class="tile">
		<h3>Singing Voice Conversion</h3>
		<img src="./assets/svc.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.11096">[arXiv]</a>
			<a href="https://t-naoya.github.io/rosvc/">[demo]</a>
		</h5>
		<p>Robust One-Shot Singing Voice Conversion</p>
	</div>
	<div class="tile">
		<h3>Sound Separation</h3>
		<a href="https://www.youtube.com/watch?v=EWYxJGmw0Ng"><img src="./assets/enoch_arden.jpg"></a>
		<h5>
			<a href="https://www.youtube.com/watch?v=EWYxJGmw0Ng">[video]</a>
			<a href="https://www.sony.com/en/SonyInfo/technology/stories/AI_Sound_Separation/">[site]</a>
		</h5>
		<p>Glenn Gould and Kanji Ishimaru 2021: A collaboration with AI Sound Separation after 60 years</p>
	</div>
	<div class="tile">
		<h3>MDX21</h3>
		<a href="https://mdx-workshop.github.io/"><img src="./assets/MDX.png"></a>
		<h5>
			<a href="https://mdx-workshop.github.io/">[site]</a>
			<a href="https://www.frontiersin.org/articles/10.3389/frsip.2021.808395/full">[frontiers]</a>
		</h5>
		<p>Music Demixing Challenge 2021</p>
	</div>		
	<div class="tile">
		<h3>DCASE Challenge</h3>
		<img src="./assets/DCASE.png">
		<h5>
			<a href="https://dcase.community/challenge2023/#sound-event-localization-and-detection-evaluated-in-real-spatial-sound-scenes">[DCASE Challenge2023]</a>
		</h5>
		<p>Sound Event Localization and Detection Evaluated in Real Spatial Sound Scenes</p>
	</div>	
	<div class="tile">
		<h3>Sound Event Localization and Detection</h3>
		<img src="./assets/ACCDOA.png">
		<h5>
			<a href="https://arxiv.org/abs/2110.07124">[arXiv]</a>
		</h5>
		<p>Multi-ACCDOA: Localizing and Detecting Overlapping Sounds from the Same Class with Auxiliary Duplicating Permutation Invariant Training (ICASSP2022)</p>
	</div>	
</div>

### Contact
<h5 align="left"> Yuki Mitsufuji (yuhki.mitsufuji@sony.com) </h5>
