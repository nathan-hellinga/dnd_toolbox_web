import { Container, Typography } from "@mui/material";
import HomeLayout from "@/layout";
import PageMetadata from "@/components/util/PageMetadata";

export default function TermsOfServicePage(props) {
  return (
    <>
      <PageMetadata pageTitle={"Terms of Service"} />
      <Container>
        <div>
          <Typography variant="h4" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please read these Terms of Service ("Terms") carefully before using
            the DND Toolbox website and services (collectively, the "Services")
            operated by us. By accessing or using our Services, you agree to be
            bound by these Terms. If you disagree with any part of the Terms, you
            may not access our Services.
          </Typography>

          <Typography variant="h5" gutterBottom>
            1. Accounts
          </Typography>
          <Typography variant="body1" gutterBottom>
            When you create an account with us, you must provide accurate and
            complete information. You are responsible for maintaining the
            confidentiality of your account and password, and you agree to accept
            responsibility for any activities or actions that occur under your
            account.
          </Typography>

          <Typography variant="h5" gutterBottom>
            2. Intellectual Property
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our Services and their original content, features, and functionality
            are and will remain the exclusive property of DND Toolbox and its
            licensors. Our Services are protected by copyright, trademark, and
            other laws of both the United States and foreign countries.
          </Typography>

          <Typography variant="h5" gutterBottom>
            3. Termination
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may terminate or suspend your account and access to our Services
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach these Terms.
            Upon termination, your right to use our Services will immediately
            cease.
          </Typography>

          <Typography variant="h5" gutterBottom>
            4. Limitation of Liability
          </Typography>
          <Typography variant="body1" gutterBottom>
            In no event shall DND Toolbox, its directors, employees, partners,
            agents, suppliers, or affiliates be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from (i) your access to or use of or
            inability to access or use the Services; (ii) any conduct or content
            of any third party on the Services; (iii) any content obtained from
            the Services; and (iv) unauthorized access, use or alteration of your
            transmissions or content, whether based on warranty, contract, tort
            (including negligence) or any other legal theory, whether or not we
            have been informed of the possibility of such damage, and even if a
            remedy set forth herein is found to have failed of its essential
            purpose.
          </Typography>

          <Typography variant="h5" gutterBottom>
            5. Governing Law
          </Typography>
          <Typography variant="body1" gutterBottom>
            These Terms shall be governed and construed in accordance with the
            laws of Canada, without regard to its conflict of law provisions.
          </Typography>

          <Typography variant="h5" gutterBottom>
            6. Changes to These Terms
          </Typography>
          <Typography variant="body1" gutterBottom>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. By continuing to access or use our Services
            after any revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, you are no longer
            authorized to use the Services.
          </Typography>
          <Typography variant="h5" gutterBottom>
            7. Disclaimer
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your use of the Services is at your sole risk. The Services are
            provided on an "AS IS" and "AS AVAILABLE" basis. The Services are
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of merchantability,
            fitness for a particular purpose, non-infringement, or course of
            performance.
          </Typography>

          <Typography variant="h5" gutterBottom>
            8. Indemnification
          </Typography>
          <Typography variant="body1" gutterBottom>
            You agree to defend, indemnify, and hold harmless DND Toolbox, its
            directors, employees, partners, agents, suppliers, and affiliates from
            and against any and all claims, damages, obligations, losses,
            liabilities, costs or debt, and expenses (including but not limited to
            attorney's fees), resulting from or arising out of (i) your use and
            access of the Services, by you or any person using your account and
            password; (ii) a breach of these Terms, or (iii) content posted on the
            Services.
          </Typography>

          <Typography variant="h5" gutterBottom>
            9. Service Availability
          </Typography>
          <Typography variant="body1" gutterBottom>
            DND Toolbox does not guarantee that the Services will be available,
            uninterrupted, secure, or error-free. We are not liable for any
            damages, loss, or inconvenience you may experience due to the
            unavailability, interruption, or malfunction of our Services,
            regardless of the duration of such events. You agree that your use of
            the Services is at your own risk, and you will not hold DND Toolbox
            responsible for any issues arising from the unavailability or
            malfunction of the Services.
          </Typography>
        </div>
      </Container>
    </>

  );
}

TermsOfServicePage.getLayout = HomeLayout;
