import { Container, Typography } from "@mui/material";
import HomeLayout from "@/layout";
import PageMetadata from "@/components/util/PageMetadata";

export default function PrivacyPolicyPage(props) {
  return (
    <>
      <PageMetadata pageTitle={"Privacy Policy"} />
      <Container>
        <div>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Effective Date: Jan 1st, 2023
          </Typography>
          <Typography variant="body1" gutterBottom>
            This Privacy Policy outlines how DND Toolbox ("we", "us", or "our")
            collects, uses, and protects your personal information when you use
            our website and services (collectively, the "Services"). By using our
            Services, you agree to the collection and use of information in
            accordance with this Privacy Policy.
          </Typography>

          <Typography variant="h5" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may collect and process the following types of personal
            information:
          </Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                a. Personal identification information, such as your name, email
                address, and phone number.
              </li>
              <li>
                b. Usage data, including information about how you use our website
                and services.
              </li>
              <li>c. Any other information you choose to provide us.</li>
            </ul>
          </Typography>

          <Typography variant="h5" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            We use the information we collect for various purposes, including:
          </Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>a. Providing and maintaining our Services.</li>
              <li>
                b. Improving and personalizing your experience on our website.
              </li>
              <li>
                c. Communicating with you about our Services, promotions, and
                updates.
              </li>
              <li>
                d. Complying with legal obligations and protecting our rights.
              </li>
              <li>e. Detecting and preventing fraud and security threats.</li>
            </ul>
          </Typography>

          <Typography variant="h5" gutterBottom>
            3. Disclosure of Your Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may share your personal information with third parties under
            certain circumstances, such as:
          </Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>a. With your consent or at your direction.</li>
              <li>
                b. To comply with legal obligations or to protect our rights and
                interests.
              </li>
              <li>
                c. With trusted service providers who assist us in providing our
                Services.
              </li>
            </ul>
          </Typography>

          <Typography variant="h5" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are committed to protecting your personal information and have
            implemented appropriate technical and organizational measures to
            ensure its security. However, no method of data transmission or
            storage is 100% secure, so we cannot guarantee absolute security.
          </Typography>

          <Typography variant="h5" gutterBottom>
            5. Third-Party Websites
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites, and we
            encourage you to read their privacy policies before submitting any
            personal information.
          </Typography>

          <Typography variant="h5" gutterBottom>
            6. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may update our Privacy Policy from time to time. We will notify you
            of any changes by posting the new Privacy Policy on this page. Changes
            are effective immediately upon posting.
          </Typography>

          <Typography variant="h5" gutterBottom>
            7. Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you have any questions or concerns about our Privacy Policy, please
            contact us at [Insert contact email address].
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please note that this is a generic Privacy Policy and may not fully
            cover all legal requirements. We recommend consulting with legal
            counsel to ensure that your Privacy Policy is compliant with
            applicable laws and regulations in your jurisdiction.
          </Typography>
        </div>
      </Container>
    </>

  );
}

PrivacyPolicyPage.getLayout = HomeLayout;
